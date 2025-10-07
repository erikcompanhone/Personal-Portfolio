import { render, screen, fireEvent, waitFor } from '../test-utils';
import Contact from '../pages/Contact';

describe('Contact network + dismissal + clipboard error branches', () => {
  const fill = (formIndex = 0) => {
    const name = screen.getAllByLabelText(/Name/i)[formIndex];
    const email = screen.getAllByLabelText(/Email/i)[formIndex];
    const subject = screen.getAllByLabelText(/Subject/i)[formIndex];
    const message = screen.getAllByLabelText(/Message/i)[formIndex];
    fireEvent.change(name, { target: { value: 'Erik' } });
    fireEvent.change(email, { target: { value: 'erik@example.com' } });
    fireEvent.change(subject, { target: { value: 'Hi' } });
    fireEvent.change(message, { target: { value: 'This is a sufficiently long message.' } });
    return { submit: screen.getAllByRole('button', { name: /Send Message/i })[formIndex] };
  };

  it('falls back via mailto on network failure (fetch reject)', async () => {
    const originalFetch = global.fetch;
    global.fetch = jest.fn().mockRejectedValue(new Error('network down'));
    // Stub window.location to capture href assignment without triggering jsdom navigation
    const originalLocation = window.location;
    let assigned = originalLocation.href;
    // @ts-ignore override for test
    delete (window as any).location;
    Object.defineProperty(window, 'location', {
      value: {
        get href() { return assigned; },
        set href(v: string) { assigned = v; },
      },
      configurable: true
    });
    render(<Contact />);
    const { submit } = fill(0);
    await waitFor(() => expect(submit).not.toBeDisabled());
    fireEvent.click(submit);
    await waitFor(() => expect(assigned).toMatch(/^mailto:/i));
    expect(screen.getByRole('status')).toHaveTextContent(/Opened mail client/i);
    // restore
    delete (window as any).location;
    Object.defineProperty(window, 'location', { value: originalLocation });
    global.fetch = originalFetch;
  });

  it('dismisses success toast', async () => {
    const originalFetch = global.fetch;
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => ({ ok: true }) } as any);
    render(<Contact />);
    const { submit } = fill(0);
    await waitFor(() => expect(submit).not.toBeDisabled());
    fireEvent.click(submit);
    const toast = await screen.findByRole('status');
    expect(toast).toHaveTextContent(/Message sent successfully|Opened mail client/i);
    const dismiss = screen.getByRole('button', { name: /Dismiss notification/i });
    fireEvent.click(dismiss);
    await waitFor(() => expect(screen.queryByRole('status')).toBeNull());
    global.fetch = originalFetch;
  });

  it('handles clipboard write error silently and copies from second (xl) section too', async () => {
    const writeText = jest.fn().mockImplementationOnce(() => { throw new Error('denied'); }).mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    render(<Contact />);
    // Click first email copy (throws) then second email copy (succeeds)
    const emailButtons = screen.getAllByRole('button', { name: /Copy email/i });
    fireEvent.click(emailButtons[0]);
    fireEvent.click(emailButtons[1]);
    // Also phone buttons both layouts
    const phoneButtons = screen.getAllByRole('button', { name: /Copy phone number/i });
    phoneButtons.forEach(btn => fireEvent.click(btn));
    // We expect writeText called at least 1 + number of buttons - first throws still counts
    expect(writeText.mock.calls.length).toBeGreaterThanOrEqual(1 + phoneButtons.length);
  });

  it('shows validation error toast when submitting invalid form (bypassing disabled button)', async () => {
    render(<Contact />);
    // Get first form element and submit without filling fields
    const form = screen.getAllByRole('button', { name: /Send Message/i })[0].closest('form') as HTMLFormElement;
    fireEvent.submit(form);
    // The error toast should appear
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent(/correct the highlighted fields/i));
  });
});

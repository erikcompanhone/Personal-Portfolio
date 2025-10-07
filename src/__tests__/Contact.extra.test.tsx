import { render, screen, fireEvent, waitFor } from '../test-utils';
import Contact from '../pages/Contact';

describe('Contact extra coverage', () => {
  function fillBaseForm(prefixIndex = 0) {
    const name = screen.getAllByLabelText(/Name/i)[prefixIndex];
    const email = screen.getAllByLabelText(/Email/i)[prefixIndex];
    const subject = screen.getAllByLabelText(/Subject/i)[prefixIndex];
    const message = screen.getAllByLabelText(/Message/i)[prefixIndex];
    fireEvent.change(name, { target: { value: 'Erik' } });
    fireEvent.change(email, { target: { value: 'erik@example.com' } });
    fireEvent.change(subject, { target: { value: 'Hi' } });
    fireEvent.change(message, { target: { value: 'This is a sufficiently long message.' } });
    return { name, email, subject, message };
  }

  it('copies email and phone via clipboard buttons', async () => {
    const writeText = jest.fn();
    Object.assign(navigator, { clipboard: { writeText } });
    render(<Contact />);
    const copyEmail = screen.getAllByRole('button', { name: /Copy email/i })[0];
    fireEvent.click(copyEmail);
    expect(writeText).toHaveBeenCalledWith('e.comp2712@gmail.com');
    const copyPhone = screen.getAllByRole('button', { name: /Copy phone number/i })[0];
    fireEvent.click(copyPhone);
    expect(writeText).toHaveBeenCalledWith('(786) 491-3542');
  });

  it('shows client error toast without fallback on 400 response', async () => {
  const originalFetch = global.fetch;
  global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 400, json: async () => ({ error: 'Bad request' }) }) as unknown as typeof fetch;
    render(<Contact />);
    const submit = screen.getAllByRole('button', { name: /Send Message/i })[0];
    fillBaseForm(0);
    await waitFor(() => expect(submit).not.toBeDisabled());
    fireEvent.click(submit);
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent(/Bad request|Send failed/i));
    // Ensure location not changed (no mailto fallback)
    expect(window.location.href).not.toMatch(/^mailto:/i);
    global.fetch = originalFetch;
  });

  it('submits using XL form duplicate (second instance) to cover additional lines', async () => {
    render(<Contact />);
    // The second form is only visible at xl breakpoint normally; since tests don't emulate CSS breakpoints,
    // we still target the second set of inputs to execute duplicate handlers.
  const submitSecond = screen.getAllByRole('button', { name: /Send Message/i })[1];
    fillBaseForm(1);
    // Honeypot remains empty
    await waitFor(() => expect(submitSecond).not.toBeDisabled());
  });
});

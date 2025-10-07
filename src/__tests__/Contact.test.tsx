import { render, screen, fireEvent, waitFor } from '../test-utils';
import Contact from '../pages/Contact';

describe('Contact form', () => {
  it('validates required fields and enables submit', async () => {
  render(<Contact />);
    const name = screen.getAllByLabelText(/Name/i)[0];
    const email = screen.getAllByLabelText(/Email/i)[0];
    const subject = screen.getAllByLabelText(/Subject/i)[0];
    const message = screen.getAllByLabelText(/Message/i)[0];
    const submit = screen.getAllByRole('button', { name: /Send Message/i })[0];

    expect(submit).toBeDisabled();

    fireEvent.change(name, { target: { value: 'Erik' } });
    fireEvent.blur(name);
    fireEvent.change(email, { target: { value: 'erik@example.com' } });
    fireEvent.blur(email);
    fireEvent.change(subject, { target: { value: 'Hi' } });
    fireEvent.blur(subject);
    fireEvent.change(message, { target: { value: 'This is a sufficiently long message.' } });
    fireEvent.blur(message);

    await waitFor(() => expect(submit).not.toBeDisabled());
  });

  it('submits successfully and clears form', async () => {
    const originalFetch = global.fetch;
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => ({ ok: true }) } as any);
  render(<Contact />);
    const name = screen.getAllByLabelText(/Name/i)[0];
    const email = screen.getAllByLabelText(/Email/i)[0];
    const subject = screen.getAllByLabelText(/Subject/i)[0];
    const message = screen.getAllByLabelText(/Message/i)[0];
    const submit = screen.getAllByRole('button', { name: /Send Message/i })[0];

    fireEvent.change(name, { target: { value: 'Erik' } });
    fireEvent.change(email, { target: { value: 'erik@example.com' } });
    fireEvent.change(subject, { target: { value: 'Hi' } });
    fireEvent.change(message, { target: { value: 'This is a sufficiently long message.' } });

    await waitFor(() => expect(submit).not.toBeDisabled());
  fireEvent.click(submit);
  await waitFor(() => expect(global.fetch).toHaveBeenCalled());
  await waitFor(() => expect((name as HTMLInputElement).value).toBe(''));
  expect((email as HTMLInputElement).value).toBe('');
  expect((subject as HTMLInputElement).value).toBe('');
  expect((message as HTMLTextAreaElement).value).toBe('');
    global.fetch = originalFetch;
  });

  it('falls back to mailto on server error', async () => {
  const originalLocation = window.location;
  const mockLoc = { href: '' } as Location & { href: string };
  Object.defineProperty(window, 'location', { value: mockLoc, writable: true });
    const originalFetch = global.fetch;
    global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 500, json: async () => ({ error: 'Server error' }) } as any);
  render(<Contact />);
    const name = screen.getAllByLabelText(/Name/i)[0];
    const email = screen.getAllByLabelText(/Email/i)[0];
    const subject = screen.getAllByLabelText(/Subject/i)[0];
    const message = screen.getAllByLabelText(/Message/i)[0];
    const submit = screen.getAllByRole('button', { name: /Send Message/i })[0];
    fireEvent.change(name, { target: { value: 'Erik' } });
    fireEvent.change(email, { target: { value: 'erik@example.com' } });
    fireEvent.change(subject, { target: { value: 'Hi' } });
    fireEvent.change(message, { target: { value: 'This is a sufficiently long message.' } });
    await waitFor(() => expect(submit).not.toBeDisabled());
    fireEvent.click(submit);
    await waitFor(() => expect((window.location as any).href).toMatch(/^mailto:/));
    global.fetch = originalFetch;
  Object.defineProperty(window, 'location', { value: originalLocation });
  });

  it('ignores submission when honeypot filled (submit stays disabled)', async () => {
    const originalFetch = global.fetch;
    global.fetch = jest.fn();
  render(<Contact />);
    const name = screen.getAllByLabelText(/Name/i)[0];
    const email = screen.getAllByLabelText(/Email/i)[0];
    const subject = screen.getAllByLabelText(/Subject/i)[0];
    const message = screen.getAllByLabelText(/Message/i)[0];
  const hiddenInputs = screen.getAllByLabelText(/Company/i) as HTMLInputElement[];
  const hiddenCompany = hiddenInputs[0];
    const submit = screen.getAllByRole('button', { name: /Send Message/i })[0];
    fireEvent.change(name, { target: { value: 'Erik' } });
    fireEvent.change(email, { target: { value: 'erik@example.com' } });
    fireEvent.change(subject, { target: { value: 'Hi' } });
    fireEvent.change(message, { target: { value: 'This is a sufficiently long message.' } });
    fireEvent.change(hiddenCompany, { target: { value: 'BotCorp' } });
    // With honeypot filled, formValid stays false -> button remains disabled
    expect(submit).toBeDisabled();
    // Because honeypot triggers early return, fetch shouldn't be called
    // Give a short wait to ensure no async fetch
    await new Promise(r => setTimeout(r, 50));
    expect(global.fetch).not.toHaveBeenCalled();
    global.fetch = originalFetch;
  });

  it('shows error when email invalid', async () => {
  render(<Contact />);
    const name = screen.getAllByLabelText(/Name/i)[0];
    const email = screen.getAllByLabelText(/Email/i)[0];
    const subject = screen.getAllByLabelText(/Subject/i)[0];
    const message = screen.getAllByLabelText(/Message/i)[0];
    const submit = screen.getAllByRole('button', { name: /Send Message/i })[0];
    fireEvent.change(name, { target: { value: 'Erik' } });
    fireEvent.change(email, { target: { value: 'invalid-email' } });
    fireEvent.change(subject, { target: { value: 'Hi' } });
    fireEvent.change(message, { target: { value: 'This is a sufficiently long message.' } });
    expect(submit).toBeDisabled();
  });

  it('keeps submit disabled when message too short', async () => {
  render(<Contact />);
    const name = screen.getAllByLabelText(/Name/i)[0];
    const email = screen.getAllByLabelText(/Email/i)[0];
    const subject = screen.getAllByLabelText(/Subject/i)[0];
    const message = screen.getAllByLabelText(/Message/i)[0];
    const submit = screen.getAllByRole('button', { name: /Send Message/i })[0];
    fireEvent.change(name, { target: { value: 'Erik' } });
    fireEvent.change(email, { target: { value: 'erik@example.com' } });
    fireEvent.change(subject, { target: { value: 'Hi' } });
    fireEvent.change(message, { target: { value: 'Too short' } });
    expect(submit).toBeDisabled();
  });
});

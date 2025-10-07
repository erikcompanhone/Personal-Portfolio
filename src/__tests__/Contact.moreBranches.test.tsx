import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../pages/Contact';
import { MemoryRouter } from 'react-router-dom';

describe('Contact additional branch coverage', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('falls back via server 500 response (distinct from network reject)', async () => {
    const originalLocation = window.location;
    // @ts-ignore
    delete window.location; // allow reassignment
    // @ts-ignore
    window.location = { href: '' };
    (globalThis as any).fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
      json: () => Promise.resolve({ error: 'Server exploded' })
    });

    render(<MemoryRouter><Contact /></MemoryRouter>);
    fireEvent.change(screen.getAllByLabelText(/Name$/i)[0], { target: { value: 'Erik' } });
    fireEvent.change(screen.getAllByLabelText(/^Email$/i)[0], { target: { value: 'erik@example.com' } });
    fireEvent.change(screen.getAllByLabelText(/Subject$/i)[0], { target: { value: 'Hello' } });
    fireEvent.change(screen.getAllByLabelText(/Message$/i)[0], { target: { value: 'Long enough message content here.' } });
    fireEvent.click(screen.getAllByRole('button', { name: /Send Message/i })[0]);
    await waitFor(() => expect((window.location as any).href).toMatch(/^mailto:/));
    expect(screen.getByRole('status')).toHaveTextContent(/Opened mail client as fallback/i);
  // Restore original location
  // @ts-ignore
  window.location = originalLocation;
  });

  it('shows validation error for name-xl field when blurred empty', () => {
    render(<MemoryRouter><Contact /></MemoryRouter>);
    const nameXl = screen.getAllByLabelText(/Name$/i)[1];
    fireEvent.blur(nameXl); // touched but still empty
    expect(screen.getAllByText(/Name must be at least 2 characters/i).length).toBeGreaterThan(0);
  });

  it('submits successfully using XL form duplicate', async () => {
    (globalThis as any).fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ success: true })
    });
    render(<MemoryRouter><Contact /></MemoryRouter>);
    // Use second set of inputs (index 1)
    fireEvent.change(screen.getAllByLabelText(/Name$/i)[1], { target: { value: 'Erik' } });
    fireEvent.change(screen.getAllByLabelText(/^Email$/i)[1], { target: { value: 'erik@example.com' } });
    fireEvent.change(screen.getAllByLabelText(/Subject$/i)[1], { target: { value: 'Greetings' } });
    fireEvent.change(screen.getAllByLabelText(/Message$/i)[1], { target: { value: 'This is a valid length message for testing.' } });
    fireEvent.click(screen.getAllByRole('button', { name: /Send Message/i })[1]);
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent(/Message sent successfully/i));
  });
});

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../pages/Contact';
import { MemoryRouter } from 'react-router-dom';

describe('Contact honeypot early return', () => {
  it('does not attempt fetch when honeypot filled', async () => {
    // Ensure a fetch function exists we can spy on (jsdom env may not define it)
    const originalFetch = (globalThis as any).fetch;
    const mockFetch = jest.fn();
    (globalThis as any).fetch = mockFetch;
    render(<MemoryRouter><Contact /></MemoryRouter>);
  // Fill required visible user fields (pick first occurrence since mobile + xl forms both rendered in DOM)
  fireEvent.change(screen.getAllByLabelText(/Name$/i)[0], { target: { value: 'Erik' } });
  fireEvent.change(screen.getAllByLabelText(/^Email$/i)[0], { target: { value: 'erik@example.com' } });
  fireEvent.change(screen.getAllByLabelText(/Subject$/i)[0], { target: { value: 'Hi' } });
  fireEvent.change(screen.getAllByLabelText(/Message$/i)[0], { target: { value: 'This is a sufficiently long message.' } });
    // Honeypot (hidden) field: first Company label (mobile/xl duplication present)
    const honey = screen.getAllByLabelText(/Company/i)[0];
    fireEvent.change(honey, { target: { value: 'bot-data' } });
    const btn = screen.getAllByRole('button', { name: /Send Message/i })[0];
    fireEvent.click(btn);
    await waitFor(() => expect(mockFetch).not.toHaveBeenCalled());
    (globalThis as any).fetch = originalFetch; // restore
  });
});

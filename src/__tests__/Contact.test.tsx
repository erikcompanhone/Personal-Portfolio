import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../pages/Contact';

describe('Contact form', () => {
  it('validates required fields and enables submit', async () => {
    render(<MemoryRouter><Contact /></MemoryRouter>);
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
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('renders nav links', () => {
    render(<MemoryRouter><Navbar isMobile={false} closeMenu={() => {}} /></MemoryRouter>);
    expect(screen.getByRole('link', { name: /About Me/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument();
  });

  it('collapses labels when collapsed prop true', () => {
    render(<MemoryRouter><Navbar isMobile={false} collapsed closeMenu={() => {}} /></MemoryRouter>);
    // Labels hidden => accessible names still on title attribute; test brand reduced to single initial
    expect(screen.getByLabelText(/Erik Companhone on GitHub/i)).toBeInTheDocument();
  });
});

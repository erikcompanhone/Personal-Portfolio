import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home page', () => {
  it('renders hero heading and buttons', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /Hi, I'm/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Contact Me/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /View Projects/i })[0]).toBeInTheDocument();
  });
});

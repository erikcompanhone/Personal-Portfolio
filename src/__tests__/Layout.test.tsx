import { render, screen, fireEvent } from '@testing-library/react';
import Layout from '../components/Layout';
import { MemoryRouter } from 'react-router-dom';

describe('Layout', () => {
  function setup() {
    return render(
      <MemoryRouter>
        <Layout>
          <div data-testid="content">Hello</div>
        </Layout>
      </MemoryRouter>
    );
  }

  it('renders children', () => {
    setup();
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });

  it('toggles mobile menu open/close', () => {
    setup();
    const button = screen.getByRole('button', { name: '' }); // hamburger has no accessible name
    fireEvent.click(button); // open
    // menu div should now be translated in (absence of -translate class)
    const menu = document.querySelector('.fixed.inset-0.bg-background.z-40');
    expect(menu?.className).toMatch(/translate-x-0/);
    fireEvent.click(button); // close
    expect(menu?.className).toMatch(/-translate-x-full/);
  });

  it('toggles sidebar collapsed state', () => {
    setup();
    // Collapse button has aria-label that changes
    const collapseBtn = screen.getByRole('button', { name: /Collapse sidebar/i });
    fireEvent.click(collapseBtn);
    // After collapse, aria-label should change to Expand sidebar
    expect(screen.getByRole('button', { name: /Expand sidebar/i })).toBeInTheDocument();
  });
});

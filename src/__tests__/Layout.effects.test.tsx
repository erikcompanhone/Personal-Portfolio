import { render, screen, fireEvent } from '../test-utils';
import Layout from '../components/Layout';

describe('Layout side effects', () => {
  it('locks body scroll when mobile menu toggled', () => {
    render(<Layout><div>Child</div></Layout>);
    // Mobile menu button is the fixed top-right button; query all buttons and click the one whose class includes 'fixed'
    const buttons = screen.getAllByRole('button');
    const mobileBtn = buttons.find(b => b.className.includes('fixed')) as HTMLButtonElement;
    expect(document.body.classList.contains('overflow-hidden')).toBe(false);
    fireEvent.click(mobileBtn);
    expect(document.body.classList.contains('overflow-hidden')).toBe(true);
    fireEvent.click(mobileBtn);
    expect(document.body.classList.contains('overflow-hidden')).toBe(false);
  });

  it('cleans up body class on unmount when menu open', () => {
    const { unmount } = render(<Layout><div>Unmount Test</div></Layout>);
    const buttons = screen.getAllByRole('button');
    const mobileBtn = buttons.find(b => b.className.includes('fixed')) as HTMLButtonElement;
    fireEvent.click(mobileBtn); // open menu -> adds overflow-hidden
    expect(document.body.classList.contains('overflow-hidden')).toBe(true);
    unmount();
    expect(document.body.classList.contains('overflow-hidden')).toBe(false);
  });
  it('renders content (sidebar collapse visually not testable without media queries)', () => {
    render(<Layout><div>Content</div></Layout>);
    expect(screen.getByText(/Content/)).toBeInTheDocument();
  });
});

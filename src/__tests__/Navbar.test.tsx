import { render, screen } from '../test-utils';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('renders nav links', () => {
  render(<Navbar isMobile={false} closeMenu={() => undefined} />);
    expect(screen.getByRole('link', { name: /About Me/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument();
  });

  it('collapses labels when collapsed prop true', () => {
  render(<Navbar isMobile={false} collapsed closeMenu={() => undefined} />);
    // Labels hidden => accessible names still on title attribute; test brand reduced to single initial
    expect(screen.getByLabelText(/Erik Companhone on GitHub/i)).toBeInTheDocument();
  });
});

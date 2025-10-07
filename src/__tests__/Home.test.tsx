import { render, screen } from '../test-utils';
import Home from '../pages/Home';

describe('Home page', () => {
  it('renders hero heading and buttons', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1, name: /Hi, I'm/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Contact Me/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /View Projects/i })[0]).toBeInTheDocument();
  });
});

import { render, screen } from '../test-utils';
import App from '../App';

describe('App routing', () => {
  it('renders home heading', () => {
  render(<App />);
    expect(screen.getByRole('heading', { name: /About Me|Home/i })).toBeInTheDocument();
  });
});

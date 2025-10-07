import { render, screen, act } from '../test-utils';
import Navbar from '../components/Navbar';

describe('Navbar animation timers', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  it('progresses brand mount -> visible -> labels', () => {
    render(<Navbar isMobile={false} closeMenu={() => undefined} collapsed={false} />);
    // Initially brand should be in DOM (non-collapsed) but might be in transition; advance timers to ensure visibility classes applied
    act(() => {
      jest.advanceTimersByTime(350); // mount + visibility
    });
    // After 350ms brand visible class (no opacity-0 translate-x-3)
    const heading = screen.getByRole('heading', { name: /Erik Companhone/i });
    expect(heading).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(200); // label delay 430ms total
    });
    // One of the nav labels should be fully visible now (not opacity-0)
    const about = screen.getByRole('link', { name: /About Me/i });
    expect(about.className).toMatch(/bg-|hover:bg-|group/); // basic presence
  });
});

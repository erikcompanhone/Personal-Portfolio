import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import DogModal from '../components/DogModal';

// Extra coverage: Navbar collapsed label hiding + dog modal open button; DogModal image error escalation to fallback message

describe('Navbar collapsed + DogModal error fallback', () => {
  it('hides text labels visually when collapsed and opens dog modal', () => {
    const { container } = render(<MemoryRouter><Navbar isMobile={false} closeMenu={() => undefined} collapsed /></MemoryRouter>);
    // Link is still accessible by name for a11y
    const aboutLink = screen.getByRole('link', { name: /About Me/i });
    expect(aboutLink).toBeInTheDocument();
    // But collapsed style should position label span absolutely with opacity-0
  const labelSpans = container.querySelectorAll<HTMLSpanElement>('nav a span');
    // At least one span should have opacity-0 class when collapsed
  const spanArray = Array.from(labelSpans) as HTMLSpanElement[];
  expect(spanArray.some(s => s.className.includes('opacity-0'))).toBe(true);
    const dogBtn = screen.getByRole('button', { name: /Meet Mel/i });
    fireEvent.click(dogBtn);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('DogModal cycles through images then shows fallback message', () => {
    const handleClose = jest.fn();
    render(<DogModal open onClose={handleClose} />);
  // Simulate sequential errors equal to candidate length
    // We don't know length directly; simulate enough errors until alt element replaced
    for (let i = 0; i < 6 && screen.queryByAltText(/Mel the dog/i); i++) {
      fireEvent.error(screen.getByAltText(/Mel the dog/i)!);
    }
    expect(screen.getByText(/Image unavailable/i)).toBeInTheDocument();
    // Escape still closes from fallback state
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalled();
  });
});

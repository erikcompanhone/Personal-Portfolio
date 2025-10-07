import { render, screen, fireEvent } from '../test-utils';
import DogModal from '../components/DogModal';

describe('DogModal success image load', () => {
  it('renders first candidate image without triggering error cascade', () => {
    render(<DogModal open onClose={() => undefined} />);
    const img = screen.getByAltText(/Mel the dog/i) as HTMLImageElement;
    // Simulate successful load (no onError firing)
    fireEvent.load(img);
    expect(img.getAttribute('src')).toMatch(/mel\.jpeg$/);
  });
});

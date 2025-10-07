import { render, screen, fireEvent } from '../test-utils';
import DogModal from '../components/DogModal';

describe('DogModal Escape key close', () => {
  it('closes on Escape', () => {
    const handleClose = jest.fn();
    render(<DogModal open onClose={handleClose} />);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalled();
  });
});

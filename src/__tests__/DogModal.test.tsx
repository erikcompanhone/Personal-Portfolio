import { render, screen, fireEvent } from '@testing-library/react';
import DogModal from '../components/DogModal';

describe('DogModal', () => {
  it('does not render when closed', () => {
  const { queryByRole } = render(<DogModal open={false} onClose={() => undefined} />);
    expect(queryByRole('dialog')).toBeNull();
  });

  it('renders and closes on Escape', () => {
    const handleClose = jest.fn();
    render(<DogModal open={true} onClose={handleClose} />);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalled();
  });
});

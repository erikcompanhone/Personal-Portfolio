import { render } from '@testing-library/react';
import AppRouter from '../AppRouter';

describe('AppRouter', () => {
  it('mounts App at root path', () => {
    render(<AppRouter />);
  });
});

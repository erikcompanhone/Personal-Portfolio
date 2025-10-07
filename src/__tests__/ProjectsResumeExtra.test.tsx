import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';

// Mock react-to-print hook to avoid errors in jsdom and capture handler invocation
jest.mock('react-to-print', () => ({
  useReactToPrint: () => jest.fn()
}));

describe('Projects page extra interactions', () => {
  it('toggles all projects list', () => {
    render(<MemoryRouter><Projects /></MemoryRouter>);
    const toggle = screen.getByRole('button', { name: /View All Projects/i });
    fireEvent.click(toggle);
    expect(toggle).toHaveTextContent(/Hide All Projects/i);
    fireEvent.click(toggle);
    expect(toggle).toHaveTextContent(/View All Projects/i);
  });
});

describe('Resume page print button', () => {
  it('renders and is clickable', () => {
    render(<MemoryRouter><Resume /></MemoryRouter>);
    const btn = screen.getByRole('button', { name: /Print or save resume/i });
    fireEvent.click(btn); // handler is mocked, just ensure no crash
    expect(btn).toBeInTheDocument();
  });
});

import { render as rtlRender } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

interface RenderOptions {
  route?: string;
  children?: ReactNode;
}

export function render(ui: ReactElement, { route = '/' }: RenderOptions = {}) {
  return rtlRender(
    <MemoryRouter initialEntries={[route]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {ui}
    </MemoryRouter>
  );
}

// Re-export everything from RTL
export * from '@testing-library/react';

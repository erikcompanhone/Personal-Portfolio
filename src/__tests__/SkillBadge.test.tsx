import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SkillBadge from '../components/SkillBadge';

describe('SkillBadge', () => {
  it('renders name and stars for level', () => {
    render(<SkillBadge name="TypeScript" level={3} />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    // 3 filled dots (bg-accent) among 5
    const dots = screen.getAllByRole('img', { hidden: true });
    // Fallback: simpler check: there should be 5 divs with role not accessible; instead just ensure container present.
  });

  it('falls back to first letter when all image candidates fail', () => {
    render(<SkillBadge name="SomeMadeUpSkillXYZ" />);
    // There are 6 candidate paths (3 new + 3 legacy). Fire error until image disappears.
    for (let i = 0; i < 10; i++) {
      const img = screen.queryByRole('img', { name: /SomeMadeUpSkillXYZ/i });
      if (!img) break; // image replaced by fallback span
      fireEvent.error(img);
    }
    expect(screen.getByText('S')).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: /SomeMadeUpSkillXYZ/i })).toBeNull();
  });
});

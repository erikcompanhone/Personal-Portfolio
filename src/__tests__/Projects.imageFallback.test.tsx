import { render, screen, fireEvent } from '@testing-library/react';
import Projects from '../pages/Projects';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../data/projectsData', () => ({
  __esModule: true,
  featured: [
    { title: 'Mock Featured', short: 'Feat short', tech: ['A'], repo: 'https://r1', live: undefined, image: undefined, category: 'featured', slug: 'mock-featured' }
  ],
  nonFeatured: [
    { title: 'Mock Other', short: 'Other short', tech: ['B'], repo: 'https://r2', live: undefined, image: undefined, category: 'web', slug: 'mock-other' }
  ]
}));

describe('Projects image placeholder branch', () => {
  it('uses placeholder image when project has no image field', () => {
    render(<MemoryRouter><Projects /></MemoryRouter>);
    // Expand all projects so second mapped list visible
    fireEvent.click(screen.getByRole('button', { name: /View All Projects/i }));
    const featuredImg = screen.getByAltText('Mock Featured') as HTMLImageElement;
    const otherImg = screen.getByAltText('Mock Other') as HTMLImageElement;
    expect(featuredImg.src).toMatch(/\/assets\/projects\/placeholder\.png$/);
    expect(otherImg.src).toMatch(/\/assets\/projects\/placeholder\.png$/);
  });
});

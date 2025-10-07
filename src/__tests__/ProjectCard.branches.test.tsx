import { render, screen } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';

describe('ProjectCard branch coverage', () => {
  it('renders featured image scaling and live + code buttons', () => {
    render(<ProjectCard title="Feat" description="Desc" image="img.jpg" tags={['A']} liveUrl="https://live.example" githubUrl="https://gh" featured />);
    const live = screen.getByRole('link', { name: /Feat live site/i });
    expect(live).toHaveAttribute('href', 'https://live.example');
    const code = screen.getByRole('link', { name: /Code/i });
    expect(code).toHaveAttribute('href', 'https://gh');
  });

  it('renders placeholder live link when no liveUrl provided', () => {
    render(<ProjectCard title="NoLive" description="Desc" image="i.jpg" tags={[]} githubUrl="https://gh" />);
    const live = screen.getByRole('link', { name: /NoLive live site placeholder/i });
    expect(live).toHaveAttribute('href', 'https://example.com');
  });

  it('hides live button and shows spacer when hideLive and no githubUrl', () => {
    render(<ProjectCard title="Hidden" description="Desc" image="i.jpg" tags={['x']} hideLive />);
    // No live link
    expect(screen.queryByRole('link', { name: /Hidden live site/i })).toBeNull();
    // Spacer present (opacity-0 span acts as layout placeholder)
    const spacer = screen.getByText('spacer');
    expect(spacer).toBeInTheDocument();
  });

  it('hides live button but no spacer when githubUrl present', () => {
    render(<ProjectCard title="HideButCode" description="Desc" image="i.jpg" tags={['x']} hideLive githubUrl="https://gh" />);
    expect(screen.queryByText('spacer')).toBeNull();
    const code = screen.getByRole('link', { name: /Code/i });
    expect(code).toHaveAttribute('href', 'https://gh');
  });
});

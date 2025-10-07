import { render, screen } from '@testing-library/react';
import TimelineCard from '../components/TimelineCard';

describe('TimelineCard branch paths', () => {
  it('renders with logo triggering mdchonors scale branch', () => {
    render(<TimelineCard title="Title" organization="Org" period="2020" description={["Did a thing"]} logo="/assets/mdchonors-logo.png" subtitle="Voluntary" />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    // Subtitle present
    expect(screen.getByText('Voluntary')).toBeInTheDocument();
  });

  it('renders without logo or subtitle', () => {
    render(<TimelineCard title="NoLogo" organization="Org2" period="2021" description={["Another thing"]} />);
    expect(screen.getByText('NoLogo')).toBeInTheDocument();
  });
});

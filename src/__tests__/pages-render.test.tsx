import { render, screen } from '../test-utils';
import { Route, Routes } from 'react-router-dom';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Experience from '../pages/Experience';
import Education from '../pages/Education';
import Personal from '../pages/Personal';
import Resume from '../pages/Resume';

const renderPath = (path: string, element: React.ReactElement) => {
  return render(<Routes><Route path={path} element={element} /></Routes>, { route: path });
};

describe('Page renders', () => {
  it('Projects page', () => {
    renderPath('/projects', <Projects />);
    expect(screen.getByRole('heading', { level: 1, name: /Projects/i })).toBeInTheDocument();
  });
  it('Skills page', () => {
    renderPath('/skills', <Skills />);
    expect(screen.getByRole('heading', { level: 1, name: /Skills/i })).toBeInTheDocument();
  });
  it('Experience page', () => {
    renderPath('/experience', <Experience />);
    expect(screen.getByRole('heading', { level: 1, name: /Experience/i })).toBeInTheDocument();
  });
  it('Education page', () => {
    renderPath('/education', <Education />);
    expect(screen.getByRole('heading', { level: 1, name: /Education/i })).toBeInTheDocument();
  });
  it('Personal page', () => {
    renderPath('/personal', <Personal />);
    expect(screen.getByRole('heading', { level: 1, name: /Personal/i })).toBeInTheDocument();
  });
  it('Resume page', () => {
    renderPath('/resume', <Resume />);
    expect(screen.getByRole('heading', { level: 1, name: /Resume/i })).toBeInTheDocument();
  });
});

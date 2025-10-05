import { featured, nonFeatured } from '../data/projectsData';

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-[11px] px-2 py-1 rounded bg-accent/10 text-accent font-medium tracking-wide">
    {children}
  </span>
);

const Projects: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-text">Projects</h1>
        <p className="text-muted text-sm max-w-2xl">
          Highlighted work (Top 3) followed by additional and legacy projects. Images will load once added under
          <code className="px-1">/assets/projects/&lt;slug&gt;</code>.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-5 flex items-center gap-3">Featured <span className="text-sm font-normal text-accent/80">(Top 3)</span></h2>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map(p => (
            <article key={p.slug} className="group relative rounded-lg bg-surface-alt p-5 flex flex-col gap-3 ring-1 ring-accent/15 hover:ring-accent/40 transition shadow-sm hover:shadow-md">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-lg leading-snug text-text">{p.title}</h3>
                {p.featuredRank && (
                  <span className="text-xs px-2 py-1 rounded-md bg-accent/15 text-accent font-semibold">#{p.featuredRank}</span>
                )}
              </div>
              <p className="text-sm text-muted line-clamp-4">{p.short}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-1">
                {p.tech.slice(0, 6).map(t => <Badge key={t}>{t}</Badge>)}
              </div>
              <div className="flex gap-4 pt-2 text-sm">
                {p.live && <a className="text-accent hover:underline" target="_blank" rel="noopener noreferrer" href={p.live}>Live</a>}
                {p.repo && <a className="text-accent hover:underline" target="_blank" rel="noopener noreferrer" href={p.repo}>Code</a>}
              </div>
              {p.status === 'upcoming' && (
                <span className="absolute top-2 right-2 text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded">UPCOMING</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Upcoming Highlight</h2>
        <div className="rounded-lg p-5 bg-surface-alt ring-1 ring-accent/15">
          <p className="font-medium text-text">Kitchen Chaos (Unity WebGL)</p>
          <p className="text-sm text-muted mt-1">Planned WebGL build – will be added as 4th highlight once optimized.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-5">All Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nonFeatured.map(p => (
            <article key={p.slug} className="rounded-lg bg-surface-alt p-5 flex flex-col gap-3 ring-1 ring-white/5 hover:ring-accent/40 transition">
              <h3 className="font-semibold text-base text-text">{p.title}</h3>
              <p className="text-sm text-muted line-clamp-4">{p.short}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-1">
                {p.tech.slice(0, 5).map(t => <Badge key={t}>{t}</Badge>)}
              </div>
              <div className="flex gap-3 pt-2 text-xs">
                {p.repo && <a className="text-accent hover:underline" target="_blank" rel="noopener noreferrer" href={p.repo}>Code</a>}
                {p.live && <a className="text-accent hover:underline" target="_blank" rel="noopener noreferrer" href={p.live}>Live</a>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

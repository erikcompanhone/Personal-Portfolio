import { projects, featured, nonFeatured, byCategory, getProject } from '../data/projectsData';

describe('projectsData tail exports', () => {
  it('accesses collections and helper functions', () => {
    expect(projects.length).toBeGreaterThan(0);
    // Access last elements to cover tail lines
    const last = projects[projects.length - 1];
    expect(last).toHaveProperty('slug');
    // featured/nonFeatured partition is consistent
    const intersection = featured.filter(f => nonFeatured.some(n => n.slug === f.slug));
    expect(intersection.length).toBe(0);
    // byCategory returns subset
    if (projects[0]) {
      const cat = projects[0].category;
      const subset = byCategory(cat);
      expect(subset.every(p => p.category === cat)).toBe(true);
    }
    // getProject returns a project when valid slug supplied
    const found = getProject(projects[0].slug);
    expect(found).toBeTruthy();
  });

  it('returns empty array for unknown category', () => {
    const res = byCategory('__does_not_exist__' as any);
    expect(res).toEqual([]);
  });

  it('getProject returns undefined for missing slug', () => {
    const missing = getProject('__missing_slug__');
    expect(missing).toBeUndefined();
  });
});

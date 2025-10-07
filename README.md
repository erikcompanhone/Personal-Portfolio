
# Personal Portfolio

A fast, accessible, and test-instrumented personal developer portfolio built with React 18, Vite, TypeScript, Tailwind CSS, and deployed on Vercel.

## Tech Stack

- React 18 + TypeScript (SPA via react-router-dom)
- Vite build tooling
- Tailwind CSS styling + print-optimized resume view
- Jest + React Testing Library for unit/component tests
- Serverless API (Vercel) using Resend for email delivery
- GitHub Actions CI (lint, type check, tests with coverage, build)

## Available Scripts

- `npm run dev` – Start local dev server
- `npm run build` – Production build (Vite)
- `npm run preview` – Preview built output
- `npm run lint` – ESLint check
- `npm test` – Run Jest test suite
- `npm run test:coverage` – Run tests with coverage

## Testing & Coverage

Jest configuration collects coverage for all `src/**/*.{ts,tsx}` (excluding type declarations and entry points). Interim global threshold is:
- Statements: 60%
- Branches: 55%
- Functions: 55%
- Lines: 60%

Goal: elevate to 90%+ after stabilizing suite. Raise by editing `coverageThreshold` in `jest.config.cjs` in controlled increments (e.g., +10%).

### Writing Tests
- Use Testing Library queries (`getByRole`, `getByText`, `findBy...`) – prefer accessible roles.
- Mock network / serverless boundaries (e.g., Resend) to keep tests deterministic.
- Avoid asserting on implementation details (class names, internal state) unless essential.

### API Tests
`api/send-email` is tested with a lightweight request/response harness and a mocked `resend` module to prevent real network calls.

## Project Structure (Key)
```
src/
  components/        Reusable UI units (Navbar, SkillBadge, DogModal, etc.)
  pages/             Routed pages (Home, Projects, Resume, Contact, ...)
  data/              Project metadata
  __tests__/         Jest test files mirroring pages/components
api/                 Vercel serverless functions (send-email)
public/              Static assets (images, icons)
```

## Resume Printing
The `Resume` page uses `react-to-print` for a clean, one-page print (white background, condensed sections, visible URLs).

## CI / CD
GitHub Actions workflow (`.github/workflows/ci.yml`) triggers on pushes & pull requests to `main` only:
1. Checkout & Node setup (Node 20)
2. Install with `npm ci`
3. Lint & Type Check
4. Run tests with coverage (artifact uploaded)
5. Build (verifies production build integrity)

### Deployment
Vercel production deploys occur automatically on pushes to `main` (after merge). Feature branches / PRs get preview deployments.

## Environment Variables
Set in Vercel dashboard (or `.env.local` for local dev):
- `RESEND_API_KEY` – Required for contact form email delivery.

Never commit real API keys.

## Branching & Workflow
- `main` – Protected production branch (no direct pushes).
- Feature branches – Create from latest `main` (e.g., `feat/xyz`, `fix/abc`, `chore/tooling`).
- Pull Requests – Must pass CI checks (lint, type, tests) before merge.

### Branch Protection (Step‑by‑Step)
1. GitHub Repo > Settings > Branches > Add rule.
2. Branch name pattern: `main`.
3. Check: Require a pull request before merging (set required reviewers: 1+ if collaborating).
4. Check: Require status checks to pass; then select `CI` from the list.
5. (Optional) Enable: Require linear history (prevents merge commits) OR require signed commits.
6. (Optional) Dismiss stale pull request approvals when new commits are pushed.
7. Save rule.

### Vercel Production Branch
1. Open Vercel project settings.
2. Go to Git > Production Branch and set it to `main`.
3. (Optional) Ensure "Automatically expose System Environment Variables" is enabled if needed.
4. Add Environment Variable `RESEND_API_KEY` in Production & Preview scopes.
5. Trigger a redeploy (Redeploy > Production) after changes.

## Raising Coverage to 90%
1. Add targeted tests for edge cases (error paths, rate limiting, modal interactions, print handler callbacks).
2. Increment thresholds in `jest.config.cjs` (e.g., to 70/65/65/70 then 80/75/75/80 etc.).
3. Once ≥90% stable locally, set final thresholds to 90 global and push – CI will enforce.

## Accessibility
- Semantic headings and ARIA roles in interactive components (modal `role="dialog"`).
- Keyboard handling for closing modals (Escape key).
- Focusable, labeled controls with visible states.

## Performance Notes
- Vite dev server + lazy-loaded static assets.
- Lightweight dependency footprint; no heavy state management library.
- Image fallbacks for missing assets (skills, projects, dog modal).

## Contributing
1. Fork & clone repository.
2. `npm ci` to install.
3. Create a branch (`git checkout -b feat/awesome`).
4. Write code + tests; ensure `npm test` passes.
5. Run `npm run lint` & fix warnings.
6. Open PR (include summary + screenshots if UI changes).

## Potential Next Enhancements
- Elevate coverage to 90% and raise thresholds
- Lighthouse CI integration
- Visual regression testing (Chromatic / Playwright)
- a11y automated checks (jest-axe)

## License
Released under the MIT License. See `LICENSE` file for details.

---
Feel free to customize sections (summary, projects) without impacting test stability as long as primary headings remain consistent.

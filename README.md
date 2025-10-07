
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


## License
Released under the MIT License. See `LICENSE` file for details.


# Blueberry HPC Research Portal

A full Docusaurus 3 website with a custom blueberry-themed homepage, public-facing pages, documentation sidebar, search, news, dark mode, and practical example HPC guides.

## Requirements
- Node.js 20 or later (Node 22 recommended)
- npm

## Run locally
```bash
npm install
npm run start
```
Open http://localhost:3000.

## Build for production
```bash
npm run build
npm run serve
```

## Configure deployment
1. Set `url`, `baseUrl`, `organizationName` and `projectName` in `docusaurus.config.js`.
2. Replace the example `login.example.org` hostname, paths, resource limits, contacts, policies and sample content with administrator-verified details.
3. Update branding, research content, training and support contacts.
4. Deploy the `build/` directory to your web host (or use Docusaurus GitHub Pages deployment).

### GitHub Pages project URL example
For `https://ORG.github.io/REPO/`, set `url: 'https://ORG.github.io'`, `baseUrl: '/REPO/'`, `organizationName: 'ORG'`, `projectName: 'REPO'`.

## Structure
- `src/pages/` — public-facing pages and custom homepage
- `src/css/custom.css` — blueberry design system and responsive styling
- `docs/` — Markdown technical wiki
- `sidebars.js` — documentation hierarchy
- `blog/` — news posts
- `static/img/` — logo and social preview

## Search
The navbar uses Docusaurus' built-in search item but requires a search provider. Configure Algolia DocSearch in `themeConfig.algolia` after approval, or install a compatible local-search theme and replace the search navbar item. See `SEARCH.md`.

## Publication readiness
This repository is a working website codebase, not a verified institutional HPC manual. Review technical commands and policies before publication.

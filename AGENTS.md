# AGENTS.md

IMPORTANT: Read the global [AGENTS.md from Baseline](../../baseline/AGENTS.md) first!
Print a warning if this file cannot be found.

## Project Overview

This is a Docusaurus-based knowledge base for Uplink, hosted on Cloudflare Workers. The site provides documentation for freelancers, clients, recruiters, and agencies using the Uplink platform.

## Development Commands

- `npm start` - Start development server (Docusaurus)
- `npm run build` - Build the site for production
- `npm run serve` - Serve the built site locally
- `npm run preview` - Build and preview with Wrangler dev server
- `npm run deploy` - Build and deploy to Cloudflare Workers
- `npm run clear` - Clear Docusaurus cache

## Architecture

### Core Structure
- **Docusaurus** - Static site generator with React
- **Cloudflare Workers** - Hosting platform via Wrangler
- **Internationalization** - German (default) and English locales
- **Auto-generated sidebars** - Content structure follows file hierarchy

### Content Organization
- `/docs/` - Main documentation content
  - `020-freelancers/` - Freelancer guides and resources
  - `030-clients/` - Client documentation
  - `040-recruiters/` - Recruiter resources
  - `050-agencies/` - Agency documentation
- `/i18n/` - Localized content and translations
- `/src/components/` - Custom React components
- `/static/` - Static assets and images

### Configuration Files
- `docusaurus.config.js` - Main Docusaurus configuration
- `sidebars.js` - Sidebar structure (auto-generated)
- `wrangler.jsonc` - Cloudflare Workers deployment config

### Key Features
- Cloudinary image optimization in production
- Algolia search integration
- GitHub edit links for community contributions
- Responsive design with dark mode support

## Development Notes

The site is designed for community contributions via GitHub PRs. Content is organized numerically (020-, 030-, etc.) to control ordering in auto-generated sidebars.

Images are automatically optimized via Cloudinary in production builds.

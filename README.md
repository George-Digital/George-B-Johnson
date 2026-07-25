# George B. Johnson

Static Astro production site for [georgebjohnson.com](https://georgebjohnson.com).

## Requirements

- Node.js 22.12 or newer
- npm

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

Astro writes the static site to `dist/`. Production URLs use trailing slashes. Static redirects are defined in `public/_redirects`, while the tracked Builders Lab short link is handled by the narrow Cloudflare Pages Function in `functions/go/skool/`.

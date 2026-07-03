# George B. Johnson static site

Static copy of the current WordPress/Oxygen site at https://georgebjohnson.com.

## Build

```bash
npm run build
```

The build copies `public/` to `dist/` for Cloudflare Pages or any static host.

## Notes

- The source WordPress site remains live until DNS is switched.
- Static pages preserve the current visual style and downloaded local images/assets.
- The contact form is copied from WordPress markup; confirm the desired static form/email handling before DNS cutover.

# Draupnir

Responsive static portfolio landing page for Draupnir, with Spanish (`es`) as the source language and a client-side EN/ES language switcher.

## Self-Hosted Fonts

All typography uses local `.woff2` files stored in `fonts/` with zero external requests at runtime:

- `fonts/fraunces-latin-opsz-normal.woff2` (Display serif: Fraunces Variable, Latin)
- `fonts/fraunces-latin-ext-opsz-normal.woff2` (Display serif: Fraunces Variable, Latin Extended)
- `fonts/figtree-latin-wght-normal.woff2` (Body sans: Figtree Variable, Latin)
- `fonts/figtree-latin-ext-wght-normal.woff2` (Body sans: Figtree Variable, Latin Extended)
- `fonts/space-mono-latin-400-normal.woff2` (Metrics mono: Space Mono 400, Latin)
- `fonts/space-mono-latin-ext-400-normal.woff2` (Metrics mono: Space Mono 400, Latin Extended)
- `fonts/space-mono-latin-700-normal.woff2` (Metrics mono: Space Mono 700, Latin)
- `fonts/space-mono-latin-ext-700-normal.woff2` (Metrics mono: Space Mono 700, Latin Extended)

## Local Preview

Serve the directory over HTTP (ES modules require an HTTP origin):

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

# Draupnir | Personal finance landing (portfolio case)

Single-page landing for a fictional personal-finance app. Pure HTML, CSS and JS: no frameworks, no third-party requests, no cookies.

Brand: Draupnir, Odin's golden ring that drips eight new rings every ninth night (Prose Edda). Fitting metaphor for money that multiplies, and honest about it: the ring is fiction, compound interest is not.

## Features

- Spanish default, English toggle (all strings via data-i18n)
- Self-hosted variable fonts: Fraunces (display), Figtree (body), Space Mono (data)
- Palettes: finance navy (#071b2b, #167d8d, #b9e4e8, #eeeeee) + money accents (#61a3ba, #ffffdd, #d2de32, #a2c579)
- Image slots are labeled placeholders (IMG 01-08) for real product shots
- Forms and plan buttons locked: demo site, nothing sends or collects
- Accessibility: skip link, focus-visible, ARIA labels, prefers-reduced-motion, AA contrast
- SEO: meta description, Open Graph, Twitter Card, robots.txt, sitemap.xml
- Security headers via _headers (CSP, nosniff, referrer policy)

## Deploy (Cloudflare Pages)

Framework preset: None. Build command: empty. Output directory: /.
If the project URL differs from https://draupnir.pages.dev/, update og:url, og:image, twitter:image, robots.txt and sitemap.xml.

## Credits

Built by Karen Gil: https://nheradev.com

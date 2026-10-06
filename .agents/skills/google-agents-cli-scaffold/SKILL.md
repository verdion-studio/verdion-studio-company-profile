---
name: google-agents-cli-scaffold
description: >-
  Panduan inisialisasi dan scaffolding boilerplate Astro, integrasi Tailwind CSS,
  serta struktur folder template halaman dan komponen Veridion Studio.
---

# Agent CLI Scaffolding Skill

## Template Inisialisasi Proyek
Gunakan template resmi Astro dengan opsi TypeScript & Tailwind CSS:
```bash
npm create astro@latest . -- --template minimal --typescript strict --install --no-git
npx astro add tailwind
```

## Struktur Folder Target
```text
src/
├── assets/          # Logo, icon, screenshot portofolio
├── components/      # Komponen UI modular
│   ├── ui/          # Button, Badge, Card, Modal
│   ├── sections/    # Hero, Portfolio, Industries, Promo, Wizard, Footer
│   └── wizard/      # Komponen multi-step App Request Builder
├── data/            # Konten statis (portfolio, services, promo slot)
├── layouts/         # Layout.astro (SEO metadata, header, footer)
└── pages/           # index.astro (Landing page), 404.astro
```


---
name: google-agents-cli-deploy
description: >-
  Prosedur dan instruksi deployment statis untuk platform Veridion Studio
  ke penyedia hosting modern seperti Vercel, Netlify, atau Cloudflare Pages.
---

# Agent CLI Deploy Skill

## Panduan Deployment Statis Astro

### Target Platform
- **Vercel** (Rekomendasi utama: integrasi Git otomatis, global edge network, SSL gratis).
- **Netlify** / **Cloudflare Pages**.

### Langkah Deployment
1. Build aplikasi secara lokal untuk validasi:
   ```bash
   npm run build
   ```
2. Pastikan folder output `dist/` berhasil digenerate tanpa error.
3. Sambungkan repositori GitHub ke akun Vercel/Netlify dengan preset framework **Astro**.
4. Set build command: `npm run build`, output directory: `dist`.


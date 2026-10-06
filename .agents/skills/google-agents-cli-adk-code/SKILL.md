---
name: google-agents-cli-adk-code
description: >-
  Panduan dan best practices untuk arsitektur kode aplikasi, komponen UI Astro/Tailwind,
  serta integrasi wizard interaktif Veridion Studio.
---

# Agent CLI ADK Code Skill

## Tujuan
Memberikan referensi pembuatan kode komponen antarmuka, arsitektur data statis, dan integrasi frontend Astro & Tailwind CSS yang bersih, modern, dan modular.

## Pedoman Arsitektur Komponen
1. **Layouts**: `src/layouts/Layout.astro` sebagai wrapper global yang mencakup tag HTML, header, footer, SEO metadata, dan font rendering.
2. **Components**:
   - `Hero.astro`: Menampilkan headline utama, status kuota 3 klien gratis, dan CTA.
   - `CaseStudy.astro`: Menampilkan profil portofolio CV Pelangi Efrata beserta metrik dan screenshot.
   - `IndustrySolutions.astro`: Kartu solusi spesifik untuk Cafe, Apotik, Perhotelan, dsb.
   - `AppRequestWizard.tsx / .astro`: Modul interaktif formulir preferensi klien.
3. **Data**: Simpan opsi industri, modul fitur, dan studi kasus di dalam `src/data/` untuk pemeliharaan mudah.


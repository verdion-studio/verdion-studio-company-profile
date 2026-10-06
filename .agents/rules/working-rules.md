# Working Rules & Engineering Standards

## Standar Kode & Struktur File
1. **Kebersihan Kode (Clean Code)**:
   - Gunakan komponen modular di Astro (`src/components/...`).
   - Pisahkan data konten statis ke file terpisah (misal `src/data/portfolio.ts`, `src/data/industries.ts`) agar mudah di-update tanpa mengubah layout.
2. **Optimasi SEO & Performa Web**:
   - Selalu sertakan meta tags komprehensif: OpenGraph, Twitter Card, Canonical URL, dan Schema Markup (JSON-LD LocalBusiness / SoftwareCompany).
   - Optimalkan gambar (gunakan format WebP atau komponen `<Image />` bawaan Astro).
   - Hindari library JavaScript berlebihan; hanya muat script pada komponen yang benar-benar membutuhkan interaktivitas (`client:visible` atau `client:idle`).
3. **Standar Lead & WhatsApp Generator**:
   - Format pesan WhatsApp harus terstruktur rapi dengan baris baru ter-encode (`%0A`), bullet points, dan detail lengkap yang diisi oleh calon klien melalui form wizard.
4. **Verifikasi & Build**:
   - Selalu pastikan `npm run build` berjalan mulus tanpa error atau warning type sebelum deployment.


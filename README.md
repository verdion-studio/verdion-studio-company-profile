# Veridion Studio — Independent Tech Studio Platform

Platform web resmi **Veridion Studio**, Independent Tech Studio yang berfokus membantu transformasi digital untuk UMKM, Cafe & Resto, Apotek, dan Industri Perhotelan di Indonesia melalui software kustom, Point of Sale (POS) cerdas, dan website bisnis modern.

Dibangun dengan arsitektur **Jamstack Statis (Astro + Tailwind CSS v4)** yang berfokus penuh pada **SEO (Search Engine Optimization)** maksimal, kecepatan akses instan, zero-database, serta fitur Lead Generation interaktif.

---

## 🚀 Fitur Utama Platform

1. **Branding & Positioning "Independent Tech Studio"**:
   - Menghilangkan stigma bahwa software custom itu mahal, lama, dan rumit bagi pemilik usaha lokal.
   - Keunggulan kompetitif: **Konsultasi langsung dengan lead developer tanpa perantara sales/birokrasi korporat**.
   - Dilengkapi dukungan **Light Mode & Dark Mode** interaktif dengan transisi halus dan anti-flash script.

2. **Showcase Portofolio & Produk Nyata**:
   - **CV Pelangi Efrata**: Sistem Enterprise POS kasir operasional harian terintegrasi web profil perusahaan resmi ([Live Web Portal](https://euphonious-liger-9f90e3.netlify.app/)).
   - **Coffee Stand POS**: Smart POS & Barista Ordering System khusus kedai kopi dengan kustomisasi minuman (suhu, level gula, ekstra shot), kalkulator kembalian cepat, dan cetak struk thermal 58mm ([Live Demo Hub](https://coffee-stand-demo.netlify.app/)).
   - **Enterprise Notice**: Framing profesional alasan repositori sistem POS privat demi keamanan data finansial klien.

3. **Transparansi Alur Kerja (How We Work)**:
   - 4 tahapan pengerjaan transparan: Konsultasi Tanpa Sales $\to$ Prototipe Alur Staf $\to$ Uji Coba Hardware Nyata $\to$ Pelatihan Kasir & Garansi Bug.

4. **FAQ Interaktif**:
   - Menjawab pertanyaan kritis pemilik usaha seputar kompatibilitas HP/tablet biasa, kapabilitas kasir saat internet mati (*offline-ready*), garansi perbaikan, dan ketiadaan biaya langganan bulanan tersembunyi.

5. **Program Early Partner (Gratis Biaya Development 3 Klien Pertama)**:
   - Program kemitraan percontohan tanpa biaya pengerjaan (*free development fee*) untuk 3 bisnis aktif pertama dengan timbal balik publikasi studi kasus.
   - Dilengkapi *Live Slot Tracker* (3/3 kuota tersedia).

6. **Interactive App Request Wizard**:
   - Calon klien dapat memilih sektor usaha, jenis solusi, dan modul fitur spesifik.
   - Otomatis merangkum spesifikasi proyek menjadi format teks terstruktur rapi untuk diajukan via **Direct WhatsApp** atau **Email Resmi**.

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) (v5+) — Static Site Generation (SSG), Zero JavaScript by default.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4+) via `@tailwindcss/vite` dengan custom dark variant.
- **Icons**: Lucide Icons & Custom SVG Vector.
- **Hosting / Deployment**: Netlify (Drag & Drop Static Deploy / CI).

---

## 📦 Menjalankan Proyek Secara Lokal

1. **Clone repositori**:
   ```bash
   git clone https://github.com/verdion-studio/verdion-studio-company-profile.git
   cd verdion-studio-company-profile
   ```

2. **Install dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Buka `http://localhost:4321` di browser Anda.

4. **Build untuk produksi**:
   ```bash
   npm run build
   ```
   Hasil file HTML/CSS/JS statis yang siap di-deploy akan berada di folder **`dist/`**.

---

## 🌐 Panduan Deployment ke Netlify (Drag & Drop)

1. Jalankan perintah build:
   ```bash
   npm run build
   ```
2. Buka **[Netlify Drop](https://app.netlify.com/drop)** atau masuk ke tab **Deploys** pada situs Netlify Anda ([monumental-pithivier-fc9158.netlify.app](https://monumental-pithivier-fc9158.netlify.app/)).
3. Tarik (*drag and drop*) folder **`dist/`** yang ada di direktori proyek ini langsung ke area upload.
4. Situs akan langsung ter-update seketika dengan versi terbaru.

---

## 📁 Struktur Folder Proyek

```text
├── .agents/                 # Standar tata kelola rule dan skill development
│   ├── rules/               # Personal context, project rules, & working standards
│   └── skills/              # Panduan modul scaffolding, coding, deploy, eval, dll
├── dist/                    # Output static build siap deploy (HTML, CSS, assets)
├── public/                  # Aset publik statis (favicon, logo, icons)
├── src/
│   ├── components/
│   │   └── sections/        # Komponen modular: Navbar, Hero, Portfolio, HowWeWork, FAQ, Wizard, Footer
│   ├── data/                # Data statis portofolio, solusi industri, faqs (src/data/content.ts)
│   ├── layouts/             # Template layout utama, SEO meta tags, & theme script
│   ├── pages/               # Routing halaman (index.astro)
│   └── styles/              # Global CSS Tailwind v4 & custom variants
├── astro.config.mjs         # Konfigurasi Astro + Vite Tailwind
├── netlify.toml             # Konfigurasi keamanan header & routing Netlify
└── package.json             # Manifest package & npm scripts
```

---

## 📄 Lisensi & Hak Cipta
Hak Cipta © 2026 **Veridion Studio**. Seluruh hak cipta dilindungi undang-undang.

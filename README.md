# Veridion Studio — Company Profile & Interactive App Request System

Platform web resmi **Veridion Studio**, software house solutif yang berfokus membantu transformasi digital untuk UMKM, Cafe & Resto, Apotek, dan Industri Perhotelan di Indonesia.

Dibangun dengan arsitektur **Jamstack Statis** yang berfokus penuh pada **SEO (Search Engine Optimization)**, kecepatan loading instan, dan zero-database.

---

## 🚀 Fitur Utama

1. **Branding & Positioning Kredibel**:
   - Menghilangkan persepsi bahwa software custom itu mahal dan rumit bagi pemilik usaha lokal.
   - Dilengkapi trust badge dan metrik performa sistem nyata.
2. **Studi Kasus & Portofolio Nyata**:
   - **CV Pelangi Efrata**: Sistem POS kasir operasional harian terintegrasi web profil perusahaan (bukan konsep/mockup fiktif).
3. **Program Early Partner (Gratis 3 Klien Pertama)**:
   - Program percontohan eksklusif untuk 3 pemilik bisnis pertama tanpa biaya pengerjaan (*free development fee*).
   - Dilengkapi *Live Slot Indicator* (3/3 kuota tersedia).
4. **Interactive App Request Wizard**:
   - Calon klien dapat memilih sektor usaha, kebutuhan sistem, platform, dan modul fitur spesifik.
   - Generator otomatis merangkum preferensi menjadi teks terstruktur rapi untuk diajukan via **Direct WhatsApp** atau **Email Resmi**.

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) (v5+) — Static Site Generation (SSG), Zero JavaScript by default.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4+) via `@tailwindcss/vite`.
- **Icons**: Lucide Icons & Custom SVG Vector.
- **Hosting / Deployment**: Netlify (Static Deploy).

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

Untuk akun Netlify tipe Organization atau Personal yang ingin deploy instan tanpa menghubungkan Git repo:

1. Jalankan perintah build:
   ```bash
   npm run build
   ```
2. Buka **[Netlify Drop](https://app.netlify.com/drop)** di browser.
3. Tarik (*drag and drop*) folder **`dist/`** yang ada di direktori proyek ini langsung ke area upload di halaman Netlify Drop.
4. Situs akan langsung live dalam beberapa detik dan Anda akan mendapatkan URL publik resmi (bisa disambungkan dengan custom domain).

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
│   │   └── sections/        # Komponen modular: Navbar, Hero, Portfolio, Wizard, Footer
│   ├── data/                # Data statis konten & portofolio (src/data/content.ts)
│   ├── layouts/             # Template layout utama & SEO meta tags
│   ├── pages/               # Routing halaman (index.astro)
│   └── styles/              # Global CSS Tailwind
├── astro.config.mjs         # Konfigurasi Astro
├── netlify.toml             # Konfigurasi header & routing Netlify
└── package.json             # Manifest package & npm scripts
```

---

## 📄 Lisensi & Hak Cipta
Hak Cipta © 2026 **Veridion Studio**. Seluruh hak cipta dilindungi undang-undang.

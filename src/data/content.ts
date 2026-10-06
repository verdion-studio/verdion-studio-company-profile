export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  impact: string;
  description: string;
  features: string[];
  tags: string[];
  metrics: { label: string; value: string }[];
  activeStatus: string;
  liveUrl?: string;
  isInteractiveDemo?: boolean;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 'coffee-stand-pos',
    title: 'Smart Coffee Stand POS & Barista Ordering System',
    client: 'Veridion Showcase / F&B Stand Kopi',
    category: 'Cafe & F&B Point of Sale',
    impact: 'Memangkas antrean pesanan hingga 4 sentuhan layar dan otomatisasi kalkulasi kembalian tunai.',
    description: 'Sistem kasir cerdas khusus kedai & stand kopi mandiri. Dilengkapi modul kustomisasi minuman barista (suhu, sugar level, ekstra espresso), integrasi QRIS, dan pencetakan struk kasir thermal 58mm.',
    features: [
      'Menu Barista Cepat (Espresso, Latte, Manual Brew, Pastry)',
      'Modifier Minuman (Ice/Hot, Level Gula, Add-on Topping)',
      'Checkout Kilat: Pecahan Uang Tunai Otomatis & QRIS Digital',
      'Simulasi Cetak Struk Kasir Thermal 58mm & Rekap Omzet Harian'
    ],
    tags: ['Cafe POS', 'Barista Tool', 'QRIS Payment', 'Thermal Receipt', 'PWA Offline'],
    metrics: [
      { label: 'Waktu Input Pesanan', value: '< 10 Detik' },
      { label: 'Akses Demo Publik', value: '100% Bebas Akses' },
      { label: 'Dukungan Perangkat', value: 'HP, Tablet & POS' }
    ],
    activeStatus: 'Sistem Demo Interaktif Aktif 24/7',
    liveUrl: 'https://coffee-stand-demo.netlify.app/', // Akan diupdate begitu link repo coffee-stand aktif
    isInteractiveDemo: true
  },
  {
    id: 'pelangi-efrata-pos-web',
    title: 'Enterprise POS & Company Profile System',
    client: 'CV Pelangi Efrata',
    category: 'Point of Sale & Web Portal',
    impact: 'Meningkatkan akurasi transaksi harian dan efisiensi rekapitulasi inventaris secara real-time.',
    description: 'Solusi software end-to-end yang mengintegrasikan sistem kasir operasional harian (Point of Sale) toko dan web company profile resmi untuk memperkuat kredibilitas B2B.',
    features: [
      'Sistem Kasir (POS) responsif & rekap transaksi harian instan',
      'Manajemen data stok & produk dengan peringatan stok menipis',
      'Company Profile korporat teroptimasi SEO & profil perusahaan resmi',
      'Ekspor laporan penjualan dan histori pembukuan berkala'
    ],
    tags: ['POS Kasir', 'Company Profile', 'Inventory Management', 'B2B Enterprise'],
    metrics: [
      { label: 'Efisiensi Waktu Rekap', value: '70% Lebih Cepat' },
      { label: 'Status Operasional', value: '100% Aktif Digunakan' },
      { label: 'Akurasi Transaksi', value: '99.9%' }
    ],
    activeStatus: 'Sistem aktif digunakan dalam operasional harian bisnis',
    liveUrl: 'https://euphonious-liger-9f90e3.netlify.app/',
    isInteractiveDemo: false
  }
];

export const portfolioLinks = {
  pelangiWebLiveUrl: 'https://euphonious-liger-9f90e3.netlify.app/',
  coffeeStandLiveUrl: 'https://coffee-stand-demo.netlify.app/',
  posAccessType: 'Private Enterprise Repository (NDA Protected)',
  posNotice: 'Sistem POS CV Pelangi Efrata berjalan pada private corporate environment dengan pengamanan data internal. Untuk melihat live demo walkthrough atau presentasi arsitektur modul kasirnya, calon mitra dapat mengajukan sesi konsultasi eksklusif.'
};

export interface IndustrySolution {
  id: string;
  name: string;
  iconName: string;
  badge: string;
  description: string;
  recommendedFeatures: string[];
}

export const industrySolutions: IndustrySolution[] = [
  {
    id: 'cafe-resto',
    name: 'Cafe, Coffee Shop & Resto',
    iconName: 'Coffee',
    badge: 'Food & Beverage',
    description: 'Sistem operasional kasir cepat, pesanan meja QR, serta kontrol bahan baku tanpa selisih.',
    recommendedFeatures: ['Smart POS Kasir Cepat', 'Menu Digital & QR Order', 'Kitchen Order Ticket (KOT)', 'Manajemen Stok Bahan Baku']
  },
  {
    id: 'apotik-klinik',
    name: 'Apotek & Klinik Mandiri',
    iconName: 'Pill',
    badge: 'Kesehatan & Farmasi',
    description: 'Kontrol stok obat dengan expired date tracker, resep digital, dan pencatatan transaksi farmasi.',
    recommendedFeatures: ['Expired Date & Batch Tracking', 'Sistem Resep & Kasir Apotek', 'Laporan Obat Masuk/Keluar', 'Multi-Unit Harga']
  },
  {
    id: 'perhotelan-villa',
    name: 'Perhotelan, Villa & Guest House',
    iconName: 'Building',
    badge: 'Hospitality',
    description: 'Manajemen ketersediaan kamar, reservasi mandiri, dan invoice tamu otomatis.',
    recommendedFeatures: ['Room Availability Calendar', 'Sistem Booking & Check-in/out', 'Invoice Tamu Otomatis', 'Katalog Layanan & Wisata']
  },
  {
    id: 'retail-umkm',
    name: 'Retail, Grosir & Toko Kelontong',
    iconName: 'ShoppingBag',
    badge: 'Retail & Dagang',
    description: 'Katalog produk online, kasir barcode scanner, dan integrasi pesanan instan via WhatsApp.',
    recommendedFeatures: ['Barcode Scanner POS', 'Laporan Laba Rugi Harian', 'Katalog WhatsApp Order', 'Mini CRM Member/Pelanggan']
  }
];

export const earlyPartnerProgram = {
  totalSlots: 3,
  availableSlots: 3,
  badgeText: 'Program Kemitraan Percontohan',
  title: 'Veridion Early Partner Program: Gratis Biaya Development untuk 3 Klien Pertama',
  description: 'Khusus untuk 3 pemilik usaha (UMKM, Cafe, Apotek, Hotel, Retail) yang siap mentransformasi sistem bisnisnya. Kami bangunkan aplikasi/web sesuai kebutuhan Anda tanpa biaya jasa pengembangan.',
  conditions: [
    'Gratis 100% Development Fee (Biaya Pembuatan Aplikasi / Web)',
    'Klien hanya menanggung domain/server pihak ketiga jika ingin domain kustom sendiri',
    'Sebagai timbal balik, klien bersedia memberikan feedback dan menjadi studi kasus resmi Veridion Studio',
    'Prioritas utama diberikan kepada bisnis yang sudah aktif beroperasi'
  ]
};

export const pilotTerms = {
  title: 'Ketentuan & Batasan Program Early Partner',
  subtitle: 'Transparansi Penuh untuk Hubungan Kemitraan yang Sehat & Saling Menguntungkan',
  covered: [
    '1 Unit Sistem Software Inti (Pilih salah satu: Web Portal Bisnis / Sistem Kasir POS Cafe / Sistem Inventori Toko)',
    'Setup awal hingga 50 daftar produk/menu dan master data bisnis Anda',
    'Pelatihan staf kasir dan pemilik usaha hingga mandiri mengoperasikan sistem',
    'Garansi pemeliharaan & perbaikan bug selama 30 hari pasca serah terima'
  ],
  clientCommitment: [
    'Menyediakan data menu/produk, harga, dan alur kerja bisnis secara kooperatif',
    'Menguji coba dan menggunakan sistem secara aktif dalam operasional toko',
    'Bersedia memberikan ulasan testimoni tertulis atau video singkat (30-45 detik) setelah sistem berjalan',
    'Memberikan izin pencantuman nama brand & logo bisnis sebagai portofolio resmi Veridion Studio'
  ],
  notCovered: [
    'Biaya perpanjangan nama domain pribadi (cth: .com/.id) atau cloud database berbayar pihak ketiga',
    'Pengadaan fisik hardware tambahan seperti tablet, smartphone, atau printer kasir',
    'Permintaan fitur di luar kesepakatan awal (fitur kompleks tambahan dapat didiskusikan terpisah)'
  ]
};

export const workingSteps = [
  {
    step: '01',
    title: 'Konsultasi Kebutuhan (Tanpa Sales)',
    subtitle: 'Direct with Developer',
    description: 'Diskusi langsung dengan lead developer teknis via WhatsApp / Google Meet untuk membedah SOP bisnis, kendala kasir, atau kebutuhan web Anda tanpa istilah teknis yang membingungkan.',
    deliverable: 'Spesifikasi fitur disepakati & estimasi timeline pengerjaan yang jelas'
  },
  {
    step: '02',
    title: 'Prototipe & Desain Alur Kerja',
    subtitle: 'Tailored for Your Staff',
    description: 'Kami merancang antarmuka sistem yang disesuaikan persis dengan kebiasaan operasional toko Anda (touch-friendly, tombol cepat, dan tata letak menu yang intuitif).',
    deliverable: 'Preview interaktif siap dicoba sebelum tahap integrasi final'
  },
  {
    step: '03',
    title: 'Integrasi & Uji Coba Lapangan',
    subtitle: 'Real Hardware Testing',
    description: 'Sistem diuji coba secara ketat di perangkat nyata (HP/Tablet kasir, printer struk thermal bluetooth, kalkulasi diskon, dan pencatatan inventaris tanpa selisih).',
    deliverable: 'Sistem stabil 100% bebas error fatal dan siap dipakai operasional'
  },
  {
    step: '04',
    title: 'Pelatihan Staf & Garansi Pasca-Rilis',
    subtitle: 'Zero Confusion Handover',
    description: 'Kami mendampingi langsung hingga kasir dan owner mahir menggunakan sistem, lengkap dengan garansi perbaikan bug cepat dan dukungan teknis berkelanjutan.',
    deliverable: 'Panduan penggunaan praktis & garansi pendampingan langsung'
  }
];

export const faqs = [
  {
    q: 'Apakah sistem kasir (POS) Veridion bisa dijalankan di HP Android atau tablet biasa?',
    a: 'Sangat bisa. Sistem kami dibangun dengan prinsip responsive dan mobile-first. Anda tidak wajib membeli mesin kasir POS berharga mahal; tablet Android standar, iPad, atau bahkan smartphone yang sudah Anda miliki bisa langsung difungsikan sebagai terminal kasir.'
  },
  {
    q: 'Bagaimana jika koneksi internet di cafe atau toko saya tiba-tiba terputus?',
    a: 'Kami merancang sistem dengan kapabilitas Offline-Ready (PWA / local caching). Staf kasir Anda tetap dapat menginput pesanan dan mencetak struk belanja. Begitu internet kembali stabil, data penjualan akan tersinkronisasi secara otomatis.'
  },
  {
    q: 'Apa saja syarat untuk mendapatkan slot 100% Gratis di Early Partner Program?',
    a: 'Program ini dibuka untuk 3 pemilik bisnis (UMKM, Cafe/Resto, Apotek, atau Hotel) yang sudah aktif beroperasi dan siap berkomitmen memberikan feedback langsung. Kami membebaskan 100% biaya jasa pengerjaan aplikasi, dengan timbal balik kesediaan menjadi studi kasus resmi Veridion Studio.'
  },
  {
    q: 'Apakah ada biaya langganan bulanan tersembunyi setelah aplikasi selesai?',
    a: 'Tidak ada biaya langganan tersembunyi. Software yang kami bangun adalah solusi kustom untuk bisnis Anda. Anda hanya perlu menyiapkan biaya perpanjangan domain atau hosting pihak ketiga (jika menggunakan nama domain pribadi).'
  },
  {
    q: 'Bagaimana jika kami menemukan bug atau ada kendala teknis setelah aplikasi berjalan?',
    a: 'Setiap proyek yang kami selesaikan disertai dengan Garansi Pendampingan Teknis. Anda dapat menghubungi lead developer kami langsung via WhatsApp untuk penanganan cepat tanpa birokrasi berbelit-belit.'
  }
];




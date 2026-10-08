export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  propertyType: string;
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
    id: 'aura-haven-villa-pms',
    title: 'Aura Haven Luxury Villas: Direct Booking Engine & Multi-Channel PMS',
    client: 'Aura Haven Property Group (12 Luxury Pool Villas)',
    propertyType: 'Private Villa & Luxury Vacation Rental',
    category: 'Direct Booking Engine & Villa PMS',
    impact: 'Menaikkan porsi direct booking hingga +38% dan menghemat biaya komisi OTA hingga Rp 28.400.000 per bulan.',
    description: 'Platform direct booking berkecepatan tinggi dengan kalender ketersediaan real-time, integrasi iCal 2-arah ke Airbnb & Booking.com, kalkulasi tarif musiman dinamis, serta konfirmasi instan via WhatsApp Concierge tanpa potongan komisi pihak ketiga.',
    features: [
      'Direct Booking Engine dengan simulasi tanggal & kalkulasi tarif musiman dinamis',
      'iCal Calendar Sync 2-Arah (Cegah overbooking antara Airbnb, Agoda, & direct guest)',
      'Automated WhatsApp Concierge: Panduan check-in otomatis, titik GPS, dan WiFi pass',
      'Integrasi Payment Gateway: Uang muka (DP) & pelunasan langsung via QRIS & Kartu Kredit'
    ],
    tags: ['Direct Booking Engine', 'iCal Calendar Sync', 'WhatsApp Concierge', 'Zero OTA Fee', 'Luxury Villa'],
    metrics: [
      { label: 'Pertumbuhan Direct Booking', value: '+38%' },
      { label: 'Komisi OTA Diselamatkan', value: 'Rp 28.4 Jt/bln' },
      { label: 'Risiko Double Booking', value: '0 Kasus (Sync iCal)' }
    ],
    activeStatus: 'Sistem Demo Interaktif Aktif 24/7',
    liveUrl: 'https://cute-liger-eb138a.netlify.app/',
    isInteractiveDemo: true
  },
  {
    id: 'lumina-resort-pms-concierge',
    title: 'Lumina Eco-Resort & Spa: All-in-One Cloud PMS, Housekeeping & Room Dining',
    client: 'Lumina Eco-Resort & Wellness Retreat (24 Units)',
    propertyType: 'Boutique Resort & Glamping Suites',
    category: 'Cloud PMS & Guest In-Room Dining',
    impact: 'Mempercepat turnaround pembersihan kamar hingga 40% dan menihilkan selisih tagihan restoran di folio kamar.',
    description: 'Sistem operasional front desk terintegrasi dengan pemantauan status kamar housekeeping (Clean/Dirty/Inspected), pesanan F&B in-room dining via QR di kamar, serta modul Night Audit & Rekapitulasi Pajak Daerah (PB1 Hotel).',
    features: [
      'Interactive Room Grid & Front Desk Dashboard (Check-in, Check-out, Extend Stay)',
      'Housekeeping Mobile Tracker: Notifikasi kamar kotor & update status siap huni instan',
      'QR Room Service & Dining: Pesanan tamu otomatis dibebankan ke Folio Tagihan Kamar',
      'Automated Night Audit & Laporan Pajak Daerah PB1 (10% PHR) siap ekspor'
    ],
    tags: ['Cloud PMS', 'Housekeeping Tracker', 'Room Folio Billing', 'Night Audit PB1', 'QR Dining'],
    metrics: [
      { label: 'Efisiensi Housekeeping', value: '40% Lebih Cepat' },
      { label: 'Kebocoran Tagihan Resto', value: '0% (Auto-Folio)' },
      { label: 'Waktu Night Audit', value: '< 5 Menit' }
    ],
    activeStatus: 'Blueprint Sistem Siap Pakai & Disesuaikan dengan SOP Hotel',
    isInteractiveDemo: false
  },
  {
    id: 'samudera-beach-club-pos',
    title: 'Samudera Beach Club & Lounge: Hospitality POS & Daybed Booking System',
    client: 'Samudera Hospitality & Resort Group',
    propertyType: 'Beach Club, Poolside Bar & Rooftop Lounge',
    category: 'Hospitality POS & Table Reservation',
    impact: 'Memangkas antrean kasir bar hingga 60% dan mengintegrasikan tagihan tamu langsung ke nomor kamar hotel.',
    description: 'Sistem kasir berkecepatan tinggi khusus bar tepi pantai dan restoran hotel. Dilengkapi modul manajemen minimum spend meja VIP/daybed cabana, split bill instan, cetak struk thermal, serta fitur charge-to-room folio.',
    features: [
      'Fast Touchscreen POS Kasir Bar & Dapur dengan modifier minuman cepat',
      'Fitur Charge to Room (Koneksi langsung ke nomor kamar & nama tamu menginap)',
      'VIP Daybed & Cabana Reservation Manager dengan Minimum Spend Calculator',
      'Pencatatan shift kasir, inventaris botol minuman & cetak thermal receipt 58/80mm'
    ],
    tags: ['Hospitality POS', 'Beach Club', 'Charge to Room', 'Minimum Spend', 'Daybed Booking'],
    metrics: [
      { label: 'Waktu Input Order', value: '< 8 Detik' },
      { label: 'Integrasi Tagihan Kamar', value: '100% Real-time' },
      { label: 'Akurasi Kasir Shift', value: '99.9%' }
    ],
    activeStatus: 'Arsitektur Sistem POS Hospitality Siap Implementasi',
    isInteractiveDemo: false
  },
  {
    id: 'nirvana-glamping-retreat',
    title: 'Nirvana Glamping & Adventure: Experiential Booking & Activity Scheduler',
    client: 'Nirvana Eco-Camp & Outdoor Sanctuary (18 Tenda Luxury)',
    propertyType: 'Luxury Glamping & Experiential Eco-Lodge',
    category: 'Experiential Booking Engine',
    impact: 'Mendongkrak pendapatan rata-rata per tamu hingga +45% melalui penjualan paket aktivitas bundling.',
    description: 'Platform pemesanan komprehensif yang menggabungkan reservasi tenda glamping dengan paket aktivitas outdoor (arung jeram, sunrise trekking, BBQ dinner). Mengatur kapasitas slot pemandu dan deposit peralatan outdoor secara otomatis.',
    features: [
      'Bundling Reservasi Tenda Glamping + Paket Aktivitas Wisata Outdoor',
      'Interactive Date & Slot Picker untuk kapasitas tour/aktivitas harian',
      'QR Self-Service Pemesanan Kayu Bakar, BBQ Set & Add-on Perlengkapan',
      'Manajemen deposit keamanan & refund otomatis pasca check-out'
    ],
    tags: ['Glamping Booking', 'Activity Bundling', 'Outdoor Retreat', 'Deposit Manager', 'Eco-Tourism'],
    metrics: [
      { label: 'Peningkatan RevPAR', value: '+45% (Bundling)' },
      { label: 'Efisiensi Jadwal Aktivitas', value: '80% Lebih Rapi' },
      { label: 'Kepuasan Tamu (CSAT)', value: '4.9 / 5.0' }
    ],
    activeStatus: 'Arsitektur Kustom Teruji untuk Sektor Wisata Alam & Glamping',
    isInteractiveDemo: false
  }
];

export const portfolioLinks = {
  auraDirectLiveUrl: 'https://cute-liger-eb138a.netlify.app/'
};

export interface IndustrySolution {
  id: string;
  name: string;
  targetProperty: string;
  badge: string;
  description: string;
  painPoints: string;
  recommendedFeatures: string[];
}

export const industrySolutions: IndustrySolution[] = [
  {
    id: 'luxury-villas',
    name: 'Private Villas & Vacation Rentals',
    targetProperty: 'Luxury Villa, Kompleks Villa Sewa Harian & Airbnb Host (1 - 10 Unit)',
    badge: 'Private Villas',
    description: 'Maksimalkan margin profit villa Anda dengan memotong komisi OTA 15-20%. Dapatkan direct booking mandiri dengan kalender anti-overbooking.',
    painPoints: 'Komisi OTA memotong hingga 20% margin dan risiko double booking antar platform kalender.',
    recommendedFeatures: [
      'High-Converting Direct Booking Engine & Payment Gateway',
      'iCal Multi-Channel Sync 2-Arah (Airbnb, Agoda, Booking.com)',
      'Automated WhatsApp Guest Concierge (Auto Check-in details)',
      'Kalkulasi Dynamic Rates (Weekend, Low/High Season)'
    ]
  },
  {
    id: 'boutique-hotels',
    name: 'Boutique Hotels & Heritage Lodges',
    targetProperty: 'Hotel Butik, Heritage Hotel & City Stay (10 - 50 Kamar)',
    badge: 'Boutique Hotel',
    description: 'Sistem manajemen front desk lengkap tanpa biaya langganan membengkak. Kendalikan kamar, night audit, dan pengalaman tamu secara profesional.',
    painPoints: 'Software hotel legacy lambat, berbayar mahal per bulan, dan susah dioperasikan staf baru.',
    recommendedFeatures: [
      'Interactive Room Grid & Status Kamar Real-time',
      'Folio Billing (Kamar, F&B Lounge, Laundry & Mini-bar)',
      'Laporan Night Audit & Rekapitulasi Pajak Daerah PB1',
      'Penyimpanan Rekam Tamu (Guest History & Preferences)'
    ]
  },
  {
    id: 'glamping-resorts',
    name: 'Glamping, Eco-Resorts & Retreats',
    targetProperty: 'Glamping Sites, Wellness Retreat, Cabin & Eco-Lodge',
    badge: 'Resort & Glamping',
    description: 'Sistem reservasi terpadu untuk penginapan alam terbuka dengan paket aktivitas outdoor, sewa perlengkapan, dan dining area.',
    painPoints: 'Paket tenda camp, aktivitas tracking, dan barbecue sering tercatat di buku terpisah tanpa sinkronisasi.',
    recommendedFeatures: [
      'Reservasi Paket Bundling (Tenda/Kabin + Aktivitas/Tour)',
      'QR Code In-Tent Dining & Barbecue Booking',
      'Jadwal Penjemputan / Shuttle Coordination Tracker',
      'Pencatatan Deposit Kerusakan & Pengembalian Otomatis'
    ]
  },
  {
    id: 'hotel-fnb-lounge',
    name: 'Beach Clubs, Rooftops & Hotel F&B',
    targetProperty: 'Beach Club, Poolside Bar, Rooftop Lounge & Resto Hotel',
    badge: 'Hospitality F&B',
    description: 'Sistem POS kasir dan reservasi daybed/meja yang terintegrasi langsung dengan nomor kamar tamu untuk kenyamanan *room-charge billing*.',
    painPoints: 'Tamu komplain saat checkout karena tagihan resto tidak tercatat rapi di resepsionis.',
    recommendedFeatures: [
      'Fast Touchscreen POS Kasir Bar & Dapur',
      'Fitur Charge to Room (Koneksi ke Nomor Kamar & Nama Tamu)',
      'Split Bill & Minimum Spend Manager Meja VIP',
      'Manajemen Stok Botol Minuman & Shift Kasir'
    ]
  }
];

export const hospitalityTechStandards = [
  {
    title: 'Zero OTA Commission (100% Margin Anda)',
    description: 'Tamu membayar langsung ke rekening Anda via Midtrans / Xendit (QRIS, Kartu Kredit, Virtual Account) tanpa potongan komisi pihak ketiga 15-20% per pemesanan.',
    icon: 'ShieldCheck'
  },
  {
    title: '2-Way iCal Multi-Channel Calendar Sync',
    description: 'Kalender ketersediaan tersinkronisasi otomatis dengan Airbnb, Booking.com, Agoda, dan kalender internal. Hilangkan 100% risiko overbooking atau double booking.',
    icon: 'CalendarSync'
  },
  {
    title: 'Automated Guest WhatsApp Concierge',
    description: 'Begitu booking terkonfirmasi, tamu otomatis menerima pesan WhatsApp personal berisi pin lokasi Google Maps, petunjuk check-in, aturan properti, dan password WiFi.',
    icon: 'MessageCircle'
  },
  {
    title: 'Front Desk PMS & Housekeeping Grid',
    description: 'Dashboard real-time yang ringan diakses dari tablet/laptop resepsionis. Staf housekeeping cukup update status kamar (Kotor / Bersih / Siap Huni) via HP pribadi.',
    icon: 'LayoutGrid'
  },
  {
    title: 'Room Folio Billing & Night Audit Otomatis',
    description: 'Semua tagihan in-room dining, minibar, dan laundry tamu langsung tertaut ke satu tagihan kamar. Laporan night audit dan pajak PB1 selesai dalam hitungan detik.',
    icon: 'Receipt'
  },
  {
    title: 'Kepemilikan Penuh Data Tamu (Direct CRM)',
    description: 'Berbeda dengan OTA yang menyembunyikan kontak tamu, Anda memiliki 100% database nomor WA & email tamu untuk program promo loyalitas dan direct re-booking.',
    icon: 'Users'
  }
];

export const earlyPartnerProgram = {
  totalSlots: 2,
  availableSlots: 2,
  badgeText: 'Program Kemitraan Hospitality (S&K Berlaku)',
  title: 'Hospitality Pilot Program: Gratis Biaya Development untuk 2 Properti Pertama',
  description: 'Khusus untuk 2 pemilik properti (Boutique Hotel, Luxury Villa, Glamping, atau Resort) yang siap mendongkrak direct booking dan merapikan sistem propertinya. Kami bangunkan Direct Booking Engine atau Custom PMS tanpa biaya jasa pembuatan (100% Free Development Fee) dengan skema timbal balik penguatan kredibilitas.',
  conditions: [
    'Gratis 100% Development Fee (Biaya Pembuatan Sistem / Web Booking Kustom)',
    'Klien hanya menanggung domain resmi properti & akun payment gateway sendiri (semua dana tamu masuk langsung ke rekening Anda)',
    'Syarat & Ketentuan Berlaku: Timbal balik berupa feedback resmi, video/ulasan testimoni, dan izin studi kasus untuk mengangkat reputasi layanan Veridion Studio',
    'Prioritas utama diberikan kepada properti yang sudah aktif beroperasi atau siap opening dalam 1-2 bulan ke depan'
  ]
};

export const pilotTerms = {
  title: 'Syarat & Ketentuan Program Kemitraan (Mutual Credibility Terms)',
  subtitle: 'Kolaborasi Simbiosis Mutualisme: Sistem Kelas Atas Gratis Ditukar Penguatan Kredibilitas Layanan',
  covered: [
    '1 Unit Sistem Inti Properti (Pilihan: Direct Booking Engine + Payment ATAU Cloud PMS Front Desk & Housekeeping)',
    'Setup master data kamar/villa, galeri foto, tipe tempat tidur, fasilitas, dan konfigurasi harga musiman',
    'Pelatihan staf resepsionis dan front desk hingga mandiri mengoperasikan sistem tanpa kendala',
    'Garansi pendampingan operasional & perbaikan bug selama 30 hari penuh pasca go-live'
  ],
  clientCommitment: [
    'Memberikan Testimoni Resmi: Ulasan tertulis berbobot dan video singkat (30–60 detik) dari Owner atau General Manager mengenai kepuasan sistem',
    'Hak Publikasi Studi Kasus: Izin pencantuman nama properti, logo, dan galeri foto sebagai showcase resmi di website & media promosi Veridion Studio',
    'Berbagi Metrik Kinerja Nyata: Kesediaan membagikan ringkasan data efisiensi setelah 14–30 hari (misal: persentase kenaikan direct booking atau nominal komisi OTA yang dihemat)',
    '1x Sesi Evaluasi Produk: Diskusi santai (30 menit) bersama lead developer untuk memberikan masukan UI/UX demi peningkatan kualitas sistem berikutnya',
    'Komitmen Penggunaan Nyata: Berkomitmen mengoperasikan sistem secara aktif untuk reservasi tamu sebenarnya'
  ],
  notCovered: [
    'Biaya langganan domain web kustom (cth: namavilla.com) atau biaya MDR payment gateway pihak ketiga (Midtrans/Xendit)',
    'Pengadaan fisik hardware tambahan seperti tablet resepsionis atau printer kasir',
    'Penambahan modul kustom di luar kesepakatan awal (fitur kompleks lanjutan dapat didiskusikan secara bertahap)'
  ]
};

export const workingSteps = [
  {
    step: '01',
    title: 'Audit Properti & Alur Reservasi',
    subtitle: 'Direct with Tech Lead',
    description: 'Diskusi langsung dengan lead developer kami via WhatsApp atau Google Meet untuk membedah masalah komisi OTA, alur check-in tamu, atau kendala koordinasi housekeeping di properti Anda.',
    deliverable: 'Rekomendasi arsitektur sistem properti & estimasi waktu go-live yang terukur'
  },
  {
    step: '02',
    title: 'Desain Antarmuka Tamu & Resepsionis',
    subtitle: 'Tailored Guest Experience',
    description: 'Kami merancang tampilan direct booking yang elegan dan mobile-first untuk tamu kelas atas, serta dashboard resepsionis yang mudah dipahami staf front office non-teknis.',
    deliverable: 'Preview prototipe interaktif siap uji coba sebelum fase integrasi'
  },
  {
    step: '03',
    title: 'Integrasi Payment, iCal & Uji Lapangan',
    subtitle: 'Real-World Sync Testing',
    description: 'Menghubungkan payment gateway (QRIS / Kartu Kredit) ke rekening pemilik, mensinkronkan kalender iCal Airbnb/Booking.com, dan memastikan alur WhatsApp concierge berjalan mulus.',
    deliverable: 'Sistem stabil 100% tanpa risiko overbooking dan siap menerima tamu riil'
  },
  {
    step: '04',
    title: 'Pelatihan Staf Front Office & Go-Live',
    subtitle: 'Full Onboarding Support',
    description: 'Pendampingan langsung kepada resepsionis dan tim operasional hingga lancar, disertai SOP panduan praktis dan garansi penanganan teknis responsif.',
    deliverable: 'Sistem live aktif & garansi pendampingan langsung via jalur prioritas'
  }
];

export const faqs = [
  {
    q: 'Bagaimana cara sistem Veridion mencegah overbooking antara Web Direct dan OTA seperti Airbnb/Booking.com?',
    a: 'Sistem kami menggunakan integrasi protokol 2-Way iCal Multi-Channel Sync standar industri perhotelan internasional. Setiap kali ada tamu yang memesan di website Anda, jadwal tanggal tersebut otomatis diblokir di Airbnb dan Booking.com. Sebaliknya, saat ada booking masuk dari OTA, tanggal di website direct Anda otomatis terkunci dalam hitungan menit.'
  },
  {
    q: 'Apakah uang pembayaran tamu langsung masuk ke rekening bank pemilik properti?',
    a: 'Ya, 100% langsung masuk ke rekening Anda. Kami mengintegrasikan payment gateway resmi (seperti Midtrans atau Xendit) atas nama usaha atau rekening pribadi pemilik properti. Veridion Studio tidak memotong komisi per transaksi maupun menahan dana operasional Anda.'
  },
  {
    q: 'Apakah staf resepsionis atau housekeeping yang tidak mahir teknologi bisa mengoperasikannya?',
    a: 'Sangat mudah. Sistem kami dirancang dengan pendekatan antarmuka intuitif (clean UX). Staf resepsionis hanya perlu melihat grid warna kamar (Hijau = Siap Huni, Merah = Terisi, Kuning = Sedang Dibersihkan), sedangkan tim housekeeping cukup menggunakan smartphone pribadi untuk update status kamar dengan sekali sentuh.'
  },
  {
    q: 'Berapa rata-rata penghematan komisi yang didapat sebuah villa/hotel dengan Direct Booking Engine?',
    a: 'Sebagai gambaran, jika properti Anda memiliki 10 unit kamar dengan tarif Rp 800.000/malam dan rata-rata okupansi 65%, perputaran omzet kotor berkisar Rp 156.000.000/bulan. Bila 70% tamu berasal dari OTA dengan komisi 18%, Anda membayar potongan komisi sekitar Rp 19.600.000 setiap bulan! Mengalihkan sebagian reservasi ke Direct Booking menghemat puluhan hingga ratusan juta rupiah per tahun.'
  },
  {
    q: 'Apa saja syarat dan ketentuan (S&K) untuk mendapatkan slot 100% Gratis di Hospitality Pilot Program?',
    a: 'Program ini dibuka khusus untuk 2 pemilik properti (Boutique Hotel, Luxury Villa, Glamping, atau Resort) yang beroperasi aktif atau siap opening. Kami membebaskan 100% biaya jasa development, dengan komitmen timbal balik berupa: ulasan/video testimoni dari Owner/GM, hak publikasi studi kasus di web Veridion, kesediaan berbagi data dampak (metrik komisi yang dihemat/kenaikan booking), serta 1 sesi feedback produk.'
  },
  {
    q: 'Apakah kami harus membeli server atau perangkat komputer kasir hotel yang mahal?',
    a: 'Tidak perlu. Sistem berbasis arsitektur Cloud Modern yang responsif. Front desk dapat dijalankan dari laptop standar atau tablet (iPad / Android), dan tamu dapat memesan langsung dari smartphone mereka tanpa perlu mendownload aplikasi dari Play Store / App Store.'
  }
];

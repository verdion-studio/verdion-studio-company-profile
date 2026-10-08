import type { PortfolioItem, IndustrySolution } from './content';

export const portfolioDataEn: PortfolioItem[] = [
  {
    id: 'aura-haven-villa-pms',
    title: 'Aura Haven Luxury Villas: Direct Booking Engine & Multi-Channel PMS',
    client: 'Aura Haven Property Group (12 Luxury Pool Villas)',
    propertyType: 'Private Villa & Luxury Vacation Rental',
    category: 'Direct Booking Engine & Villa PMS',
    impact: 'Increased direct booking share by +38% and saved over $1,850 (Rp 28.4M) per month in OTA commission fees.',
    description: 'High-speed direct booking engine featuring real-time availability calendars, 2-way iCal synchronization with Airbnb & Booking.com, dynamic seasonal pricing, and instant automated WhatsApp Concierge confirmation without middleman commission cuts.',
    features: [
      'Direct Booking Engine with interactive date range picker and dynamic seasonal rates',
      '2-Way iCal Calendar Sync (Eliminates double-booking between Airbnb, Agoda, and direct guests)',
      'Automated WhatsApp Concierge: Instant check-in guides, GPS location pin, and Wi-Fi credentials',
      'Direct Payment Gateway: Instant security deposit (DP) and full settlement via QRIS & Credit Cards'
    ],
    tags: ['Direct Booking Engine', 'iCal Calendar Sync', 'WhatsApp Concierge', 'Zero OTA Fee', 'Luxury Villa'],
    metrics: [
      { label: 'Direct Booking Growth', value: '+38%' },
      { label: 'Monthly OTA Commission Saved', value: 'Rp 28.4M / mo' },
      { label: 'Double-Booking Incidents', value: '0 Cases (Sync iCal)' }
    ],
    activeStatus: 'Interactive Demo System Live 24/7',
    liveUrl: 'https://cute-liger-eb138a.netlify.app/',
    isInteractiveDemo: true
  },
  {
    id: 'lumina-resort-pms-concierge',
    title: 'Lumina Eco-Resort & Spa: All-in-One Cloud PMS, Housekeeping & Room Dining',
    client: 'Lumina Eco-Resort & Wellness Retreat (24 Units)',
    propertyType: 'Boutique Resort & Glamping Suites',
    category: 'Cloud PMS & Guest In-Room Dining',
    impact: 'Accelerated room cleaning turnaround by 40% and eliminated unbilled restaurant tabs via automated room folios.',
    description: 'Integrated front-desk property management system featuring real-time housekeeping room status (Clean/Dirty/Inspected), QR code in-room dining directly billed to the guest room folio, and automated daily Night Audit with local hotel tax (PB1) export.',
    features: [
      'Interactive Room Grid & Front Desk Dashboard (Check-in, Check-out, Extend Stay)',
      'Housekeeping Mobile Tracker: Instant room dirty notifications and ready-for-inspection updates',
      'QR Room Service & Dining: Guest orders automatically posted to Room Folio Billing',
      'Automated Night Audit & Local Hotel Tax PB1 (10% PHR) export-ready reporting'
    ],
    tags: ['Cloud PMS', 'Housekeeping Tracker', 'Room Folio Billing', 'Night Audit PB1', 'QR Dining'],
    metrics: [
      { label: 'Housekeeping Turnaround', value: '40% Faster' },
      { label: 'Unbilled Dining Leakage', value: '0% (Auto-Folio)' },
      { label: 'Night Audit Duration', value: '< 5 Minutes' }
    ],
    activeStatus: 'Production-Ready System Blueprint & SOP-Tailored',
    isInteractiveDemo: false
  },
  {
    id: 'samudera-beach-club-pos',
    title: 'Samudera Beach Club & Lounge: Hospitality POS & Daybed Booking System',
    client: 'Samudera Hospitality & Resort Group',
    propertyType: 'Beach Club, Poolside Bar & Rooftop Lounge',
    category: 'Hospitality POS & Table Reservation',
    impact: 'Reduced bar checkout queues by 60% and enabled seamless charge-to-room billing for hotel guests.',
    description: 'High-speed touch-friendly point of sale designed specifically for beachfront bars, dayclubs, and hotel restaurants. Features VIP cabana reservation management, minimum spend calculators, instant split-billing, and charge-to-room folio integration.',
    features: [
      'Fast Touchscreen Bar & Kitchen POS with rapid cocktail and dish modifier controls',
      'Charge to Room Folio Feature (Direct integration with hotel guest name & room number)',
      'VIP Daybed & Cabana Reservation Manager with Minimum Spend Calculator',
      'Cashier shift reconciliation, beverage inventory tracking & 58/80mm thermal receipt printing'
    ],
    tags: ['Hospitality POS', 'Beach Club', 'Charge to Room', 'Minimum Spend', 'Daybed Booking'],
    metrics: [
      { label: 'Order Processing Speed', value: '< 8 Seconds' },
      { label: 'Room Billing Sync', value: '100% Real-time' },
      { label: 'Shift Cashier Accuracy', value: '99.9%' }
    ],
    activeStatus: 'Hospitality POS Architecture Ready for Implementation',
    isInteractiveDemo: false
  },
  {
    id: 'nirvana-glamping-retreat',
    title: 'Nirvana Glamping & Adventure: Experiential Booking & Activity Scheduler',
    client: 'Nirvana Eco-Camp & Outdoor Sanctuary (18 Luxury Tents)',
    propertyType: 'Luxury Glamping & Experiential Eco-Lodge',
    category: 'Experiential Booking Engine',
    impact: 'Boosted average guest spend (RevPAR) by +45% through bundled adventure package reservations.',
    description: 'Comprehensive experiential booking platform combining luxury tent accommodation with outdoor adventure packages (river rafting, sunrise trekking, BBQ dinner). Automatically coordinates guide capacity and equipment rental security deposits.',
    features: [
      'Bundled Luxury Tent Reservation + Outdoor Adventure & Tour Packages',
      'Interactive Date & Time Slot Picker for daily guide and activity capacity',
      'QR Self-Service for Campfire Sets, BBQ Kits & Add-on Adventure Gear',
      'Automated security deposit management and post-checkout refunds'
    ],
    tags: ['Glamping Booking', 'Activity Bundling', 'Outdoor Retreat', 'Deposit Manager', 'Eco-Tourism'],
    metrics: [
      { label: 'RevPAR Increase', value: '+45% (Bundling)' },
      { label: 'Activity Schedule Efficiency', value: '80% Cleaner' },
      { label: 'Guest CSAT Rating', value: '4.9 / 5.0' }
    ],
    activeStatus: 'Proven Custom Booking Architecture for Nature Resorts',
    isInteractiveDemo: false
  }
];

export const industrySolutionsEn: IndustrySolution[] = [
  {
    id: 'luxury-villas',
    name: 'Private Villas & Vacation Rentals',
    targetProperty: 'Luxury Villas, Daily Rental Compounds & Airbnb Hosts (1 - 10 Units)',
    badge: 'Private Villas',
    description: 'Maximize your villa profit margins by eliminating 15-20% OTA fees. Gain proprietary direct bookings with anti-overbooking calendar sync.',
    painPoints: 'High OTA commission fees eating up to 20% of net margin and high risk of double-booking across fragmented channels.',
    recommendedFeatures: [
      'High-Converting Direct Booking Engine & Payment Gateway',
      '2-Way iCal Multi-Channel Sync (Airbnb, Agoda, Booking.com)',
      'Automated WhatsApp Guest Concierge (Auto check-in details)',
      'Dynamic Seasonal Rates Engine (Weekend, Low/High Season)'
    ]
  },
  {
    id: 'boutique-hotels',
    name: 'Boutique Hotels & Heritage Lodges',
    targetProperty: 'Boutique Hotels, Heritage Stays & City Lodges (10 - 50 Rooms)',
    badge: 'Boutique Hotel',
    description: 'Complete front-desk management system without bloated monthly subscriptions. Control room availability, night audits, and guest billing professionally.',
    painPoints: 'Legacy hotel software is clunky, expensive, and difficult for newly recruited front desk staff to operate.',
    recommendedFeatures: [
      'Interactive Room Grid & Real-time Room Status',
      'Room Folio Billing (Rooms, F&B Lounge, Laundry & Minibar)',
      'Automated Night Audit & Local Hotel Tax Reports (PB1)',
      'Guest Profile & Preferences History (Direct CRM)'
    ]
  },
  {
    id: 'glamping-resorts',
    name: 'Glamping, Eco-Resorts & Retreats',
    targetProperty: 'Glamping Sites, Wellness Retreats, Cabins & Eco-Lodges',
    badge: 'Resort & Glamping',
    description: 'Unified reservation platform for open-air accommodations with outdoor tour packages, gear rentals, and dining integration.',
    painPoints: 'Tent bookings, adventure activities, and barbecue dinners are tracked in disconnected notebooks and spreadsheets.',
    recommendedFeatures: [
      'Bundled Package Reservations (Tent/Cabin + Outdoor Activities)',
      'QR Code In-Tent Dining & Barbecue Dinner Booking',
      'Airport Shuttle & Transport Coordination Tracker',
      'Security Damage Deposit & Automated Refund Logging'
    ]
  },
  {
    id: 'hotel-fnb-lounge',
    name: 'Beach Clubs, Rooftops & Hotel F&B',
    targetProperty: 'Beach Clubs, Poolside Bars, Rooftop Lounges & Hotel Dining',
    badge: 'Hospitality F&B',
    description: 'Fast POS cashier and daybed reservation system integrated directly with hotel room folios for effortless guest room-charging.',
    painPoints: 'Guests dispute dining charges at checkout because restaurant tabs are not synchronized in real-time with reception.',
    recommendedFeatures: [
      'Fast Touchscreen POS for Bar & Kitchen Stations',
      'Charge to Room Feature (Direct connection to guest room & name)',
      'Split Bill & Minimum Spend Manager for VIP Daybed Cabanas',
      'Bottle Inventory Control & Cashier Shift Reconciliation'
    ]
  }
];

export const hospitalityTechStandardsEn = [
  {
    title: 'Zero OTA Commission (100% Direct Revenue)',
    description: 'Guests pay directly into your account via Midtrans / Xendit (QRIS, Credit Card, Virtual Account) without third-party commission cuts of 15-20% per booking.',
    icon: 'ShieldCheck'
  },
  {
    title: '2-Way iCal Multi-Channel Calendar Sync',
    description: 'Availability calendars synchronize automatically with Airbnb, Booking.com, Agoda, and your direct engine. Completely eliminates overbooking risks.',
    icon: 'CalendarSync'
  },
  {
    title: 'Automated Guest WhatsApp Concierge',
    description: 'Upon booking confirmation, guests automatically receive a personalized WhatsApp message with Google Maps pins, check-in instructions, house rules, and Wi-Fi codes.',
    icon: 'MessageCircle'
  },
  {
    title: 'Front Desk PMS & Housekeeping Grid',
    description: 'Lightweight real-time dashboard accessible from reception tablets or laptops. Housekeeping staff update room cleanliness status via their own smartphones.',
    icon: 'LayoutGrid'
  },
  {
    title: 'Room Folio Billing & Automated Night Audit',
    description: 'All in-room dining, minibar, and laundry charges link directly to the room folio. Daily night audits and local hotel tax reports (PB1) generate in seconds.',
    icon: 'Receipt'
  },
  {
    title: 'Full Guest Data Ownership (Direct CRM)',
    description: 'Unlike OTAs that mask guest contact details, you retain 100% of guest phone numbers and emails for loyalty campaigns and direct repeat bookings.',
    icon: 'Users'
  }
];

export const earlyPartnerProgramEn = {
  totalSlots: 2,
  availableSlots: 2,
  badgeText: 'Hospitality Pilot Partnership (T&Cs Apply)',
  title: 'Hospitality Pilot Program: 100% Free Development Fee for the First 2 Properties',
  description: 'Exclusively for 2 property owners (Boutique Hotel, Luxury Villa, Glamping, or Resort) ready to scale direct bookings and streamline daily operations. We build your Direct Booking Engine or Custom PMS with zero development fees in exchange for mutual credibility enhancement.',
  conditions: [
    '100% Free Development Fee (Zero Software Engineering & Build Costs)',
    'Property only covers their own custom domain & payment gateway account (100% of guest funds flow directly to you)',
    'Terms & Conditions Apply: In exchange for official feedback, a written/video testimonial, and case study publication rights to elevate Veridion Studio’s industry reputation',
    'Priority granted to properties currently in active operation or launching within the next 1-2 months'
  ]
};

export const pilotTermsEn = {
  title: 'Pilot Program Terms & Conditions (Mutual Credibility Agreement)',
  subtitle: 'A Symbiotic Partnership: High-End Custom Systems in Exchange for Strong Industry Credibility',
  covered: [
    '1 Core Property Software Unit (Choose: Direct Booking Engine + Payment OR Cloud PMS Front Desk & Housekeeping)',
    'Complete master data setup: rooms/villas, photo galleries, bed types, amenities, and dynamic seasonal pricing',
    'Staff onboarding and training for receptionists to ensure seamless day-to-day operation',
    '30 days of comprehensive post-launch technical warranty and rapid bug-fixing support'
  ],
  clientCommitment: [
    'Official Testimonial: A meaningful written review and short video testimonial (30–60s) from the Owner or General Manager upon successful implementation',
    'Case Study Rights: Permission to showcase property name, brand logo, and photo gallery on Veridion Studio’s official website and media portfolio',
    'Real Performance Metrics: Willingness to share operational metric summaries after 14–30 days (e.g. % increase in direct bookings or estimated OTA commission savings)',
    '1x Product Evaluation Session: A 30-minute casual feedback interview with our lead developer to discuss guest & staff UI/UX experience',
    'Active Operational Commitment: Commitment to actively run real guest reservations through the newly built platform'
  ],
  notCovered: [
    'Custom domain registration renewal (e.g. yourvilla.com) or standard third-party payment gateway transaction MDR fees',
    'Physical hardware procurement such as front-desk tablets, smartphones, or receipt printers',
    'Additional complex custom features beyond the initial agreed project scope (can be phased afterwards)'
  ]
};

export const workingStepsEn = [
  {
    step: '01',
    title: 'Property & Reservation Workflow Audit',
    subtitle: 'Direct with Tech Lead',
    description: 'Direct consultation with our lead software architect via WhatsApp or Google Meet to dissect your OTA commission losses, guest check-in flow, and housekeeping coordination hurdles.',
    deliverable: 'Tailored property architecture recommendation & measurable go-live schedule'
  },
  {
    step: '02',
    title: 'Guest & Front-Desk Interface Design',
    subtitle: 'Tailored Guest Experience',
    description: 'We design an elegant, mobile-first direct booking interface tailored to high-end guests, paired with an intuitive front-desk dashboard accessible to non-technical staff.',
    deliverable: 'Interactive prototype preview ready for review before technical integration'
  },
  {
    step: '03',
    title: 'Payment, iCal Sync & Field Testing',
    subtitle: 'Real-World Sync Testing',
    description: 'Connecting direct payment gateways (QRIS / Credit Cards) to the owner account, calibrating 2-way iCal calendar sync with Airbnb/Booking.com, and validating WhatsApp dispatchers.',
    deliverable: 'Rock-solid system with 0% overbooking risk, ready to take live reservations'
  },
  {
    step: '04',
    title: 'Front Office Training & Official Go-Live',
    subtitle: 'Full Onboarding Support',
    description: 'Hands-on training for front-desk staff and property managers, accompanied by standard operating procedures (SOPs) and rapid-response technical support.',
    deliverable: 'Live production system & priority developer support warranty'
  }
];

export const faqsEn = [
  {
    q: 'How does Veridion prevent overbooking between the Direct Web and OTAs like Airbnb/Booking.com?',
    a: 'We implement industry-standard 2-Way iCal Multi-Channel Sync protocols. Whenever a guest books on your direct website, those dates are automatically blocked on Airbnb and Booking.com. Conversely, when a reservation arrives from an OTA, the dates on your direct website lock within minutes.'
  },
  {
    q: 'Do guest booking payments deposit directly into the property owner’s bank account?',
    a: 'Yes, 100% directly into your account. We integrate official payment gateways (such as Midtrans or Xendit) registered under your legal entity or personal business bank account. Veridion Studio takes zero commission per transaction and holds none of your funds.'
  },
  {
    q: 'Can front-desk or housekeeping staff with low technical skills operate this system easily?',
    a: 'Effortlessly. Our system is built with an intuitive clean-UX philosophy. Receptionists see a visual color-coded room grid (Green = Ready, Blue = Occupied, Yellow = Housekeeping), while housekeeping staff simply use their personal smartphones to update room cleaning statuses with one tap.'
  },
  {
    q: 'How much commission can a villa or boutique hotel save with a Direct Booking Engine?',
    a: 'For example, if your property manages 10 units at $60 (Rp 850k) per night with a 65% occupancy rate, monthly gross room revenue is roughly $11,700 (Rp 165M). With 70% of bookings coming from OTAs at an 18% commission rate, you pay roughly $1,470 (Rp 20.8M) every month in commission cuts! Diverting even half of those to direct bookings saves tens of millions annually.'
  },
  {
    q: 'What are the exact terms and conditions (T&Cs) for the 100% Free Hospitality Pilot Program?',
    a: 'The program is open exclusively to 2 property owners (Boutique Hotel, Luxury Villa, Glamping, or Resort) that are currently operating or approaching launch. We waive 100% of our software development fee in exchange for: an owner/GM written/video testimonial, case study publication rights on our website, sharing real performance metric summaries after 14-30 days, and one 30-minute product evaluation interview.'
  },
  {
    q: 'Do we need to purchase expensive hotel servers or specialized hardware?',
    a: 'Not at all. The entire system is built on modern lightweight cloud architecture. Receptionists can operate the PMS on standard laptops or tablets (iPads/Android), and guests book seamlessly on their mobile browsers without downloading any apps.'
  }
];

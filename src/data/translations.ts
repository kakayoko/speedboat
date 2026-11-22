export type Lang = 'id' | 'en';

export interface WhatsAppContact {
  id: string;
  label: string;
  displayNumber: string;
  waNumber: string;
  roleId: string;
  roleEn: string;
}

export interface FleetPhoto {
  id: string;
  src: string;
  objectPosition: string;
  zoomScale?: number;
  titleId: string;
  titleEn: string;
  captionId: string;
  captionEn: string;
  specId: string;
  specEn: string;
  altId: string;
  altEn: string;
}

export const WHATSAPP_CONTACTS: WhatsAppContact[] = [
  {
    id: 'wa-1',
    label: 'WhatsApp 1',
    displayNumber: '0823-9858-1997',
    waNumber: '6282398581997',
    roleId: 'Admin Reservasi & Jadwal',
    roleEn: 'Charter Reservations & Scheduling',
  },
  {
    id: 'wa-2',
    label: 'WhatsApp 2',
    displayNumber: '+62 823-9739-2047',
    waNumber: '6282397392047',
    roleId: 'Koordinator Operasional Waisai',
    roleEn: 'Waisai Operations Coordinator',
  },
];

export const FLEET_PHOTOS: FleetPhoto[] = [
  {
    id: 'exterior-profile',
    src: '/assets/aistudio/WhatsApp_Image_2026-11-06_at_21.39.14_3dea39d5.jpeg',
    objectPosition: '50% 60%',
    titleId: 'Tampak Luar KM Tiga Putra Raja Ampat',
    titleEn: 'KM Tiga Putra Raja Ampat Exterior Profile',
    captionId: 'Lambung fiberglass putih-merah bersandar di perairan dangkal Raja Ampat dengan pelindung fender samping dan jendela kabin penuh.',
    captionEn: 'White-and-crimson fiberglass hull anchored in clear Raja Ampat shallows with side mooring fenders and full cabin windows.',
    specId: 'Pangkalan Waisai · Kapasitas Maks. 15 Penumpang',
    specEn: 'Waisai Base Port · Max. 15 Passengers',
    altId: 'Speedboat privat KM Tiga Putra Raja Ampat dengan dua mesin Suzuki 150 HP di perairan jernih Raja Ampat',
    altEn: 'Private speedboat KM Tiga Putra Raja Ampat with twin Suzuki 150 HP engines in clear turquoise water',
  },
  {
    id: 'twin-engines',
    src: '/assets/aistudio/WhatsApp_Image_2026-11-06_at_21.39.16__3__91ecf7d3.jpeg',
    objectPosition: '50% 52%',
    titleId: 'Mesin Ganda Twin Suzuki 150 HP',
    titleEn: 'Twin Suzuki 150 HP Outboard Propulsion',
    captionId: 'Dua unit mesin tempel Suzuki 4-tak 150 HP (total 300 HP) dilengkapi tie-bar kemudi hidraulis dan filter pemisah air-bahan bakar ganda.',
    captionEn: 'Dual Suzuki 150 HP 4-stroke outboards (300 HP combined) rigged with hydraulic tie-bar steering and dual fuel-water separators.',
    specId: 'Total Tenaga 300 HP · Sistem Kemudi Hidraulis',
    specEn: '300 HP Combined Output · Hydraulic Steering',
    altId: 'Dua mesin tempel Suzuki 150 HP terpasang rapi di buritan kapal menghadap tebing karst Raja Ampat',
    altEn: 'Twin black Suzuki 150 HP outboard motors mounted on the stern facing Raja Ampat limestone cliffs',
  },
  {
    id: 'shaded-cabin',
    src: '/assets/aistudio/WhatsApp_Image_2026-11-06_at_21.39.16__4__19828bdf.jpeg',
    objectPosition: '50% 55%',
    titleId: 'Kabin Tertutup & Kursi Empuk',
    titleEn: 'Enclosed Hardtop Cabin & Padded Seating',
    captionId: 'Interior kabin beratap penuh pelindung matahari dan hujan, bangku busa kulit hitam di kedua sisi, serta dek tengah non-slip yang lega.',
    captionEn: 'Full hardtop cabin shielded from tropical sun and spray, twin padded black bench rows, and spacious center walkway.',
    specId: 'Atap Tertutup · Jendela Geser Berventilasi',
    specEn: 'Sun & Rain Shelter · Ventilated Sliding Windows',
    altId: 'Interior kabin speedboat Tiga Putra Raja Ampat dengan bangku empuk hitam dan atap merah mengilap',
    altEn: 'Interior cabin of Tiga Putra Raja Ampat featuring padded black bench seats and glossy red hardtop ceiling',
  },
  {
    id: 'helm-safety',
    src: '/assets/aistudio/WhatsApp_Image_2026-11-06_at_21.39.16__4__19828bdf.jpeg',
    objectPosition: '50% 42%',
    zoomScale: 1.65,
    titleId: 'Kokpit Nakhoda & Rak Jaket Keselamatan',
    titleEn: 'Captain Helm Station & Lifejacket Stowage',
    captionId: 'Kursi kemudi ergonomis di haluan dengan jarak pandang 270 derajat serta penyimpanan life jacket yang kering dan mudah dijangkau.',
    captionEn: 'Ergonomic forward captain helm with 270-degree visibility and dry, immediately accessible lifejacket stowage.',
    specId: 'Peralatan Keselamatan Standar Laut · 15+ Life Jacket',
    specEn: 'Marine Safety Readiness · 15+ Life Jackets',
    altId: 'Detail area kokpit nakhoda dan penyimpanan jaket pelampung di bagian depan kabin kapal',
    altEn: 'Detail view of forward captain helm chair and stowed life jackets inside the cabin',
  },
  {
    id: 'hull-rigging',
    src: '/assets/aistudio/WhatsApp_Image_2026-11-06_at_21.39.14_3dea39d5.jpeg',
    objectPosition: '62% 62%',
    zoomScale: 1.5,
    titleId: 'Profil Lambung & Kesiapan Tambat Pulau',
    titleEn: 'Hull Identity & Island Mooring Readiness',
    captionId: 'Desain lambung berhaluan tajam untuk membelah ombak selat Dampier dengan stabil serta buritan rendah untuk akses naik-turun di dermaga pulau.',
    captionEn: 'Deep-V bow entry engineered for Dampier Strait swells with low boarding access for island jetties and shallow beaches.',
    specId: 'Stabil di Perairan Terbuka · Akses Dermaga & Pantai',
    specEn: 'Open-Water Hull Stability · Jetty & Beach Boarding',
    altId: 'Detail tulisan lambung Tiga Putra Raja Ampat dan fender tambat di atas air laut kehijauan',
    altEn: 'Close framing of the Tiga Putra Raja Ampat hull badge and mooring fenders over turquoise water',
  },
];

export const DESTINATION_CHIPS = [
  { id: 'piaynemo', labelId: 'Piaynemo & Telaga Bintang', labelEn: 'Piaynemo & Star Lagoon' },
  { id: 'wayag', labelId: 'Wayag (Utara)', labelEn: 'Wayag (North)' },
  { id: 'kabui', labelId: 'Teluk Kabui & Batu Pensil', labelEn: 'Kabui Bay & Pencil Rock' },
  { id: 'pasir-timbul', labelId: 'Pasir Timbul Mansuar', labelEn: 'Mansuar Sandbar' },
  { id: 'arborek', labelId: 'Desa Wisata Arborek', labelEn: 'Arborek Village' },
  { id: 'sawinggrai', labelId: 'Sawinggrai & Friwen', labelEn: 'Sawinggrai & Friwen' },
  { id: 'kalibiru', labelId: 'Kali Biru Warsambin', labelEn: 'Kali Biru River' },
  { id: 'transfer', labelId: 'Transfer Resort / Waisai', labelEn: 'Resort / Waisai Transfer' },
];

export const COPY = {
  id: {
    nav: {
      fleet: 'Armada',
      gallery: 'Galeri',
      safety: 'Keselamatan',
      customRoute: 'Rute Kustom',
      cta: 'Tanya Rute WA',
    },
    hero: {
      kicker: 'Pangkalan Waisai, Raja Ampat · Charter Privat Eksklusif',
      headline: 'Sewa Speedboat Privat di Waisai untuk Rute Kustom Raja Ampat',
      subheadline:
        'Jelajahi gugusan pulau Raja Ampat dengan armada privat KM Tiga Putra Raja Ampat bermesin ganda Twin Suzuki 150 HP. Tanpa paket rute kaku dan tanpa daftar harga tetap—tentukan sendiri pulau tujuan Anda dan diskusikan estimasi biaya langsung bersama tim kami.',
      primaryCta: 'Susun Rute Kustom',
      secondaryCta: 'Lihat 5 Foto Armada',
      heroCaption: 'KM Tiga Putra Raja Ampat · Berlabuh di perairan Raja Ampat',
    },
    specs: [
      { label: 'Tenaga Penggerak', value: 'Twin Suzuki 150 HP', sub: 'Total 300 HP 4-Tak' },
      { label: 'Kapasitas Tamu', value: 'Maks. 15 Penumpang', sub: '100% Charter Privat' },
      { label: 'Pelabuhan Pangkal', value: 'Waisai, Raja Ampat', sub: 'Papua Barat Daya' },
      { label: 'Skema Perjalanan', value: 'Rute Kustom Penuh', sub: 'Harga Sesuai Rute via WA' },
    ],
    fleet: {
      eyebrow: 'Spesifikasi & Galeri Armada Asli',
      title: 'Satu Kapal Terawat, Lima Sudut Pandang Nyata',
      subtitle:
        'Seluruh foto di bawah ini adalah dokumentasi asli armada KM Tiga Putra Raja Ampat yang beroperasi langsung dari Waisai. Klik foto atau gunakan tombol navigasi untuk memeriksa kabin, kemudi, dan mesin ganda sebelum berangkat.',
      openLightbox: 'Perbesar Foto',
      closeLightbox: 'Tutup',
      prev: 'Sebelumnya',
      next: 'Berikutnya',
      photoCounter: 'Foto',
      of: 'dari',
      specTableTitle: 'Ringkasan Teknis Kapal',
      specRows: [
        ['Nama Kapal', 'KM Tiga Putra Raja Ampat'],
        ['Mesin Utama', '2 × Suzuki DF150 (300 HP Total)'],
        ['Kapasitas Maksimum', '15 Penumpang + Nakhoda & ABK'],
        ['Konfigurasi Kabin', 'Atap Tertutup Permanen · Bangku Samping Empuk'],
        ['Titik Keberangkatan', 'Pelabuhan Waisai / Dermaga Resort Sekitar'],
        ['Model Layanan', 'Sewa Privat Fleksibel (Tanpa Rute Tetap)'],
      ],
    },
    safety: {
      eyebrow: 'Standar Keselamatan Laut',
      title: 'Kesiapan Teknis untuk Perairan Selat Dampier & Kepulauan Raja Ampat',
      subtitle:
        'Perjalanan laut di Raja Ampat menuntut armada yang andal menghadapi perubahan arus dan gelombang. Setiap pelayaran mengutamakan redundansi mesin, perlengkapan keselamatan lengkap, dan pengalaman kru lokal Waisai.',
      items: [
        {
          num: '01',
          title: 'Redundansi Mesin Ganda Twin Suzuki 150 HP',
          desc: 'Dua unit mesin tempel 4-tak independen memberi cadangan daya dan keandalan jelajah jarak jauh (seperti Wayag atau Piaynemo), lengkap dengan sistem kemudi hidraulis dan filter pemisah air pada bahan bakar.',
          metric: '2 × 150 HP Independen',
        },
        {
          num: '02',
          title: 'Jaket Pelampung & Perlengkapan Darurat',
          desc: 'Tersedia lebih dari 15 life jacket berstandar laut yang tersimpan kering dan mudah diakses di dalam kabin, dilengkapi pelampung lempar (lifebuoy), kotak P3K, dan alat pemadam api ringan.',
          metric: '15+ Life Jacket Aktif',
        },
        {
          num: '03',
          title: 'Navigasi Maritim & Pemantauan Cuaca Lokal',
          desc: 'Dilengkapi perangkat navigasi GPS laut, komunikasi radio maritim, serta evaluasi tinggi gelombang dan pasang surut secara berkala oleh nakhoda berlisensi asal Waisai.',
          metric: 'Nakhoda Berpengalaman Waisai',
        },
        {
          num: '04',
          title: 'Kabin Tertutup & Akses Naik-Turun Aman',
          desc: 'Atap hardtop melindungi penumpang dari terik matahari khatulistiwa maupun hujan mendadak, dipadukan lantai dek antiselip dan fender tambat di sisi kiri-kanan lambung.',
          metric: 'Perlindungan Cuaca Penuh',
        },
      ],
    },
    form: {
      eyebrow: 'Formulir Request Rute Kustom',
      title: 'Rancang Rute Anda Sendiri & Tanya Harga Langsung via WhatsApp',
      subtitle:
        'Kami tidak menerapkan rute wajib atau tarif paket tetap. Biaya sewa dihitung transparan berdasarkan jarak tempuh pulau, kebutuhan bahan bakar, durasi hari, dan titik penjemputan Anda.',
      noFixedNoteTitle: 'Mengapa Tanpa Harga Tetap?',
      noFixedNoteDesc:
        'Setiap tamu memiliki rencana berbeda—mulai dari transfer antar-pulau singkat di sekitar Waisai hingga ekspedisi seharian ke Wayag atau Piaynemo. Dengan mengirim draf rute Anda, tim kami langsung menghitung penawaran harga paling sesuai melalui WhatsApp.',
      fields: {
        name: 'Nama Lengkap / Nama Rombongan',
        namePlaceholder: 'Contoh: Budi Santoso',
        date: 'Rencana Tanggal Keberangkatan',
        tripType: 'Jenis Perjalanan',
        tripOptions: [
          { value: 'day-trip', label: 'Charter Sehari Penuh (Day Trip)' },
          { value: 'multi-day', label: 'Charter Beberapa Hari (Multi-Day)' },
          { value: 'transfer', label: 'Transfer Dermaga / Antar-Resort' },
        ],
        passengers: 'Jumlah Penumpang (Maks. 15)',
        paxUnit: 'Orang',
        pickup: 'Titik Penjemputan Awal',
        pickupPlaceholder: 'Contoh: Pelabuhan Waisai / Dermaga Resort Mansuar',
        chipsLabel: 'Inspirasi Titik Singgah (Opsional — klik untuk tambah ke rute)',
        customRoute: 'Detail Rute Kustom & Daftar Pulau Tujuan',
        customRoutePlaceholder:
          'Tuliskan pulau, spot snorkeling/diving, jam keberangkatan yang diinginkan, atau rute kustom Anda sendiri...',
        notes: 'Catatan Tambahan (Opsional)',
        notesPlaceholder: 'Contoh: butuh coolbox es, bawa koper besar, atau rencana pulang sore ke Waisai',
      },
      previewTitle: 'Pratinjau Pesan WhatsApp Otomatis',
      copyBtn: 'Salin Teks Pesan',
      copiedBtn: 'Tersalin',
      sendPrompt: 'Pilih kontak WhatsApp resmi kami untuk mengirim pesan ini dan menanyakan ketersediaan & harga:',
      validationError: 'Mohon isi Nama Lengkap dan Detail Rute Kustom Anda terlebih dahulu agar pesan lebih akurat.',
      waActionPrefix: 'Kirim ke',
      waReadyHint: 'Klik salah satu kontak di atas untuk membuka WhatsApp dengan pesan rute Anda terisi otomatis.',
    },
    footer: {
      tagline: 'Layanan charter speedboat privat berbasis di Waisai, Raja Ampat, Papua Barat Daya.',
      baseTitle: 'Pangkalan Operasional',
      baseAddress: 'Pelabuhan Waisai, Kabupaten Raja Ampat, Papua Barat Daya',
      navTitle: 'Navigasi',
      contactTitle: 'Kontak WhatsApp Resmi',
      rights: 'rajaampatspeedboat.com · Armada KM Tiga Putra Raja Ampat',
    },
  },
  en: {
    nav: {
      fleet: 'Fleet',
      gallery: 'Gallery',
      safety: 'Safety',
      customRoute: 'Custom Route',
      cta: 'Ask via WhatsApp',
    },
    hero: {
      kicker: 'Waisai Base Port, Raja Ampat · Exclusive Private Charter',
      headline: 'Private Speedboat Charter in Waisai for Custom Raja Ampat Routes',
      subheadline:
        'Explore the islands of Raja Ampat aboard KM Tiga Putra Raja Ampat, powered by Twin Suzuki 150 HP engines for up to 15 guests. No fixed itineraries and no rigid price list—build your custom route and inquire directly via WhatsApp.',
      primaryCta: 'Plan Custom Route',
      secondaryCta: 'View 5 Fleet Photos',
      heroCaption: 'KM Tiga Putra Raja Ampat · Anchored in Raja Ampat turquoise shallows',
    },
    specs: [
      { label: 'Propulsion', value: 'Twin Suzuki 150 HP', sub: '300 HP Combined 4-Stroke' },
      { label: 'Guest Capacity', value: 'Max. 15 Passengers', sub: '100% Private Charter' },
      { label: 'Home Port', value: 'Waisai, Raja Ampat', sub: 'Southwest Papua, Indonesia' },
      { label: 'Charter Model', value: 'Custom Routes Only', sub: 'Direct Quote via WhatsApp' },
    ],
    fleet: {
      eyebrow: 'Authentic Vessel & Specifications',
      title: 'One Maintained Vessel, Five Real Perspectives',
      subtitle:
        'Every photograph below shows the actual KM Tiga Putra Raja Ampat vessel operating out of Waisai. Browse the gallery or open fullscreen view to inspect the hull, enclosed cabin, helm, and twin Suzuki 150 HP rigging.',
      openLightbox: 'Expand Photo',
      closeLightbox: 'Close',
      prev: 'Previous',
      next: 'Next',
      photoCounter: 'Photo',
      of: 'of',
      specTableTitle: 'Vessel Technical Profile',
      specRows: [
        ['Vessel Name', 'KM Tiga Putra Raja Ampat'],
        ['Main Engines', '2 × Suzuki DF150 (300 HP Combined)'],
        ['Max Capacity', '15 Passengers + Captain & Crew'],
        ['Cabin Layout', 'Enclosed Hardtop Roof · Padded Bench Seating'],
        ['Departure Base', 'Waisai Harbour / Nearby Resort Jetties'],
        ['Charter Format', '100% Bespoke Private Route (No Fixed Rates)'],
      ],
    },
    safety: {
      eyebrow: 'Marine Safety Standards',
      title: 'Offshore Readiness Across Dampier Strait & Raja Ampat Archipelagos',
      subtitle:
        'Navigating open crossings in Raja Ampat demands dependable propulsion and local seamanship. Every charter prioritizes twin-engine redundancy, certified life-saving gear, and experienced Waisai crew.',
      items: [
        {
          num: '01',
          title: 'Twin Suzuki 150 HP Propulsion Redundancy',
          desc: 'Two independent 4-stroke marine outboards provide reliable power and backup safety for long-range runs such as Wayag or Piaynemo, paired with hydraulic tie-bar steering and dual fuel-water separators.',
          metric: '2 × 150 HP Independent',
        },
        {
          num: '02',
          title: 'Life Jackets & Onboard Emergency Gear',
          desc: 'Over 15 marine-grade life jackets stored dry in forward cabin compartments within immediate reach, complemented by a throwable lifebuoy, marine first-aid kit, and fire extinguisher.',
          metric: '15+ Life Jackets Ready',
        },
        {
          num: '03',
          title: 'Marine Navigation & Local Tide Assessment',
          desc: 'Equipped with marine GPS navigation, sea-band communication, and continuous swell, current, and reef-clearance assessment led by a licensed local Waisai captain.',
          metric: 'Licensed Waisai Crew',
        },
        {
          num: '04',
          title: 'Sheltered Hardtop Cabin & Safe Boarding',
          desc: 'Full fiberglass canopy shields guests from equatorial sun and sudden rain squalls, paired with non-slip center decking and heavy-duty side fenders for secure jetty and beach landings.',
          metric: 'Full Weather Shelter',
        },
      ],
    },
    form: {
      eyebrow: 'Custom Route Request',
      title: 'Design Your Custom Route & Ask Pricing Directly on WhatsApp',
      subtitle:
        'We do not lock guests into preset tours or fixed package pricing. Charter quotes are tailored transparently based on island distance, fuel consumption, trip duration, and your pickup jetty.',
      noFixedNoteTitle: 'Why No Fixed Price List?',
      noFixedNoteDesc:
        'Every trip is different—from a direct resort transfer near Waisai to a full-day Wayag or Piaynemo expedition. Submit your preferred route below to generate a structured inquiry ready for either official WhatsApp contact.',
      fields: {
        name: 'Full Name / Group Lead',
        namePlaceholder: 'e.g. Elena Vance',
        date: 'Preferred Departure Date',
        tripType: 'Charter Format',
        tripOptions: [
          { value: 'day-trip', label: 'Full-Day Private Charter' },
          { value: 'multi-day', label: 'Multi-Day Custom Expedition' },
          { value: 'transfer', label: 'Point-to-Point Island / Resort Transfer' },
        ],
        passengers: 'Passenger Count (Max. 15)',
        paxUnit: 'Guests',
        pickup: 'Initial Pickup Point',
        pickupPlaceholder: 'e.g. Waisai Harbour / Mansuar Resort Jetty',
        chipsLabel: 'Optional Stop Inspiration (click to add/remove in your route)',
        customRoute: 'Custom Route & Desired Islands',
        customRoutePlaceholder:
          'List the islands, snorkeling/diving sites, departure timing, or custom stops you have in mind...',
        notes: 'Additional Notes (Optional)',
        notesPlaceholder: 'e.g. luggage count, cooler box request, afternoon return to Waisai ferry',
      },
      previewTitle: 'Live Generated WhatsApp Message',
      copyBtn: 'Copy Message',
      copiedBtn: 'Copied',
      sendPrompt: 'Choose either official WhatsApp number below to send your custom route and ask for pricing:',
      validationError: 'Please enter your Full Name and Custom Route details first so our team can quote accurately.',
      waActionPrefix: 'Message',
      waReadyHint: 'Clicking either button opens WhatsApp with your custom route message pre-filled.',
    },
    footer: {
      tagline: 'Private speedboat charter operating from Waisai, Raja Ampat, Southwest Papua.',
      baseTitle: 'Base Port',
      baseAddress: 'Waisai Harbour, Raja Ampat Regency, Southwest Papua, Indonesia',
      navTitle: 'Navigation',
      contactTitle: 'Official WhatsApp Contacts',
      rights: 'rajaampatspeedboat.com · KM Tiga Putra Raja Ampat',
    },
  },
} as const;

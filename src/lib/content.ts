import {
  Scale,
  Gavel,
  Landmark,
  Building2,
  Zap,
  Shield,
  FileWarning,
  TrendingUp,
  Users,
  HardHat,
} from "lucide-react";
import teamAsa from "@/assets/team-asa.jpg";
import teamRidho from "@/assets/team-ridho.jpg";

export type Lang = "id" | "en";

/** Text segment; `gold` renders it with the gold gradient accent. */
export type Seg = { text: string; gold?: boolean; italic?: boolean };

export const contact = {
  phoneDisplay: "0816-1668-123",
  phoneHref: "tel:+628161668123",
  whatsapp: "628161668123",
  email: "ravlawfirmoffice@gmail.com",
  address: [
    "Jl. KH. Abdullah Safei No 12.A RT.013/005",
    "Kel. Bukit Duri, Kec. Tebet, Jakarta Selatan 12840",
  ],
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Jl. KH. Abdullah Safei No 12A, Bukit Duri, Tebet, Jakarta Selatan 12840"),
};

export const clients = [
  "PAJAKIND",
  "PT SOLUSI ANAK NEGERI",
  "PT CAKRAWALA ENERGI TAMBANG",
  "PT HUTAMA MUDA INVESTAMA",
  "SINOHYDRO CORPORATION LTD",
  "PT TASPEN (PERSERO)",
  "FOSTER OIL & GAS LTD",
  "OXFAM GB",
];

const practiceIcons = [
  Scale,
  Shield,
  Landmark,
  Building2,
  Zap,
  Gavel,
  FileWarning,
  TrendingUp,
  Users,
  HardHat,
];

const teamBase = [
  { name: "Asa Azumah Alba, S.H., M.Kn.", role: "Managing Partner / Founder", photo: teamAsa },
  { name: "Muhammad Ridho, S.H., M.H.", role: "Partner / Founder", photo: teamRidho },
  { name: "G.D.M.V., S.H., M.H.", role: "Partner / Founder", photo: undefined },
];

const id = {
  metaTitle: "RAV Lawfirm — Integritas, Advokasi, Supremasi Hukum",
  nav: ["Beranda", "Tentang", "Bidang Praktik", "Tim Kami", "Klien", "Kontak"],
  cta: "Konsultasi",
  menu: "Buka menu",
  closeMenu: "Tutup menu",
  langLabel: "Pilih bahasa",
  hero: {
    title: [
      { text: "Dimana " },
      { text: "Integritas", gold: true, italic: true },
      { text: " Bertemu dengan Advokasi untuk " },
      { text: "Supremasi Hukum", gold: true, italic: true },
      { text: "." },
    ] as Seg[],
    lead: "Memberikan layanan hukum komprehensif yang disesuaikan dengan kebutuhan institusi pemerintah, korporasi, dan individu.",
    primary: "Konsultasi Sekarang",
    secondary: "Pelajari Lebih Lanjut",
  },
  about: {
    eyebrow: "Tentang Kami",
    title: [
      { text: "Firma Hukum Multi-Bidang " },
      { text: "berbasis di Jakarta", gold: true },
    ] as Seg[],
    photoAlt: "Para pendiri RAV Lawfirm",
    body: [
      { text: "RAV Law Firm didirikan oleh " },
      { text: "Muhammad Ridho" },
      { text: ", " },
      { text: "Asa Azumah Alba" },
      { text: ", dan " },
      { text: "G.D.M.V." },
      {
        text: " sebagai firma hukum multi-bidang yang berkantor pusat di Jakarta, Indonesia. Kami bekerja secara efisien dengan tim multi-spesialis untuk mengatasi masalah hukum dan peraturan yang kompleks.",
      },
    ] as Seg[],
    vision: "Visi",
    visionText:
      "Menegakkan Supremasi Hukum dengan Integritas dan Keunggulan, mewujudkan sistem hukum yang adil dan berkeadilan untuk Indonesia yang maju.",
    mission: "Misi",
    missionText:
      "Membangun kolaborasi strategis dengan institusi pemerintah, menyediakan solusi hukum inovatif yang mendukung kebijakan publik dan pembangunan nasional.",
  },
  practice: {
    eyebrow: "Bidang Praktik",
    title: [{ text: "Keahlian " }, { text: "Komprehensif", gold: true }] as Seg[],
    lead: "Tim multi-spesialis dengan pengalaman lintas industri.",
    areas: [
      "Arbitrase & Penyelesaian Sengketa Alternatif",
      "Hukum Kekayaan Intelektual",
      "Perbankan",
      "Korporasi, Mergers & Acquisitions",
      "Energi & Energi Terbarukan",
      "Litigasi Perdata dan Pidana",
      "Kepailitan & Restrukturisasi Utang",
      "Pasar Modal",
      "Hukum Perburuhan & Relasi Industrial",
      "Pembiayaan Proyek & Infrastruktur",
    ],
  },
  team: {
    eyebrow: "Tim Kami",
    title: [{ text: "Para " }, { text: "Pendiri", gold: true }] as Seg[],
    bios: [
      "Berpraktik sebagai advokat yang mengkhususkan diri dalam kepailitan, restrukturisasi, litigasi bisnis, dan hukum pertambangan. Memegang lisensi sebagai Kurator & Pengurus.",
      "Berpengalaman menangani sengketa Perdata, Pidana, Perizinan Tambang, Kekayaan Intelektual (Merek, Paten, Hak Cipta), dan Hukum Bisnis untuk klien lokal maupun mancanegara.",
      "Spesialisasi Hukum Bisnis, penyelesaian sengketa alternatif (asuransi, migas, perbankan, pertambangan). Auditor hukum bersertifikat BNSP & Advokat PERADI.",
    ],
  },
  clients: {
    eyebrow: "Klien Kami",
    title: [{ text: "Dipercaya oleh " }, { text: "institusi terkemuka", gold: true }] as Seg[],
  },
  contact: {
    eyebrow: "Kontak Kami",
    title: [
      { text: "Diskusikan " },
      { text: "kebutuhan hukum", gold: true },
      { text: " Anda bersama kami." },
    ] as Seg[],
    address: "Alamat",
    openMaps: "Buka di Google Maps",
    phone: "Telepon / WhatsApp",
    email: "Email",
    name: "Nama",
    message: "Pesan",
    send: "Kirim via WhatsApp",
    hint: "Pesan Anda akan dibuka di WhatsApp, siap dikirim ke kantor kami.",
    sent: "WhatsApp telah dibuka — tekan kirim di sana untuk menyampaikan pesan Anda.",
    waGreeting: (name: string, email: string) => `Halo RAV Lawfirm, saya ${name} (${email}).`,
  },
  whatsappFab: "Hubungi kami via WhatsApp",
  footer: {
    tagline: '"Dimana Integritas Bertemu dengan Advokasi untuk Supremasi Hukum."',
    rights: "Hak cipta dilindungi.",
  },
};

const en: typeof id = {
  metaTitle: "RAV Lawfirm — Integrity, Advocacy, Rule of Law",
  nav: ["Home", "About", "Practice Areas", "Our Team", "Clients", "Contact"],
  cta: "Consultation",
  menu: "Open menu",
  closeMenu: "Close menu",
  langLabel: "Choose language",
  hero: {
    title: [
      { text: "Where " },
      { text: "Integrity", gold: true, italic: true },
      { text: " Meets Advocacy for the " },
      { text: "Rule of Law", gold: true, italic: true },
      { text: "." },
    ],
    lead: "Comprehensive legal services tailored to the needs of government institutions, corporations, and individuals.",
    primary: "Book a Consultation",
    secondary: "Learn More",
  },
  about: {
    eyebrow: "About Us",
    title: [{ text: "A Multi-Practice Law Firm " }, { text: "based in Jakarta", gold: true }],
    photoAlt: "The founders of RAV Lawfirm",
    body: [
      { text: "RAV Law Firm was founded by " },
      { text: "Muhammad Ridho" },
      { text: ", " },
      { text: "Asa Azumah Alba" },
      { text: ", and " },
      { text: "G.D.M.V." },
      {
        text: " as a multi-practice law firm headquartered in Jakarta, Indonesia. We work efficiently with a multi-specialist team to resolve complex legal and regulatory matters.",
      },
    ],
    vision: "Vision",
    visionText:
      "To uphold the Rule of Law with Integrity and Excellence, building a fair and just legal system for a progressive Indonesia.",
    mission: "Mission",
    missionText:
      "To build strategic collaboration with government institutions and deliver innovative legal solutions that support public policy and national development.",
  },
  practice: {
    eyebrow: "Practice Areas",
    title: [{ text: "Comprehensive " }, { text: "Expertise", gold: true }],
    lead: "A multi-specialist team with cross-industry experience.",
    areas: [
      "Arbitration & Alternative Dispute Resolution",
      "Intellectual Property Law",
      "Banking",
      "Corporate, Mergers & Acquisitions",
      "Energy & Renewable Energy",
      "Civil and Criminal Litigation",
      "Bankruptcy & Debt Restructuring",
      "Capital Markets",
      "Labour & Industrial Relations Law",
      "Project & Infrastructure Finance",
    ],
  },
  team: {
    eyebrow: "Our Team",
    title: [{ text: "The " }, { text: "Founders", gold: true }],
    bios: [
      "Practises as an advocate specialising in bankruptcy, restructuring, business litigation, and mining law. Licensed as a Receiver & Administrator.",
      "Experienced in civil and criminal disputes, mining permits, intellectual property (trademarks, patents, copyright), and business law for local and international clients.",
      "Specialises in business law and alternative dispute resolution (insurance, oil & gas, banking, mining). BNSP-certified legal auditor & PERADI advocate.",
    ],
  },
  clients: {
    eyebrow: "Our Clients",
    title: [{ text: "Trusted by " }, { text: "leading institutions", gold: true }],
  },
  contact: {
    eyebrow: "Contact Us",
    title: [{ text: "Discuss your " }, { text: "legal needs", gold: true }, { text: " with us." }],
    address: "Address",
    openMaps: "Open in Google Maps",
    phone: "Phone / WhatsApp",
    email: "Email",
    name: "Name",
    message: "Message",
    send: "Send via WhatsApp",
    hint: "Your message will open in WhatsApp, ready to send to our office.",
    sent: "WhatsApp has opened — press send there to deliver your message.",
    waGreeting: (name: string, email: string) => `Hello RAV Lawfirm, I am ${name} (${email}).`,
  },
  whatsappFab: "Contact us on WhatsApp",
  footer: {
    tagline: '"Where Integrity Meets Advocacy for the Rule of Law."',
    rights: "All rights reserved.",
  },
};

export const dict = { id, en };

export const getPracticeAreas = (lang: Lang) =>
  dict[lang].practice.areas.map((title, i) => ({ title, icon: practiceIcons[i] }));

export const getTeam = (lang: Lang) =>
  teamBase.map((m, i) => ({ ...m, bio: dict[lang].team.bios[i] }));

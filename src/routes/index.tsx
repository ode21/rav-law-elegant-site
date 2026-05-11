import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Scale, Gavel, Landmark, Building2, Zap, Shield,
  FileWarning, TrendingUp, Users, HardHat, Mail, Phone, MapPin, Menu, X,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import logo from "@/assets/logo.jpg";
import heroBg from "@/assets/hero-justice.jpg";
import teamGroup from "@/assets/team-group.jpg";
import teamAsa from "@/assets/team-asa.jpg";
import teamRidho from "@/assets/team-ridho.jpg";
import teamVolta from "@/assets/team-volta.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "RAV Lawfirm — Integritas, Advokasi, Supremasi Hukum" },
      {
        name: "description",
        content:
          "RAV Lawfirm — firma hukum multi-bidang di Jakarta. Layanan hukum komprehensif untuk institusi pemerintah, korporasi, dan individu.",
      },
      { property: "og:title", content: "RAV Lawfirm" },
      { property: "og:description", content: "Dimana Integritas Bertemu dengan Advokasi untuk Supremasi Hukum." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
});

const practiceAreas = [
  { icon: Scale, title: "Arbitrase & Penyelesaian Sengketa Alternatif" },
  { icon: Shield, title: "Hukum Kekayaan Intelektual" },
  { icon: Landmark, title: "Perbankan" },
  { icon: Building2, title: "Korporasi, Mergers & Acquisitions" },
  { icon: Zap, title: "Energi & Energi Terbarukan" },
  { icon: Gavel, title: "Litigasi Perdata dan Pidana" },
  { icon: FileWarning, title: "Kepailitan & Restrukturisasi Utang" },
  { icon: TrendingUp, title: "Pasar Modal" },
  { icon: Users, title: "Hukum Perburuhan & Relasi Industrial" },
  { icon: HardHat, title: "Pembiayaan Proyek & Infrastruktur" },
];

const team = [
  {
    name: "Asa Azumah Alba, S.H., M.Kn.",
    role: "Managing Partner / Founder",
    photo: teamAsa,
    bio: "Berpraktik sebagai advokat yang mengkhususkan diri dalam kepailitan, restrukturisasi, litigasi bisnis, dan hukum pertambangan. Memegang lisensi sebagai Kurator & Pengurus.",
  },
  {
    name: "Muhammad Ridho, S.H., M.H.",
    role: "Partner / Founder",
    photo: teamRidho,
    bio: "Berpengalaman menangani sengketa Perdata, Pidana, Perizinan Tambang, Kekayaan Intelektual (Merek, Paten, Hak Cipta), dan Hukum Bisnis untuk klien lokal maupun mancanegara.",
  },
  {
    name: "Gulam Dalula May Volta, S.H., M.H.",
    role: "Partner / Founder",
    photo: teamVolta,
    bio: "Spesialisasi Hukum Bisnis, penyelesaian sengketa alternatif (asuransi, migas, perbankan, pertambangan). Auditor hukum bersertifikat BNSP & Advokat PERADI.",
  },
];

const clients = [
  "PAJAKIND", "PT SOLUSI ANAK NEGERI", "PT CAKRAWALA ENERGI TAMBANG",
  "PT HUTAMA MUDA INVESTAMA", "SINOHYDRO CORPORATION LTD",
  "PT TASPEN (PERSERO)", "FOSTER OIL & GAS LTD", "OXFAM GB",
];

function Index() {
  useReveal();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang", href: "#tentang" },
    { label: "Bidang Praktik", href: "#praktik" },
    { label: "Tim Kami", href: "#tim" },
    { label: "Klien", href: "#klien" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-onyx/85 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
        style={scrolled ? { backgroundColor: "oklch(0.08 0.005 60 / 0.85)" } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#beranda" className="flex items-center gap-3">
            <img src={logo} alt="RAV Lawfirm" className="h-10 w-10 object-contain" />
            <span className="font-serif text-xl tracking-wider">
              RAV <span className="text-gold">LAWFIRM</span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-9 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="gold-underline text-muted-foreground hover:text-foreground transition">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#kontak"
            className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-medium tracking-wide bg-gold text-primary-foreground hover:bg-[var(--gold-soft)] transition"
          >
            Konsultasi
          </a>
          <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-onyx" style={{ backgroundColor: "var(--onyx)" }}>
            <div className="px-6 py-5 flex flex-col gap-4">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-gold">
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
          <div className="max-w-3xl reveal">
            <p className="flex items-center gap-3 text-gold uppercase tracking-[0.4em] text-xs mb-8">
              <span className="h-px w-10 bg-gold" /> RAV Lawfirm — Jakarta
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.05] mb-8">
              Dimana <span className="gradient-gold-text italic">Integritas</span> Bertemu
              <br /> dengan Advokasi untuk <span className="gradient-gold-text italic">Supremasi Hukum</span>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Memberikan layanan hukum komprehensif yang disesuaikan dengan kebutuhan
              institusi pemerintah, korporasi, dan individu.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#kontak"
                className="px-8 py-4 bg-gold text-primary-foreground font-medium tracking-wide hover:bg-[var(--gold-soft)] transition shadow-[var(--shadow-gold)]"
              >
                Konsultasi Sekarang
              </a>
              <a
                href="#tentang"
                className="px-8 py-4 border border-gold text-gold font-medium tracking-wide hover:bg-gold hover:text-primary-foreground transition"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="tentang" className="relative py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal relative">
            <div className="absolute -inset-4 border border-gold/30 -z-10" />
            <img src={teamGroup} alt="Pendiri RAV Lawfirm" className="w-full object-cover shadow-[var(--shadow-elegant)]" loading="lazy" />
          </div>
          <div className="reveal">
            <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">Tentang Kami</p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6 leading-tight">
              Firma Hukum Multi-Bidang <span className="gradient-gold-text">berbasis di Jakarta</span>
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              RAV Law Firm didirikan oleh <span className="text-foreground">Muhammad Ridho</span>,{" "}
              <span className="text-foreground">Asa Azumah Alba</span>, dan{" "}
              <span className="text-foreground">Gulam Dalula May Volta</span> sebagai firma hukum
              multi-bidang yang berkantor pusat di Jakarta, Indonesia. Kami bekerja secara efisien
              dengan tim multi-spesialis untuk mengatasi masalah hukum dan peraturan yang kompleks.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="p-6 bg-card border border-border card-lift">
                <p className="text-gold font-serif text-xl mb-3">Visi</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Menegakkan Supremasi Hukum dengan Integritas dan Keunggulan, mewujudkan sistem
                  hukum yang adil dan berkeadilan untuk Indonesia yang maju.
                </p>
              </div>
              <div className="p-6 bg-card border border-border card-lift">
                <p className="text-gold font-serif text-xl mb-3">Misi</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Membangun kolaborasi strategis dengan institusi pemerintah, menyediakan solusi
                  hukum inovatif yang mendukung kebijakan publik dan pembangunan nasional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE */}
      <section id="praktik" className="relative py-28 lg:py-36" style={{ background: "var(--gradient-dark)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">Bidang Praktik</p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">
              Keahlian <span className="gradient-gold-text">Komprehensif</span>
            </h2>
            <div className="divider-gold mx-auto mb-6" />
            <p className="text-muted-foreground">
              Tim multi-spesialis dengan pengalaman lintas industri.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {practiceAreas.map(({ icon: Icon, title }, i) => (
              <div
                key={title}
                className="reveal group p-7 bg-card border border-border card-lift relative"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="w-12 h-12 mb-5 flex items-center justify-center border border-gold/40 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-base leading-snug">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="tim" className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">Tim Kami</p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">
              Para <span className="gradient-gold-text">Pendiri</span>
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((m, i) => (
              <article
                key={m.name}
                className="reveal group bg-card border border-border card-lift overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 scale-100 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <p className="text-gold uppercase tracking-[0.25em] text-[11px] mb-2">{m.role}</p>
                  <h3 className="font-serif text-xl mb-4">{m.name}</h3>
                  <div className="h-px w-10 bg-gold mb-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="klien" className="py-24 border-y border-border" style={{ backgroundColor: "var(--onyx)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12 text-center reveal">
          <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">Klien Kami</p>
          <h2 className="font-serif text-3xl lg:text-4xl">
            Dipercaya oleh <span className="gradient-gold-text">institusi terkemuka</span>
          </h2>
        </div>
        <div className="overflow-hidden relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[var(--onyx)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[var(--onyx)] to-transparent" />
          <div className="marquee">
            {[...clients, ...clients].map((c, i) => (
              <div
                key={i}
                className="px-10 py-6 mx-3 border border-border whitespace-nowrap font-serif text-lg text-muted-foreground hover:text-gold hover:border-gold transition"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontak" className="py-28 lg:py-36 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div className="reveal">
            <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">Kontak Kami</p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6 leading-tight">
              Diskusikan <span className="gradient-gold-text">kebutuhan hukum</span> Anda bersama kami.
            </h2>
            <div className="divider-gold mb-10" />

            <ul className="space-y-7">
              <li className="flex gap-5">
                <span className="w-12 h-12 shrink-0 flex items-center justify-center border border-gold/40 text-gold">
                  <MapPin size={20} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold mb-1">Alamat</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Jl. KH. Abdullah Safei No 12.A RT.013/005<br />
                    Kel. Bukit Duri, Kec. Tebet, Jakarta Selatan 12840
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="w-12 h-12 shrink-0 flex items-center justify-center border border-gold/40 text-gold">
                  <Phone size={20} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold mb-1">Telepon</p>
                  <a href="tel:+6281616681238" className="text-muted-foreground hover:text-foreground">0816-1668-123</a>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="w-12 h-12 shrink-0 flex items-center justify-center border border-gold/40 text-gold">
                  <Mail size={20} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold mb-1">Email</p>
                  <a href="mailto:ravlawfirmoffice@gmail.com" className="text-muted-foreground hover:text-foreground">
                    ravlawfirmoffice@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <form
            className="reveal bg-card border border-border p-8 lg:p-10 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              (e.target as HTMLFormElement).reset();
              setTimeout(() => setSent(false), 4000);
            }}
          >
            <div>
              <label className="text-xs uppercase tracking-widest text-gold">Nama</label>
              <input required type="text" className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground transition" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-gold">Email</label>
              <input required type="email" className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground transition" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-gold">Pesan</label>
              <textarea required rows={5} className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground resize-none transition" />
            </div>
            <button
              type="submit"
              className="w-full mt-4 px-8 py-4 bg-gold text-primary-foreground font-medium tracking-wide hover:bg-[var(--gold-soft)] transition shadow-[var(--shadow-gold)]"
            >
              {sent ? "Pesan Terkirim — Terima Kasih" : "Kirim Pesan"}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12" style={{ backgroundColor: "var(--onyx)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-9 w-9 object-contain" />
            <span className="font-serif tracking-wider text-sm">
              RAV <span className="text-gold">LAWFIRM</span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground italic font-serif text-center">
            "Dimana Integritas Bertemu dengan Advokasi untuk Supremasi Hukum."
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} RAV Lawfirm. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

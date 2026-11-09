import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Menu, X, UserRound } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import {
  clients,
  contact,
  dict,
  getPracticeAreas,
  getTeam,
  type Lang,
  type Seg,
} from "@/lib/content";
import logo from "@/assets/logo.jpg";
import heroBg from "@/assets/hero-justice.jpg";
import teamGroup from "@/assets/team-group.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: dict.id.metaTitle },
      {
        name: "description",
        content:
          "RAV Lawfirm — firma hukum multi-bidang di Jakarta. Layanan hukum komprehensif untuk institusi pemerintah, korporasi, dan individu.",
      },
      { property: "og:title", content: "RAV Lawfirm" },
      {
        property: "og:description",
        content: "Dimana Integritas Bertemu dengan Advokasi untuk Supremasi Hukum.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
});

const sectionIds = ["beranda", "tentang", "praktik", "tim", "klien", "kontak"];
const LANG_KEY = "rav-lang";

/** Renders a heading/paragraph built from segments; gold ones get the accent gradient. */
function Rich({ segs }: { segs: Seg[] }) {
  return (
    <>
      {segs.map((s, i) =>
        s.gold ? (
          <span key={i} className={`gradient-gold-text${s.italic ? " italic" : ""}`}>
            {s.text}
          </span>
        ) : (
          <span key={i}>{s.text}</span>
        ),
      )}
    </>
  );
}

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.3 11.3 0 0 0 12.05.7C5.79.7.7 5.8.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.3l5.71-1.5a11.33 11.33 0 0 0 5.73 1.46h.01c6.25 0 11.34-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  );
}

function LangToggle({
  lang,
  setLang,
  label,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="flex items-center text-xs tracking-[0.2em]">
      {(["id", "en"] as Lang[]).map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-2 h-3 w-px bg-border" aria-hidden="true" />}
          <button
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`uppercase py-2 transition ${
              lang === l ? "text-gold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}

function Index() {
  useReveal();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);
  const [active, setActive] = useState("beranda");
  const [lang, setLangState] = useState<Lang>("id");
  const t = dict[lang];
  const practiceAreas = getPracticeAreas(lang);
  const team = getTeam(lang);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(LANG_KEY, l);
    } catch {
      /* storage unavailable — language just won't persist */
    }
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === "id" || saved === "en") setLangState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.metaTitle;
  }, [lang, t.metaTitle]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link of the section currently in the middle of the viewport.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const nav = sectionIds.map((id, i) => ({ label: t.nav[i], href: `#${id}`, id }));
  const solidHeader = scrolled || open;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          solidHeader ? "backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
        style={solidHeader ? { backgroundColor: "oklch(0.08 0.005 60 / 0.92)" } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#beranda" className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-10 object-contain" />
            <span className="font-serif text-xl tracking-wider">
              RAV <span className="text-gold">LAWFIRM</span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-9 text-sm" aria-label="Utama">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                aria-current={active === n.id ? "true" : undefined}
                className={`gold-underline transition ${
                  active === n.id
                    ? "text-foreground is-active"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-6">
            <LangToggle lang={lang} setLang={setLang} label={t.langLabel} />
            <a
              href="#kontak"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium tracking-wide bg-gold text-primary-foreground hover:bg-[var(--gold-soft)] transition"
            >
              {t.cta}
            </a>
          </div>
          <button
            type="button"
            className="lg:hidden text-foreground p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? t.closeMenu : t.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div id="mobile-menu" className="lg:hidden border-t border-border">
            <nav className="px-6 py-5 flex flex-col" aria-label="Mobile">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === n.id ? "true" : undefined}
                  className={`py-3 border-b border-border/50 ${
                    active === n.id ? "text-gold" : "text-muted-foreground hover:text-gold"
                  }`}
                >
                  {n.label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-5">
                <LangToggle lang={lang} setLang={setLang} label={t.langLabel} />
                <a
                  href="#kontak"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center px-5 py-2.5 text-sm font-medium tracking-wide bg-gold text-primary-foreground"
                >
                  {t.cta}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
          <img
            src={heroBg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
            <div className="max-w-3xl reveal">
              <p className="flex items-center gap-3 text-gold uppercase tracking-[0.4em] text-xs mb-8">
                <span className="h-px w-10 bg-gold" /> RAV Lawfirm — Jakarta
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.05] mb-8 text-balance">
                <Rich segs={t.hero.title} />
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                {t.hero.lead}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#kontak"
                  className="px-8 py-4 bg-gold text-primary-foreground font-medium tracking-wide hover:bg-[var(--gold-soft)] transition shadow-[var(--shadow-gold)]"
                >
                  {t.hero.primary}
                </a>
                <a
                  href="#tentang"
                  className="px-8 py-4 border border-gold text-gold font-medium tracking-wide hover:bg-gold hover:text-primary-foreground transition"
                >
                  {t.hero.secondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="tentang" className="relative py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal relative max-w-md mx-auto lg:max-w-none w-full">
              <div className="absolute -inset-4 border border-gold/30 -z-10" />
              <img
                src={teamGroup}
                alt={t.about.photoAlt}
                className="w-full aspect-[4/5] object-cover object-top shadow-[var(--shadow-elegant)]"
                loading="lazy"
              />
            </div>
            <div className="reveal">
              <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">
                {t.about.eyebrow}
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6 leading-tight">
                <Rich segs={t.about.title} />
              </h2>
              <div className="divider-gold mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                {/* odd segments are the founders' names */}
                {t.about.body.map((s, i) =>
                  i % 2 === 1 ? (
                    <span key={i} className="text-foreground">
                      {s.text}
                    </span>
                  ) : (
                    <span key={i}>{s.text}</span>
                  ),
                )}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                <div className="p-6 bg-card border border-border card-lift">
                  <h3 className="text-gold font-serif text-xl mb-3">{t.about.vision}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.about.visionText}
                  </p>
                </div>
                <div className="p-6 bg-card border border-border card-lift">
                  <h3 className="text-gold font-serif text-xl mb-3">{t.about.mission}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.about.missionText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICE */}
        <section
          id="praktik"
          className="relative py-28 lg:py-36"
          style={{ background: "var(--gradient-dark)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16 reveal">
              <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">
                {t.practice.eyebrow}
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">
                <Rich segs={t.practice.title} />
              </h2>
              <div className="divider-gold mx-auto mb-6" />
              <p className="text-muted-foreground">{t.practice.lead}</p>
            </div>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {practiceAreas.map(({ icon: Icon, title }, i) => (
                <li
                  key={i}
                  className="reveal group p-7 bg-card border border-border card-lift relative"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <div className="w-12 h-12 mb-5 flex items-center justify-center border border-gold/40 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition">
                    <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-base leading-snug">{title}</h3>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TEAM */}
        <section id="tim" className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16 reveal">
              <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">{t.team.eyebrow}</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">
                <Rich segs={t.team.title} />
              </h2>
              <div className="divider-gold mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-md mx-auto md:max-w-none">
              {team.map((m, i) => (
                <article
                  key={m.name}
                  className="reveal group bg-card border border-border card-lift overflow-hidden"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="aspect-[4/5] overflow-hidden bg-secondary">
                    {m.photo ? (
                      <img
                        src={m.photo}
                        alt={m.name}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 scale-100 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center text-muted-foreground/40"
                        role="img"
                        aria-label={m.name}
                      >
                        <UserRound size={120} strokeWidth={0.75} />
                      </div>
                    )}
                  </div>
                  <div className="p-7">
                    <p className="text-gold uppercase tracking-[0.25em] text-[11px] mb-2">
                      {m.role}
                    </p>
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
        <section
          id="klien"
          className="py-24 border-y border-border"
          style={{ backgroundColor: "var(--onyx)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12 text-center reveal">
            <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">
              {t.clients.eyebrow}
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl">
              <Rich segs={t.clients.title} />
            </h2>
          </div>
          <div className="overflow-hidden relative">
            <div className="marquee-fade pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-[var(--onyx)] to-transparent" />
            <div className="marquee-fade pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-[var(--onyx)] to-transparent" />
            <ul className="marquee">
              {[...clients, ...clients].map((c, i) => (
                <li
                  key={i}
                  aria-hidden={i >= clients.length ? "true" : undefined}
                  className={`px-10 py-6 mx-3 border border-border whitespace-nowrap font-serif text-lg text-muted-foreground hover:text-gold hover:border-gold transition ${
                    i >= clients.length ? "marquee-dup" : ""
                  }`}
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="kontak" className="py-28 lg:py-36 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
            <div className="reveal">
              <p className="text-gold uppercase tracking-[0.35em] text-xs mb-4">
                {t.contact.eyebrow}
              </p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6 leading-tight">
                <Rich segs={t.contact.title} />
              </h2>
              <div className="divider-gold mb-10" />

              <ul className="space-y-7">
                <li className="flex gap-5">
                  <span className="w-12 h-12 shrink-0 flex items-center justify-center border border-gold/40 text-gold">
                    <MapPin size={20} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">
                      {t.contact.address}
                    </p>
                    <address className="not-italic text-muted-foreground leading-relaxed">
                      {contact.address[0]}
                      <br />
                      {contact.address[1]}
                    </address>
                    <a
                      href={contact.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gold-underline inline-block mt-2 text-sm text-gold"
                    >
                      {t.contact.openMaps} →
                    </a>
                  </div>
                </li>
                <li className="flex gap-5">
                  <span className="w-12 h-12 shrink-0 flex items-center justify-center border border-gold/40 text-gold">
                    <Phone size={20} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">
                      {t.contact.phone}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <a
                        href={contact.phoneHref}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {contact.phoneDisplay}
                      </a>
                      <a
                        href={`https://wa.me/${contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-[var(--gold-soft)]"
                      >
                        <WhatsAppIcon size={15} /> WhatsApp
                      </a>
                    </div>
                  </div>
                </li>
                <li className="flex gap-5">
                  <span className="w-12 h-12 shrink-0 flex items-center justify-center border border-gold/40 text-gold">
                    <Mail size={20} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-gold mb-1">
                      {t.contact.email}
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-muted-foreground hover:text-foreground break-all"
                    >
                      {contact.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <form
              className="reveal bg-card border border-border p-8 lg:p-10 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const name = String(data.get("name")).trim();
                const email = String(data.get("email")).trim();
                const message = String(data.get("message")).trim();
                const text = `${t.contact.waGreeting(name, email)}\n\n${message}`;
                window.open(
                  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`,
                  "_blank",
                  "noopener,noreferrer",
                );
                setSent(true);
                form.reset();
              }}
            >
              <div>
                <label htmlFor="cf-name" className="text-xs uppercase tracking-widest text-gold">
                  {t.contact.name}
                </label>
                <input
                  id="cf-name"
                  name="name"
                  required
                  type="text"
                  autoComplete="name"
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground transition"
                />
              </div>
              <div>
                <label htmlFor="cf-email" className="text-xs uppercase tracking-widest text-gold">
                  {t.contact.email}
                </label>
                <input
                  id="cf-email"
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground transition"
                />
              </div>
              <div>
                <label htmlFor="cf-message" className="text-xs uppercase tracking-widest text-gold">
                  {t.contact.message}
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground resize-none transition"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-4 px-8 py-4 inline-flex items-center justify-center gap-3 bg-gold text-primary-foreground font-medium tracking-wide hover:bg-[var(--gold-soft)] transition shadow-[var(--shadow-gold)]"
              >
                <WhatsAppIcon size={18} /> {t.contact.send}
              </button>
              <p
                className="text-xs text-muted-foreground text-center leading-relaxed"
                role="status"
              >
                {sent ? <span className="text-gold">{t.contact.sent}</span> : t.contact.hint}
              </p>
            </form>
          </div>
        </section>
      </main>

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
            {t.footer.tagline}
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} RAV Lawfirm. {t.footer.rights}
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp shortcut */}
      <a
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsappFab}
        title={t.whatsappFab}
        tabIndex={scrolled ? undefined : -1}
        aria-hidden={scrolled ? undefined : true}
        className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 w-14 h-14 flex items-center justify-center bg-gold text-primary-foreground shadow-[var(--shadow-gold)] hover:bg-[var(--gold-soft)] transition-all duration-500 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <WhatsAppIcon size={26} />
      </a>
    </div>
  );
}

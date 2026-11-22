import { useEffect, useState } from 'react';
import { Anchor, ArrowDownRight, Menu, X } from 'lucide-react';
import { CustomRouteForm } from './components/CustomRouteForm';
import { FleetGallery } from './components/FleetGallery';
import { SafetyStandards } from './components/SafetyStandards';
import { COPY, FLEET_PHOTOS, WHATSAPP_CONTACTS, type Lang } from './data/translations';

export default function App() {
  const [lang, setLang] = useState<Lang>('id');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  const t = COPY[lang];
  const heroPhoto = FLEET_PHOTOS[0];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const handleLangChange = (nextLang: Lang) => {
    setLang(nextLang);
  };

  return (
    <div className="min-h-screen bg-[#FAFBFB] text-[#0C1B2A]">
      {/* Top Navigation Bar — Strict 3-Zone Contract */}
      <header className="sticky top-0 z-40 border-b border-[#E2E8EE] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-6 lg:px-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#top"
            className="font-display text-base font-bold tracking-tight text-[#0C1B2A] whitespace-nowrap shrink-0 sm:text-lg"
          >
            rajaampatspeedboat.com
          </a>

          {/* Zone 2: 4 Single-line Nav Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-7 text-sm font-medium text-[#475569] md:flex"
          >
            <a
              href="#fleet"
              className="transition-colors hover:text-[#0C1B2A] whitespace-nowrap shrink-0"
            >
              {t.nav.fleet}
            </a>
            <a
              href="#gallery"
              className="transition-colors hover:text-[#0C1B2A] whitespace-nowrap shrink-0"
            >
              {t.nav.gallery}
            </a>
            <a
              href="#safety"
              className="transition-colors hover:text-[#0C1B2A] whitespace-nowrap shrink-0"
            >
              {t.nav.safety}
            </a>
            <a
              href="#custom-route"
              className="transition-colors hover:text-[#0C1B2A] whitespace-nowrap shrink-0"
            >
              {t.nav.customRoute}
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#custom-route"
              className="hidden rounded-lg bg-[#C82820] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#A61E17] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C82820] whitespace-nowrap shrink-0 sm:inline-flex"
            >
              {t.nav.cta}
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E8EE] text-[#0C1B2A] md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-[#E2E8EE] bg-white px-6 py-4 md:hidden">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-[#0C1B2A]">
              <a
                href="#fleet"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5"
              >
                {t.nav.fleet}
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5"
              >
                {t.nav.gallery}
              </a>
              <a
                href="#safety"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5"
              >
                {t.nav.safety}
              </a>
              <a
                href="#custom-route"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5"
              >
                {t.nav.customRoute}
              </a>
              <a
                href="#custom-route"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-lg bg-[#C82820] px-4 py-2.5 text-xs font-semibold text-white"
              >
                {t.nav.cta}
              </a>
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="bg-[#FAFBFB] pb-16 pt-10 lg:pb-24 lg:pt-14">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            {/* Hero Toolbar: Unboxed Location Kicker + Segmented ID / EN Switch */}
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#E2E8EE] pb-5">
              <p className="text-xs font-medium text-[#475569] sm:text-sm">{t.hero.kicker}</p>

              <div
                role="group"
                aria-label="Language switcher"
                className="inline-flex items-center rounded-lg border border-[#E2E8EE] bg-[#F1F5F7] p-1"
              >
                <button
                  type="button"
                  onClick={() => handleLangChange('id')}
                  aria-pressed={lang === 'id'}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    lang === 'id'
                      ? 'bg-white text-[#0C1B2A] shadow-xs'
                      : 'text-[#475569] hover:text-[#0C1B2A]'
                  }`}
                >
                  ID · Indonesia
                </button>
                <button
                  type="button"
                  onClick={() => handleLangChange('en')}
                  aria-pressed={lang === 'en'}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    lang === 'en'
                      ? 'bg-white text-[#0C1B2A] shadow-xs'
                      : 'text-[#475569] hover:text-[#0C1B2A]'
                  }`}
                >
                  EN · English
                </button>
              </div>
            </div>

            {/* 2-Column Hero Split */}
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
              <div className="flex flex-col justify-center lg:col-span-6">
                <h1 className="text-balance font-bold tracking-tight text-[#0C1B2A] text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.12]">
                  {t.hero.headline}
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[#475569] sm:text-lg">
                  {t.hero.subheadline}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <a
                    href="#custom-route"
                    className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#C82820] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#A61E17] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C82820] whitespace-nowrap shrink-0"
                  >
                    <span>{t.hero.primaryCta}</span>
                    <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                  </a>

                  <a
                    href="#gallery"
                    className="inline-flex h-12 items-center text-sm font-semibold text-[#0C1B2A] underline decoration-[#CBD5E1] underline-offset-4 transition-colors hover:decoration-[#0C1B2A] whitespace-nowrap shrink-0"
                  >
                    {t.hero.secondaryCta}
                  </a>
                </div>
              </div>

              {/* Dominant Focal Visual Carrier */}
              <div className="lg:col-span-6">
                <figure className="relative h-full min-h-[340px] overflow-hidden rounded-xl border border-[#E2E8EE] bg-[#0C1B2A] sm:min-h-[420px]">
                  {heroImgFailed ? (
                    <div className="flex h-full min-h-[340px] flex-col items-center justify-center p-8 text-center text-white">
                      <Anchor className="mb-3 h-10 w-10 text-white/60" aria-hidden="true" />
                      <p className="text-sm font-medium">{t.hero.heroCaption}</p>
                    </div>
                  ) : (
                    <img
                      src={heroPhoto.src}
                      alt={lang === 'id' ? heroPhoto.altId : heroPhoto.altEn}
                      referrerPolicy="no-referrer"
                      onError={() => setHeroImgFailed(true)}
                      className="h-full w-full object-cover object-[50%_58%] lg:absolute lg:inset-0"
                    />
                  )}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 via-black/30 to-transparent"
                    aria-hidden="true"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 px-5 py-4 text-xs font-medium text-white/90 sm:text-sm">
                    {t.hero.heroCaption}
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Full-Width 4-Column Vessel Spec Strip */}
            <div className="mt-12 grid grid-cols-1 divide-y divide-[#E2E8EE] overflow-hidden rounded-xl border border-[#E2E8EE] bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              {t.specs.map((spec) => (
                <div key={spec.label} className="p-5 sm:p-6">
                  <p className="text-xs font-medium text-[#64748B]">{spec.label}</p>
                  <p className="mt-1.5 font-display text-lg font-bold tracking-tight text-[#0C1B2A] tabular-nums">
                    {spec.value}
                  </p>
                  <p className="mt-1 text-xs text-[#475569]">{spec.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive 5-Photo Fleet Gallery */}
        <FleetGallery lang={lang} />

        {/* Marine Safety Standards */}
        <SafetyStandards lang={lang} />

        {/* Custom Route Request Form + Dual WhatsApp Integration */}
        <CustomRouteForm lang={lang} />
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-[#E2E8EE] bg-white py-14 text-[#475569]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="font-display text-lg font-bold tracking-tight text-[#0C1B2A]">
                rajaampatspeedboat.com
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed">{t.footer.tagline}</p>

              <div className="mt-5">
                <p className="text-xs font-semibold text-[#0C1B2A]">{t.footer.baseTitle}</p>
                <p className="mt-1 text-sm">{t.footer.baseAddress}</p>
              </div>
            </div>

            <div className="md:col-span-3">
              <p className="text-xs font-semibold text-[#0C1B2A]">{t.footer.navTitle}</p>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li>
                  <a href="#fleet" className="hover:text-[#0C1B2A]">
                    {t.nav.fleet}
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-[#0C1B2A]">
                    {t.nav.gallery}
                  </a>
                </li>
                <li>
                  <a href="#safety" className="hover:text-[#0C1B2A]">
                    {t.nav.safety}
                  </a>
                </li>
                <li>
                  <a href="#custom-route" className="hover:text-[#0C1B2A]">
                    {t.nav.customRoute}
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <p className="text-xs font-semibold text-[#0C1B2A]">{t.footer.contactTitle}</p>
              <ul className="mt-3 space-y-3 text-sm">
                {WHATSAPP_CONTACTS.map((contact) => (
                  <li key={contact.id}>
                    <a
                      href={`https://wa.me/${contact.waNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-col hover:text-[#0C1B2A]"
                    >
                      <span className="font-mono font-semibold text-[#0C1B2A] tabular-nums">
                        {contact.displayNumber}
                      </span>
                      <span className="text-xs text-[#64748B]">
                        {lang === 'id' ? contact.roleId : contact.roleEn}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#E2E8EE] pt-6 text-xs text-[#64748B] sm:flex-row sm:items-center">
            <p>{t.footer.rights}</p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleLangChange('id')}
                className={`font-medium ${lang === 'id' ? 'text-[#0C1B2A] underline underline-offset-4' : 'hover:text-[#0C1B2A]'}`}
              >
                Bahasa Indonesia
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => handleLangChange('en')}
                className={`font-medium ${lang === 'en' ? 'text-[#0C1B2A] underline underline-offset-4' : 'hover:text-[#0C1B2A]'}`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

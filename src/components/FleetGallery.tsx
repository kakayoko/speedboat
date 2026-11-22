import { useEffect, useState } from 'react';
import { Anchor, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { COPY, FLEET_PHOTOS, type Lang } from '../data/translations';

interface FleetGalleryProps {
  lang: Lang;
}

export function FleetGallery({ lang }: FleetGalleryProps) {
  const t = COPY[lang].fleet;
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const activePhoto = FLEET_PHOTOS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? FLEET_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === FLEET_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxOpen]);

  const markFailed = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const renderFallback = (title: string) => (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#0C1B2A] to-[#16324A] p-8 text-center text-white">
      <Anchor className="mb-3 h-10 w-10 text-white/60" aria-hidden="true" />
      <p className="text-sm font-medium text-white/90">{title}</p>
    </div>
  );

  return (
    <section id="gallery" className="border-t border-[#E2E8EE] bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium text-[#C82820]">{t.eyebrow}</p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[#0C1B2A] sm:text-4xl">
              {t.title}
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[#475569]">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Primary Interactive Photo Stage */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-xl border border-[#E2E8EE] bg-[#0C1B2A]">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0C1B2A] sm:aspect-[16/10]">
                {failedImages[activePhoto.id] ? (
                  renderFallback(lang === 'id' ? activePhoto.titleId : activePhoto.titleEn)
                ) : (
                  <img
                    src={activePhoto.src}
                    alt={lang === 'id' ? activePhoto.altId : activePhoto.altEn}
                    referrerPolicy="no-referrer"
                    onError={() => markFailed(activePhoto.id)}
                    style={{
                      objectPosition: activePhoto.objectPosition,
                      transform: activePhoto.zoomScale ? `scale(${activePhoto.zoomScale})` : undefined,
                    }}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out"
                  />
                )}

                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/75 via-black/30 to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-white/80 tabular-nums">
                      {t.photoCounter} 0{activeIndex + 1} {t.of} 0{FLEET_PHOTOS.length} ·{' '}
                      {lang === 'id' ? activePhoto.specId : activePhoto.specEn}
                    </p>
                    <h3 className="mt-1 truncate text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {lang === 'id' ? activePhoto.titleId : activePhoto.titleEn}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    aria-label={t.openLightbox}
                    className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg border border-white/25 bg-black/50 px-3.5 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap"
                  >
                    <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{t.openLightbox}</span>
                  </button>
                </div>

                {/* Prev / Next Stage Controls */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label={t.prev}
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg border border-white/20 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label={t.next}
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg border border-white/20 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              {/* Caption Strip */}
              <div className="border-t border-white/10 bg-[#0C1B2A] px-5 py-4 text-sm leading-relaxed text-[#CBD5E1]">
                {lang === 'id' ? activePhoto.captionId : activePhoto.captionEn}
              </div>
            </div>

            {/* 5-Photo Interactive Thumbnail Rail */}
            <div className="mt-4 grid grid-cols-5 gap-3" role="tablist" aria-label={t.eyebrow}>
              {FLEET_PHOTOS.map((photo, index) => {
                const isSelected = index === activeIndex;
                return (
                  <button
                    key={photo.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative aspect-[4/3] overflow-hidden rounded-lg border text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C82820] ${
                      isSelected
                        ? 'border-[#C82820] ring-2 ring-[#C82820]/25'
                        : 'border-[#E2E8EE] opacity-75 hover:opacity-100'
                    }`}
                  >
                    {failedImages[`thumb-${photo.id}`] ? (
                      <div className="flex h-full w-full items-center justify-center bg-[#0C1B2A] text-white/60">
                        <Anchor className="h-4 w-4" aria-hidden="true" />
                      </div>
                    ) : (
                      <img
                        src={photo.src}
                        alt={lang === 'id' ? photo.titleId : photo.titleEn}
                        referrerPolicy="no-referrer"
                        onError={() => markFailed(`thumb-${photo.id}`)}
                        style={{
                          objectPosition: photo.objectPosition,
                          transform: photo.zoomScale ? `scale(${photo.zoomScale})` : undefined,
                        }}
                        className="h-full w-full object-cover"
                      />
                    )}
                    <span className="absolute bottom-1.5 left-1.5 rounded bg-black/70 px-1.5 py-0.5 font-mono text-[11px] font-medium text-white tabular-nums">
                      0{index + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Vessel Specification Table */}
          <aside id="fleet" className="rounded-xl border border-[#E2E8EE] bg-[#FAFBFB] p-6 lg:col-span-4">
            <h3 className="text-lg font-semibold tracking-tight text-[#0C1B2A]">{t.specTableTitle}</h3>
            <p className="mt-1 text-sm text-[#475569]">
              {lang === 'id'
                ? 'Inspeksi menyeluruh sebelum setiap pelayaran.'
                : 'Inspected prior to every private departure.'}
            </p>

            <dl className="mt-6 divide-y divide-[#E2E8EE] border-t border-[#E2E8EE]">
              {t.specRows.map(([label, value]) => (
                <div key={label} className="py-3.5">
                  <dt className="text-xs font-medium text-[#64748B]">{label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-[#0C1B2A] tabular-nums">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={lang === 'id' ? activePhoto.titleId : activePhoto.titleEn}
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-white/15 bg-[#0C1B2A]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 text-white">
              <div className="min-w-0 pr-4">
                <p className="font-mono text-xs text-white/60 tabular-nums">
                  0{activeIndex + 1} / 0{FLEET_PHOTOS.length}
                </p>
                <p className="truncate text-sm font-semibold">
                  {lang === 'id' ? activePhoto.titleId : activePhoto.titleEn}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                aria-label={t.closeLightbox}
                className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-white/20 px-3 text-xs font-medium text-white transition-colors hover:bg-white/10 whitespace-nowrap shrink-0"
              >
                <X className="h-4 w-4" aria-hidden="true" />
                <span>{t.closeLightbox}</span>
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black p-2 sm:p-4">
              {failedImages[activePhoto.id] ? (
                renderFallback(lang === 'id' ? activePhoto.titleId : activePhoto.titleEn)
              ) : (
                <img
                  src={activePhoto.src}
                  alt={lang === 'id' ? activePhoto.altId : activePhoto.altEn}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto max-w-full rounded object-contain"
                />
              )}

              <button
                type="button"
                onClick={handlePrev}
                aria-label={t.prev}
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg border border-white/20 bg-black/65 text-white transition-colors hover:bg-black"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label={t.next}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg border border-white/20 bg-black/65 text-white transition-colors hover:bg-black"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="border-t border-white/10 bg-[#0C1B2A] px-5 py-3.5 text-sm text-[#CBD5E1]">
              {lang === 'id' ? activePhoto.captionId : activePhoto.captionEn}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

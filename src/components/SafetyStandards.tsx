import { COPY, type Lang } from '../data/translations';

interface SafetyStandardsProps {
  lang: Lang;
}

export function SafetyStandards({ lang }: SafetyStandardsProps) {
  const t = COPY[lang].safety;

  return (
    <section id="safety" className="border-t border-[#E2E8EE] bg-[#0C1B2A] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-3 text-sm font-medium text-[#F87171]">{t.eyebrow}</p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.title}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[#CBD5E1] lg:col-span-5">{t.subtitle}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/15 bg-white/15 md:grid-cols-2">
          {t.items.map((item) => (
            <article
              key={item.num}
              className="flex flex-col justify-between bg-[#0C1B2A] p-7 sm:p-9"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
                  <span className="font-mono text-sm font-medium text-[#F87171] tabular-nums">
                    {item.num}.
                  </span>
                  <span className="font-mono text-xs text-[#94A3B8] tabular-nums">
                    {item.metric}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1] sm:text-base">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useMemo, useRef, useState, type MouseEvent } from 'react';
import { Check, Copy, MessageCircle, Minus, Plus } from 'lucide-react';
import { COPY, DESTINATION_CHIPS, WHATSAPP_CONTACTS, type Lang } from '../data/translations';

interface CustomRouteFormProps {
  lang: Lang;
}

export function CustomRouteForm({ lang }: CustomRouteFormProps) {
  const t = COPY[lang].form;

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [tripType, setTripType] = useState<'day-trip' | 'multi-day' | 'transfer'>('day-trip');
  const [passengers, setPassengers] = useState(6);
  const [pickup, setPickup] = useState(lang === 'id' ? 'Pelabuhan Waisai' : 'Waisai Harbour');
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [customRoute, setCustomRoute] = useState('');
  const [notes, setNotes] = useState('');
  const [validationError, setValidationError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lastSentContact, setLastSentContact] = useState<string | null>(null);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const routeInputRef = useRef<HTMLTextAreaElement>(null);

  const toggleChip = (chipId: string) => {
    setSelectedChips((prev) =>
      prev.includes(chipId) ? prev.filter((id) => id !== chipId) : [...prev, chipId]
    );
  };

  const selectedChipLabels = useMemo(() => {
    return selectedChips
      .map((id) => {
        const chip = DESTINATION_CHIPS.find((c) => c.id === id);
        return chip ? (lang === 'id' ? chip.labelId : chip.labelEn) : '';
      })
      .filter(Boolean);
  }, [selectedChips, lang]);

  const combinedRouteText = useMemo(() => {
    const parts: string[] = [];
    if (selectedChipLabels.length > 0) {
      parts.push(selectedChipLabels.join(', '));
    }
    if (customRoute.trim()) {
      parts.push(customRoute.trim());
    }
    return parts.join(' — ');
  }, [selectedChipLabels, customRoute]);

  const tripTypeLabel = useMemo(() => {
    const found = t.fields.tripOptions.find((opt) => opt.value === tripType);
    return found ? found.label : tripType;
  }, [t.fields.tripOptions, tripType]);

  const whatsappMessage = useMemo(() => {
    const guestName = name.trim() || (lang === 'id' ? '(Belum diisi)' : '(Not specified)');
    const departDate = date || (lang === 'id' ? 'Fleksibel / Menyusul' : 'Flexible / To be confirmed');
    const pickupPoint = pickup.trim() || 'Waisai Harbour';
    const routeSummary =
      combinedRouteText ||
      (lang === 'id' ? 'Ingin konsultasi rute kustom Raja Ampat' : 'Would like to discuss a custom Raja Ampat route');
    const extraNotes = notes.trim();

    if (lang === 'id') {
      const lines = [
        'Halo Admin rajaampatspeedboat.com,',
        'Saya ingin menanyakan ketersediaan & estimasi harga sewa speedboat privat KM Tiga Putra Raja Ampat (Twin Suzuki 150 HP).',
        '',
        `• Nama: ${guestName}`,
        `• Rencana Tanggal: ${departDate}`,
        `• Jenis Perjalanan: ${tripTypeLabel}`,
        `• Jumlah Penumpang: ${passengers} orang (maks. 15)`,
        `• Titik Jemput: ${pickupPoint}`,
        `• Request Rute Kustom: ${routeSummary}`,
      ];
      if (extraNotes) {
        lines.push(`• Catatan Tambahan: ${extraNotes}`);
      }
      lines.push('', 'Mohon info estimasi biaya untuk rute tersebut. Terima kasih.');
      return lines.join('\n');
    }

    const lines = [
      'Hello rajaampatspeedboat.com team,',
      'I would like to check availability and request a quote for a private charter aboard KM Tiga Putra Raja Ampat (Twin Suzuki 150 HP).',
      '',
      `• Name: ${guestName}`,
      `• Preferred Date: ${departDate}`,
      `• Charter Format: ${tripTypeLabel}`,
      `• Passengers: ${passengers} guests (max 15)`,
      `• Pickup Point: ${pickupPoint}`,
      `• Custom Route Request: ${routeSummary}`,
    ];
    if (extraNotes) {
      lines.push(`• Additional Notes: ${extraNotes}`);
    }
    lines.push('', 'Could you share the charter rate for this custom route? Thank you.');
    return lines.join('\n');
  }, [name, date, tripTypeLabel, passengers, pickup, combinedRouteText, notes, lang]);

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(whatsappMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard fallback ignored silently if blocked
    }
  };

  const handleWhatsAppClick = (e: MouseEvent<HTMLAnchorElement>, contactNumber: string) => {
    const hasName = name.trim().length > 0;
    const hasRoute = combinedRouteText.length > 0;

    if (!hasName || !hasRoute) {
      e.preventDefault();
      setValidationError(true);
      if (!hasName) {
        nameInputRef.current?.focus();
      } else {
        routeInputRef.current?.focus();
      }
      return;
    }

    setValidationError(false);
    setLastSentContact(contactNumber);
  };

  return (
    <section id="custom-route" className="border-t border-[#E2E8EE] bg-[#FAFBFB] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium text-[#C82820]">{t.eyebrow}</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#0C1B2A] sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#475569]">{t.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Custom Route Builder Form */}
          <div className="rounded-xl border border-[#E2E8EE] bg-white p-6 sm:p-8 lg:col-span-7">
            <div className="mb-6 rounded-lg border border-[#E2E8EE] bg-[#F1F5F7] p-4">
              <p className="text-sm font-semibold text-[#0C1B2A]">{t.noFixedNoteTitle}</p>
              <p className="mt-1 text-sm leading-relaxed text-[#475569]">{t.noFixedNoteDesc}</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()} noValidate>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="guest-name" className="block text-sm font-medium text-[#0C1B2A]">
                    {t.fields.name} <span className="text-[#C82820]">*</span>
                  </label>
                  <input
                    ref={nameInputRef}
                    id="guest-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (validationError) setValidationError(false);
                    }}
                    placeholder={t.fields.namePlaceholder}
                    className={`mt-2 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#0C1B2A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 ${
                      validationError && !name.trim()
                        ? 'border-[#C82820] focus:ring-[#C82820]/25'
                        : 'border-[#CBD5E1] focus:border-[#0C1B2A] focus:ring-[#0C1B2A]/15'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="depart-date" className="block text-sm font-medium text-[#0C1B2A]">
                    {t.fields.date}
                  </label>
                  <input
                    id="depart-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-2 block w-full rounded-lg border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0C1B2A] tabular-nums focus:border-[#0C1B2A] focus:outline-none focus:ring-2 focus:ring-[#0C1B2A]/15"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="trip-type" className="block text-sm font-medium text-[#0C1B2A]">
                    {t.fields.tripType}
                  </label>
                  <select
                    id="trip-type"
                    value={tripType}
                    onChange={(e) => setTripType(e.target.value as 'day-trip' | 'multi-day' | 'transfer')}
                    className="mt-2 block w-full rounded-lg border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0C1B2A] focus:border-[#0C1B2A] focus:outline-none focus:ring-2 focus:ring-[#0C1B2A]/15"
                  >
                    {t.fields.tripOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <span className="block text-sm font-medium text-[#0C1B2A]">{t.fields.passengers}</span>
                  <div className="mt-2 flex h-[42px] items-center justify-between rounded-lg border border-[#CBD5E1] bg-white px-2">
                    <button
                      type="button"
                      onClick={() => setPassengers((p) => Math.max(1, p - 1))}
                      aria-label="Decrease passengers"
                      className="flex h-8 w-8 items-center justify-center rounded-md text-[#0C1B2A] transition-colors hover:bg-[#F1F5F7] disabled:opacity-40"
                      disabled={passengers <= 1}
                    >
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <span className="font-mono text-sm font-semibold text-[#0C1B2A] tabular-nums">
                      {passengers} {t.fields.paxUnit}
                    </span>
                    <button
                      type="button"
                      onClick={() => setPassengers((p) => Math.min(15, p + 1))}
                      aria-label="Increase passengers"
                      className="flex h-8 w-8 items-center justify-center rounded-md text-[#0C1B2A] transition-colors hover:bg-[#F1F5F7] disabled:opacity-40"
                      disabled={passengers >= 15}
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="pickup-point" className="block text-sm font-medium text-[#0C1B2A]">
                  {t.fields.pickup}
                </label>
                <input
                  id="pickup-point"
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder={t.fields.pickupPlaceholder}
                  className="mt-2 block w-full rounded-lg border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0C1B2A] placeholder:text-[#94A3B8] focus:border-[#0C1B2A] focus:outline-none focus:ring-2 focus:ring-[#0C1B2A]/15"
                />
              </div>

              <div>
                <span className="block text-sm font-medium text-[#0C1B2A]">{t.fields.chipsLabel}</span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {DESTINATION_CHIPS.map((chip) => {
                    const active = selectedChips.includes(chip.id);
                    return (
                      <button
                        key={chip.id}
                        type="button"
                        onClick={() => {
                          toggleChip(chip.id);
                          if (validationError) setValidationError(false);
                        }}
                        className={`rounded-lg border px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C82820] ${
                          active
                            ? 'border-[#0C1B2A] bg-[#0C1B2A] text-white'
                            : 'border-[#CBD5E1] bg-white text-[#334155] hover:border-[#0C1B2A] hover:text-[#0C1B2A]'
                        }`}
                      >
                        {active ? '✓ ' : '+ '}
                        {lang === 'id' ? chip.labelId : chip.labelEn}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="custom-route-notes" className="block text-sm font-medium text-[#0C1B2A]">
                  {t.fields.customRoute} <span className="text-[#C82820]">*</span>
                </label>
                <textarea
                  ref={routeInputRef}
                  id="custom-route-notes"
                  rows={3}
                  value={customRoute}
                  onChange={(e) => {
                    setCustomRoute(e.target.value);
                    if (validationError) setValidationError(false);
                  }}
                  placeholder={t.fields.customRoutePlaceholder}
                  className={`mt-2 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#0C1B2A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 ${
                    validationError && !combinedRouteText
                      ? 'border-[#C82820] focus:ring-[#C82820]/25'
                      : 'border-[#CBD5E1] focus:border-[#0C1B2A] focus:ring-[#0C1B2A]/15'
                  }`}
                />
              </div>

              <div>
                <label htmlFor="extra-notes" className="block text-sm font-medium text-[#0C1B2A]">
                  {t.fields.notes}
                </label>
                <input
                  id="extra-notes"
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.fields.notesPlaceholder}
                  className="mt-2 block w-full rounded-lg border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-sm text-[#0C1B2A] placeholder:text-[#94A3B8] focus:border-[#0C1B2A] focus:outline-none focus:ring-2 focus:ring-[#0C1B2A]/15"
                />
              </div>
            </form>
          </div>

          {/* Live WhatsApp Message Generator & Dual Official Contacts */}
          <div className="rounded-xl border border-[#E2E8EE] bg-white p-6 sm:p-8 lg:col-span-5">
            <div className="flex items-center justify-between gap-4 border-b border-[#E2E8EE] pb-4">
              <h3 className="text-base font-semibold tracking-tight text-[#0C1B2A]">
                {t.previewTitle}
              </h3>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#CBD5E1] px-3 text-xs font-medium text-[#0C1B2A] transition-colors hover:bg-[#F1F5F7] whitespace-nowrap shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#0F5E63]" aria-hidden="true" />
                    <span>{t.copiedBtn}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{t.copyBtn}</span>
                  </>
                )}
              </button>
            </div>

            <pre className="mt-4 max-h-72 overflow-y-auto whitespace-pre-wrap rounded-lg border border-[#E2E8EE] bg-[#F8FAFC] p-4 font-mono text-xs leading-relaxed text-[#1E293B]">
              {whatsappMessage}
            </pre>

            {validationError && (
              <div
                role="alert"
                className="mt-4 rounded-lg border border-[#C82820]/30 bg-[#C82820]/10 px-4 py-3 text-xs font-medium text-[#991B1B]"
              >
                {t.validationError}
              </div>
            )}

            {lastSentContact && !validationError && (
              <div
                role="status"
                className="mt-4 rounded-lg border border-[#0F5E63]/30 bg-[#0F5E63]/10 px-4 py-3 text-xs font-medium text-[#0F5E63]"
              >
                {lang === 'id'
                  ? `Pesan siap dikirim ke WhatsApp ${lastSentContact}.`
                  : `Inquiry prepared for WhatsApp ${lastSentContact}.`}
              </div>
            )}

            <p className="mt-6 text-sm font-medium text-[#0C1B2A]">{t.sendPrompt}</p>

            <div className="mt-4 space-y-3">
              {WHATSAPP_CONTACTS.map((contact, idx) => {
                const href = `https://wa.me/${contact.waNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                const isPrimary = idx === 0;
                return (
                  <a
                    key={contact.id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleWhatsAppClick(e, contact.displayNumber)}
                    className={`flex items-center justify-between gap-4 rounded-lg px-4 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      isPrimary
                        ? 'bg-[#C82820] text-white hover:bg-[#A61E17] focus-visible:outline-[#C82820]'
                        : 'border border-[#0C1B2A] bg-[#0C1B2A] text-white hover:bg-[#162C42] focus-visible:outline-[#0C1B2A]'
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="text-xs text-white/80">
                        {contact.label} · {lang === 'id' ? contact.roleId : contact.roleEn}
                      </p>
                      <p className="mt-0.5 font-mono text-sm font-semibold tabular-nums text-white">
                        {t.waActionPrefix} {contact.displayNumber}
                      </p>
                    </div>
                    <MessageCircle className="h-5 w-5 shrink-0 text-white" aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            <p className="mt-4 text-xs leading-relaxed text-[#64748B]">{t.waReadyHint}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { Car, ChevronLeft, ChevronRight, X, ZoomIn, Leaf } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

/**
 * Vues du véhicule. Seules celles avec `src` sont des visuels disponibles ;
 * les autres sont des emplacements balisés en attendant les visuels du client.
 * ⚠️ Les visuels fournis sont des illustrations : ne pas les présenter comme des
 * photographies authentiques, ni affirmer un équipement non confirmé.
 */
type VehicleView = { label: string; src?: string; alt?: string };

const views: VehicleView[] = [
  {
    label: 'Extérieur',
    src: '/images/vehicule/taxi-chatou-skoda-enyaq.webp',
    alt: 'Škoda Enyaq noire 100 % électrique — taxi à Chatou',
  },
  { label: 'Poste de conduite' },
  { label: 'Places arrière' },
  { label: 'Accès aux places arrière' },
  { label: 'Coffre' },
  { label: 'Coffre avec bagages' },
];

/** Visuels réellement disponibles (pour la visionneuse plein écran). */
const gallery = views.filter((v): v is Required<VehicleView> => Boolean(v.src));
const placeholders = views.filter((v) => !v.src);

/** Visuel mis en avant (premier visuel disponible). */
const featured = gallery[0];

export function VehicleShowcase() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;
  const current = openIndex !== null ? gallery[openIndex] : null;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    [],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, prev, next]);

  return (
    <section id="vehicule" className="scroll-mt-24 bg-cream py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Le véhicule"
          title="Un Škoda Enyaq 100 % électrique"
          description="Un véhicule récent et spacieux pour voyager au calme : conduite silencieuse, zéro émission à l’usage et coffre généreux pour vos bagages et transferts aéroport."
        />

        <div className="mt-12 grid gap-4 sm:gap-5 lg:grid-cols-[1.6fr_1fr]">
          {/* Visuel principal */}
          {featured && (
          <Reveal>
            <figure>
              <button
                type="button"
                onClick={() => setOpenIndex(0)}
                className="group relative block aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-lg)] border border-ink-900/8 shadow-card"
                aria-label="Agrandir le visuel du véhicule"
              >
                <Image
                  src={featured.src}
                  alt={featured.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-ink-900/0 transition-colors duration-300 group-hover:bg-ink-900/10" />
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-ink-900/80 px-3 py-1.5 text-xs font-medium text-cream backdrop-blur-sm">
                  <ZoomIn className="h-3.5 w-3.5 text-champagne" aria-hidden strokeWidth={2} />
                  Agrandir
                </span>
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-champagne px-3 py-1.5 text-xs font-semibold text-ink-900">
                  <Leaf className="h-3.5 w-3.5" aria-hidden strokeWidth={2} />
                  100 % électrique
                </span>
              </button>
              <figcaption className="mt-2 text-center text-xs text-ink-800/55">
                Škoda Enyaq — visuel d’illustration.
              </figcaption>
            </figure>
          </Reveal>
          )}

          {/* Emplacements des autres vues (à recevoir) */}
          <Reveal delay={120}>
            <div className="grid h-full grid-cols-2 gap-3 sm:gap-4">
              {placeholders.map((view) => (
                <div
                  key={view.label}
                  className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-[var(--radius)] border border-dashed border-ink-900/15 bg-sand/60 p-3 text-center"
                >
                  <Car className="h-6 w-6 text-champagne-dark" aria-hidden strokeWidth={1.5} />
                  <span className="text-xs font-semibold leading-tight text-ink-900">
                    {view.label}
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-wide text-ink-800/45">
                    Visuel à venir
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Visionneuse plein écran */}
      {current && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-900/92 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Visuel du véhicule en plein écran"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute right-4 top-4 inline-grid h-11 w-11 place-items-center rounded-full border border-white/20 text-cream transition-colors hover:bg-white/10"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Visuel précédent"
                className="absolute left-4 inline-grid h-11 w-11 place-items-center rounded-full border border-white/20 text-cream transition-colors hover:bg-white/10"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Visuel suivant"
                className="absolute right-4 inline-grid h-11 w-11 place-items-center rounded-full border border-white/20 text-cream transition-colors hover:bg-white/10"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </>
          )}

          <figure className="relative max-h-[85vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-lg)]">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-cream/80">
              {current.label} — Škoda Enyaq (visuel d’illustration)
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

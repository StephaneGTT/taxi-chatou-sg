'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn, Leaf } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

/**
 * Galerie du véhicule (Škoda Enyaq).
 * ⚠️ Les visuels sont des illustrations : ne pas les présenter comme des
 * photographies authentiques du véhicule exact, ni affirmer un équipement non confirmé.
 */
type VehicleView = { label: string; src: string; alt: string };

const gallery: VehicleView[] = [
  {
    label: 'Extérieur',
    src: '/images/vehicule/taxi-chatou-skoda-enyaq-exterieur.webp',
    alt: 'Škoda Enyaq noire 100 % électrique au coucher du soleil, taxi à Chatou',
  },
  {
    label: 'Prise en charge',
    src: '/images/vehicule/taxi-chatou-skoda-enyaq-taxi-valise.webp',
    alt: 'Taxi Škoda Enyaq, porte arrière ouverte avec une valise, à Chatou',
  },
  {
    label: 'Accès aux places arrière',
    src: '/images/vehicule/taxi-chatou-skoda-enyaq-acces-arriere.webp',
    alt: 'Accès aux places arrière, portes ouvertes, intérieur cuir beige, Škoda Enyaq',
  },
  {
    label: 'Poste de conduite',
    src: '/images/vehicule/taxi-chatou-skoda-enyaq-poste-conduite.webp',
    alt: 'Poste de conduite connecté du Škoda Enyaq électrique',
  },
  {
    label: 'Places arrière',
    src: '/images/vehicule/taxi-chatou-skoda-enyaq-places-arriere.webp',
    alt: 'Places arrière spacieuses en cuir beige, toit panoramique, Škoda Enyaq',
  },
  {
    label: 'Coffre',
    src: '/images/vehicule/taxi-chatou-skoda-enyaq-coffre.webp',
    alt: 'Coffre spacieux du Škoda Enyaq',
  },
  {
    label: 'Coffre avec bagages',
    src: '/images/vehicule/taxi-chatou-skoda-enyaq-coffre-bagages.webp',
    alt: 'Coffre du Škoda Enyaq chargé de valises et sacs',
  },
];

const featured = gallery[0];
const thumbnails = gallery.slice(1);

export function VehicleShowcase() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    if (openIndex === null) return;
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
  }, [openIndex, close, prev, next]);

  return (
    <section id="vehicule" className="scroll-mt-24 bg-cream py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Le véhicule"
          title="Un Škoda Enyaq 100 % électrique"
          description="Un véhicule récent et spacieux, à l’intérieur cuir beige, pour voyager au calme : conduite silencieuse, zéro émission à l’usage et coffre généreux pour vos bagages et transferts aéroport."
        />

        {/* Visuel principal */}
        {featured && (
          <Reveal>
            <figure className="mt-12">
              <button
                type="button"
                onClick={() => setOpenIndex(0)}
                className="group relative block aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-lg)] border border-ink-900/8 shadow-card"
                aria-label="Agrandir le visuel du véhicule"
              >
                <Image
                  src={featured.src}
                  alt={featured.alt}
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 100vw, 1100px"
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-champagne px-3 py-1.5 text-xs font-semibold text-ink-900">
                  <Leaf className="h-3.5 w-3.5" aria-hidden strokeWidth={2} />
                  100 % électrique
                </span>
                <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-ink-900/80 px-3 py-1.5 text-xs font-medium text-cream backdrop-blur-sm">
                  <ZoomIn className="h-3.5 w-3.5 text-champagne" aria-hidden strokeWidth={2} />
                  Agrandir
                </span>
              </button>
            </figure>
          </Reveal>
        )}

        {/* Miniatures */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {thumbnails.map((view, i) => (
            <Reveal key={view.src} delay={(i % 6) * 60}>
              <button
                type="button"
                onClick={() => setOpenIndex(i + 1)}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[var(--radius)] border border-ink-900/8 shadow-sm"
                aria-label={`Agrandir : ${view.label}`}
              >
                <Image
                  src={view.src}
                  alt={view.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 180px"
                  className="object-cover transition-transform duration-500 ease-premium group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/80 to-transparent px-2.5 pb-2 pt-6 text-left text-[0.7rem] font-medium leading-tight text-cream">
                  {view.label}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Visionneuse plein écran */}
      {current && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-ink-900/95 p-4 sm:p-8"
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

          <figure
            className="relative max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-lg)]">
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            </div>
            <figcaption className="mt-3 text-center text-sm text-cream/80">
              {current.label} · Škoda Enyaq (visuel d’illustration)
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

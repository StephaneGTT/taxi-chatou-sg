import Image from 'next/image';
import { Car } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Breadcrumb, type Crumb } from '@/components/ui/Breadcrumb';
import { ReassuranceBar } from '@/components/home/ReassuranceBar';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
  /** Photo optionnelle affichée à droite du hero (sinon : bannière texte seule). */
  image?: string;
  /** Texte alternatif de la photo (requis si `image` est fournie). */
  imageAlt?: string;
};

/** En-tête des pages internes : bannière marine sobre, filet beige signature. */
export function PageHero({ eyebrow, title, description, crumbs, image, imageAlt }: PageHeroProps) {
  const header = (
    <>
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span className="h-px w-10 shrink-0 bg-champagne" aria-hidden />
          <span className="eyebrow text-champagne">{eyebrow}</span>
        </div>
      )}
      <h1
        className="mt-5 max-w-3xl text-balance font-serif font-semibold leading-[1.05] tracking-[-0.02em]"
        style={{ fontSize: 'clamp(2.1rem, 4vw, 3.4rem)' }}
      >
        {title}
      </h1>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist">{description}</p>
      )}
    </>
  );

  return (
    <>
      <section className="relative overflow-hidden bg-ink-900 pb-16 pt-[120px] text-white sm:pt-[136px]">
        <div
          className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full"
          aria-hidden
          style={{ background: 'radial-gradient(circle, rgba(216,195,165,0.10), transparent 70%)' }}
        />
        <Container className="relative z-10">
          <Breadcrumb items={crumbs} tone="light" className="mb-8" />

          {image ? (
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div>{header}</div>

              {/* Visuel encadré */}
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-[0_40px_90px_-45px_rgba(0,0,0,0.75)] ring-1 ring-champagne/20">
                  <Image
                    src={image}
                    alt={imageAlt ?? ''}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, transparent 58%, rgba(7,21,44,0.5))' }}
                    aria-hidden
                  />
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink-900/70 px-3.5 py-1.5 text-xs font-medium text-cream backdrop-blur-sm">
                    <Car className="h-3.5 w-3.5 text-champagne" aria-hidden />
                    Škoda Enyaq Coupé RS · 100 % électrique
                  </span>
                </div>
                <div
                  aria-hidden
                  className="absolute -bottom-2.5 -left-2.5 hidden h-16 w-16 rounded-bl-[24px] border-b-2 border-l-2 border-champagne/40 sm:block"
                />
              </div>
            </div>
          ) : (
            header
          )}
        </Container>
      </section>
      <ReassuranceBar />
    </>
  );
}

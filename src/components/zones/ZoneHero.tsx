import Image from 'next/image';
import { ArrowRight, Car, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumb, type Crumb } from '@/components/ui/Breadcrumb';
import { siteConfig, hasRealContact } from '@/config/site';

type ZoneHeroProps = {
  city: string;
  title: string;
  crumbs: Crumb[];
  /** Photo du véhicule affichée dans le hero (différente par zone). */
  image: string;
  /** Texte alternatif de la photo. */
  imageAlt: string;
  /** Intro personnalisée (sinon : intro « taxi à {ville} » par défaut). */
  lede?: string;
};

/** Hero d'une page zone : texte à gauche, photo réelle du véhicule encadrée à droite. */
export function ZoneHero({ city, title, crumbs, image, imageAlt, lede }: ZoneHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-900 pt-[112px] text-white sm:pt-[128px]">
      <div
        className="pointer-events-none absolute -right-32 -top-20 h-[30rem] w-[30rem] rounded-full"
        aria-hidden
        style={{ background: 'radial-gradient(circle, rgba(216,195,165,0.10), transparent 70%)' }}
      />
      <Container className="relative pb-16 pt-6 sm:pb-20">
        <Breadcrumb items={crumbs} tone="light" className="mb-8" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Texte */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 shrink-0 bg-champagne" aria-hidden />
              <span className="eyebrow inline-flex items-center gap-1.5 text-champagne">
                <MapPin className="h-3.5 w-3.5" aria-hidden strokeWidth={2} />
                Zone desservie · Ouest parisien
              </span>
            </div>
            <h1
              className="mt-5 text-balance font-serif font-semibold leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.3rem)' }}
            >
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/80">
              {lede ?? (
                <>
                  Besoin d’un taxi à {city} ? Nous assurons vos transferts vers les gares et les
                  aéroports, mais aussi vos déplacements professionnels et vos trajets privés, au
                  départ de {city} et des communes voisines, 24h/24 et 7j/7.
                </>
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#reservation" size="lg">
                Réserver votre trajet
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              {hasRealContact && (
                <Button href={siteConfig.contact.phoneHref} variant="outline" size="lg">
                  <Phone className="h-4 w-4" aria-hidden strokeWidth={1.75} />
                  {siteConfig.contact.phone}
                </Button>
              )}
            </div>
          </div>

          {/* Visuel encadré */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-[0_40px_90px_-45px_rgba(0,0,0,0.75)] ring-1 ring-champagne/20">
              <Image
                src={image}
                alt={imageAlt}
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
      </Container>
    </section>
  );
}

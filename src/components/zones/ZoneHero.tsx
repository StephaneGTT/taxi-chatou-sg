import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumb, type Crumb } from '@/components/ui/Breadcrumb';
import { siteConfig, hasRealContact } from '@/config/site';

type ZoneHeroProps = {
  city: string;
  title: string;
  crumbs: Crumb[];
  /** Intro personnalisée (sinon : intro « taxi à {ville} » par défaut). */
  lede?: string;
};

/** Hero d'une page zone : bannière marine éditoriale, filet signature, requête cible. */
export function ZoneHero({ city, title, crumbs, lede }: ZoneHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-900 pb-16 pt-[120px] text-white sm:pb-20 sm:pt-[136px]">
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full"
        aria-hidden
        style={{ background: 'radial-gradient(circle, rgba(216,195,165,0.10), transparent 70%)' }}
      />
      <Container className="relative z-10">
        <Breadcrumb items={crumbs} tone="light" className="mb-8" />
        <div className="flex items-center gap-3">
          <span className="h-px w-10 shrink-0 bg-champagne" aria-hidden />
          <span className="eyebrow inline-flex items-center gap-1.5 text-champagne">
            <MapPin className="h-3.5 w-3.5" aria-hidden strokeWidth={2} />
            Zone desservie · Ouest parisien
          </span>
        </div>
        <h1
          className="mt-5 max-w-3xl text-balance font-serif font-semibold leading-[1.05] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(2.1rem, 4vw, 3.4rem)' }}
        >
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/80">
          {lede ?? (
            <>
              Besoin d’un taxi à {city} ? Nous assurons vos transferts vers les gares et les
              aéroports, mais aussi vos déplacements professionnels, médicaux et vos trajets privés,
              au départ de {city} et des communes voisines, 24h/24 et 7j/7.
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
      </Container>
    </section>
  );
}

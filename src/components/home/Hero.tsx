import Image from 'next/image';
import { ArrowRight, CalendarCheck, Car, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { googleBusiness } from '@/data/reviews';

export function Hero() {
  const rating = googleBusiness.rating.toFixed(1).replace('.', ',');

  return (
    <section id="accueil" className="relative overflow-hidden bg-ink-900 pt-[88px] text-white">
      {/* Halo beige discret */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(216,195,165,0.10), transparent 70%)' }}
      />

      <Container className="relative pt-10 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Texte */}
          <div className="pb-12 lg:pb-24">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-champagne" aria-hidden />
                <span className="eyebrow text-champagne">Taxi à Chatou · 7j/7</span>
              </div>
              <h1
                className="mt-6 font-serif font-semibold leading-[1.02] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(2.6rem, 6vw, 4.6rem)' }}
              >
                Votre taxi à Chatou,
                <span className="block text-champagne">confort &amp; sérénité.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
                Aéroports, trajets médicaux conventionnés, déplacements professionnels et privés. Un
                service soigné à bord d’un Škoda Enyaq 100 % électrique.
              </p>
            </Reveal>

            {/* Plaque signature : note Google */}
            <Reveal delay={90}>
              <a
                href="#avis"
                aria-label={`Note ${rating} sur 5, ${googleBusiness.reviewCount} avis Google`}
                className="mt-8 inline-flex items-stretch overflow-hidden rounded-[10px] border border-champagne/35 transition-colors hover:border-champagne/60"
              >
                <span className="flex items-center gap-2 bg-champagne px-4 py-2.5 text-ink-900">
                  <Star className="h-4 w-4 fill-ink-900" aria-hidden strokeWidth={0} />
                  <span className="font-semibold">{rating}/5</span>
                </span>
                <span className="flex items-center bg-white/[0.04] px-4 py-2.5 text-sm text-cream/85 backdrop-blur-sm">
                  {googleBusiness.reviewCount} avis Google
                </span>
              </a>
            </Reveal>

            {/* CTA */}
            <Reveal delay={150}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href="/#reservation" size="lg" className="group justify-center">
                  <CalendarCheck className="h-4 w-4" aria-hidden strokeWidth={2} />
                  Réserver mon taxi
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Button>
                <Button href="/#vehicule" variant="outline" size="lg" className="justify-center">
                  <Car className="h-4 w-4" aria-hidden strokeWidth={2} />
                  Découvrir le véhicule
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Véhicule encadré */}
          <Reveal delay={120}>
            <div className="relative">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] shadow-[0_40px_90px_-45px_rgba(0,0,0,0.75)] ring-1 ring-champagne/25">
                <Image
                  src="/images/vehicule/taxi-chatou-skoda-enyaq-exterieur.webp"
                  alt="Taxi Škoda Enyaq 100 % électrique à Chatou"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(7,21,44,0.55))' }}
                  aria-hidden
                />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-[8px] border border-white/15 bg-ink-900/70 px-3 py-1.5 text-xs font-medium text-cream backdrop-blur-sm">
                  <Car className="h-3.5 w-3.5 text-champagne" aria-hidden />
                  Škoda Enyaq · 100 % électrique
                </span>
              </div>
              {/* Coin beige signature */}
              <div
                aria-hidden
                className="absolute -right-3 -top-3 hidden h-20 w-20 rounded-tr-[28px] border-r-2 border-t-2 border-champagne/50 sm:block"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

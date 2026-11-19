import Image from 'next/image';
import { ArrowRight, CalendarCheck, Car, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { googleBusiness } from '@/data/reviews';

export function Hero() {
  const rating = googleBusiness.rating.toFixed(1).replace('.', ',');

  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-ink-900 pt-[88px] text-white lg:flex lg:min-h-[calc(100vh-72px)] lg:flex-col lg:justify-center"
    >
      {/* Halo beige unique, ancré derrière le véhicule */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[4%] h-[30rem] w-[30rem] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(216,195,165,0.12), transparent 70%)' }}
      />

      <Container className="relative w-full py-12 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Texte */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-champagne" aria-hidden />
                <span className="eyebrow text-champagne">Taxi à Chatou · 24h/24 · 7j/7</span>
              </div>
              <h1
                className="mt-5 text-balance font-serif font-semibold tracking-[-0.02em]"
                style={{ fontSize: 'clamp(2rem, 1.25rem + 2.6vw, 3.4rem)', lineHeight: 1.08 }}
              >
                Votre taxi à Chatou,
                <span className="block text-champagne">confort &amp; sérénité.</span>
              </h1>
              <p className="mt-6 max-w-md text-[0.975rem] leading-relaxed text-cream/75">
                Taxi à Chatou pour la gare RER A, les aéroports, le transport médical conventionné et
                vos déplacements professionnels ou privés. Un chauffeur à l’heure, à bord d’un Škoda
                Enyaq 100 % électrique.
              </p>
            </Reveal>

            {/* Actions */}
            <Reveal delay={110}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  href="/#reservation"
                  size="lg"
                  className="group shrink-0 justify-center whitespace-nowrap"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden strokeWidth={2} />
                  Réserver mon taxi
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Button>
                <Button
                  href="/#vehicule"
                  variant="outline"
                  size="lg"
                  className="shrink-0 justify-center whitespace-nowrap"
                >
                  <Car className="h-4 w-4" aria-hidden strokeWidth={2} />
                  Découvrir le véhicule
                </Button>
              </div>
            </Reveal>

            {/* Ligne de confiance : note Google */}
            <Reveal delay={170}>
              <a
                href="#avis"
                aria-label={`Note ${rating} sur 5, ${googleBusiness.reviewCount} avis Google`}
                className="group mt-7 inline-flex items-center gap-2.5 text-sm text-cream/70 transition-colors hover:text-cream"
              >
                <span className="flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-champagne text-champagne" strokeWidth={0} />
                  ))}
                </span>
                <span className="font-semibold text-cream">{rating}</span>
                <span className="text-cream/35">·</span>
                <span>{googleBusiness.reviewCount} avis Google</span>
              </a>
            </Reveal>
          </div>

          {/* Véhicule encadré */}
          <Reveal delay={90}>
            <div className="relative">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] shadow-[0_50px_100px_-50px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
                <Image
                  src="/images/vehicule/taxi-chatou-skoda-enyaq-exterieur.webp"
                  alt="Taxi Škoda Enyaq 100 % électrique à Chatou"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 62%, rgba(7,21,44,0.5))' }}
                  aria-hidden
                />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink-900/70 px-3.5 py-1.5 text-xs font-medium text-cream backdrop-blur-sm">
                  <Car className="h-3.5 w-3.5 text-champagne" aria-hidden />
                  Škoda Enyaq · 100 % électrique
                </span>
              </div>
              {/* Filet beige signature, discret */}
              <div
                aria-hidden
                className="absolute -bottom-2.5 -left-2.5 hidden h-16 w-16 rounded-bl-[24px] border-b-2 border-l-2 border-champagne/40 sm:block"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

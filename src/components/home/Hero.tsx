import Image from 'next/image';
import { ArrowRight, ArrowUpRight, CalendarCheck, CarFront, Clock, Leaf, MapPin, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { ReassuranceBar } from '@/components/home/ReassuranceBar';
import { googleBusiness } from '@/data/reviews';

const pills = [
  { icon: CarFront, strong: 'Confort', rest: '& ponctualité' },
  { icon: ShieldCheck, strong: 'Sécurité', rest: '& discrétion' },
  { icon: Clock, strong: 'Disponible', rest: '7j/7' },
];

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-ink-900 pt-[88px] text-white lg:flex lg:min-h-[100svh] lg:flex-col"
    >
      {/* Accents décoratifs champagne (coins) */}
      <div
        className="pointer-events-none absolute -left-28 -top-24 z-[1] h-80 w-80 rounded-full opacity-70"
        style={{ background: 'radial-gradient(circle, rgba(219,195,165,0.16), transparent 70%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-20 z-[1] h-96 w-96 rounded-full opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(219,195,165,0.12), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative lg:flex lg:flex-1">
        <div className="relative w-full overflow-hidden">
          {/* Fond : photo réelle du véhicule (Škoda Enyaq 100 % électrique) */}
          <div className="absolute inset-0" aria-hidden>
            <Image
              src="/images/vehicule/taxi-chatou-skoda-enyaq.webp"
              alt="Taxi à Chatou : Škoda Enyaq noire 100 % électrique avec panneau taxi"
              fill
              priority
              fetchPriority="high"
              quality={78}
              sizes="100vw"
              className="object-cover object-[60%_45%]"
            />
            {/* Dégradé marine progressif gauche → droite pour la lisibilité du texte */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, #001138 0%, rgba(0,17,56,0.92) 32%, rgba(0,17,56,0.6) 60%, rgba(0,17,56,0.12) 100%)',
              }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-44"
              style={{ background: 'linear-gradient(transparent, rgba(0,17,56,0.85))' }}
            />
          </div>

          <div className="relative z-10 px-gutter py-12 sm:py-16 lg:flex lg:h-full lg:flex-col lg:justify-end lg:pb-14 lg:pt-16">
            {/* Badge de confiance — atouts clés */}
            <span className="absolute left-gutter top-2 z-20 inline-flex items-center gap-1.5 rounded-full border border-champagne/40 bg-ink-900/70 px-2.5 py-1 text-[11px] font-medium text-cream backdrop-blur-sm lg:static lg:left-auto lg:top-auto lg:z-auto lg:mb-5 lg:gap-2 lg:self-start lg:bg-champagne/10 lg:px-3.5 lg:py-1.5 lg:text-xs">
              <Leaf className="h-3 w-3 shrink-0 text-champagne lg:h-3.5 lg:w-3.5" aria-hidden strokeWidth={1.75} />
              100 % électrique · Taxi conventionné CPAM
            </span>

            <Reveal className="lg:max-w-[620px]">
              <p className="eyebrow inline-flex w-fit items-center gap-1.5 text-champagne tracking-[0.1em] sm:tracking-[0.3em]">
                <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden strokeWidth={2.25} />
                Taxi local à Chatou (78)
              </p>
              <h1
                className="mt-4 font-serif leading-[1.06] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(2.1rem, 4.8vw, 3.9rem)' }}
              >
                Votre taxi à Chatou, <span className="text-champagne">confort &amp; sérénité</span>
                <span className="mt-3 block font-sans text-[clamp(1rem,1.7vw,1.25rem)] font-medium leading-snug tracking-normal text-cream/85">
                  Aéroports, trajets médicaux, professionnels et privés — 7j/7
                </span>
              </h1>
            </Reveal>

            {/* Pavés de confiance */}
            <Reveal delay={90} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 lg:max-w-[620px]">
              {pills.map(({ icon: PillIcon, strong, rest }) => (
                <div key={strong} className="flex items-center gap-2.5">
                  <span className="inline-grid h-10 w-10 shrink-0 place-items-center rounded-full border border-champagne/30 bg-champagne/10 text-champagne">
                    <PillIcon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
                  </span>
                  <span className="text-xs leading-tight text-cream/80">
                    <span className="block font-semibold text-white">{strong}</span>
                    {rest}
                  </span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={170} className="lg:max-w-[720px]">
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-[0.95rem]">
                Taxi Stéphane Géatti vous accompagne dans tous vos déplacements, à Chatou et dans
                l’Ouest parisien, avec un service professionnel et un Škoda Enyaq 100 % électrique,
                confortable et silencieux.
              </p>
              <a
                href="#avis"
                className="group mt-5 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-cream/90 transition-colors hover:text-white"
              >
                <span className="text-base tracking-widest text-champagne" aria-hidden>
                  ★★★★★
                </span>
                <span>
                  <strong className="font-semibold text-white">
                    {googleBusiness.rating.toFixed(1).replace('.', ',')}/5
                  </strong>{' '}
                  · {googleBusiness.reviewCount} avis sur Google
                </span>
                <span className="font-semibold text-champagne underline underline-offset-2 transition-colors group-hover:text-champagne-light">
                  Voir les avis
                </span>
              </a>
              {/* CTA : empilés pleine largeur en mobile, sur une même ligne en desktop */}
              <div className="mt-7 flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center">
                <Button href="/#reservation" size="lg" className="group w-full justify-center lg:w-auto">
                  <CalendarCheck className="h-4 w-4" aria-hidden strokeWidth={2} />
                  Réserver mon taxi
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Button>
                <Button href="/#vehicule" variant="outline" size="lg" className="w-full justify-center lg:w-auto">
                  <CarFront className="h-4 w-4" aria-hidden strokeWidth={2} />
                  Découvrir le véhicule
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bandeau de réassurance */}
      <ReassuranceBar className="bg-ink-900/70 backdrop-blur-sm lg:mt-auto lg:bg-ink-900/55" />
    </section>
  );
}

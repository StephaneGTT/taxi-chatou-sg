import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';

/**
 * Services présentés en liste éditoriale numérotée (et non en grille de cartes),
 * pour une composition propre et distinctive.
 */
export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-ink-900 py-20 text-white sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Intitulé (aligné à gauche, filet beige) */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-champagne" aria-hidden />
                <span className="eyebrow text-champagne">Nos services</span>
              </div>
              <h2 className="mt-5 font-serif text-h2 leading-tight text-white">
                Un taxi adapté à chaque trajet
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
                Du transfert aéroport au transport médical conventionné, un service ponctuel et
                soigné, à bord d’un véhicule 100 % électrique.
              </p>
              <Button href="/services" variant="outline" size="sm" className="mt-7">
                Tous nos services
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </Reveal>

          {/* Liste numérotée */}
          <ul className="border-t border-white/10">
            {services.map((service, index) => (
              <li key={service.slug}>
                <Reveal delay={index * 60}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-4 border-b border-white/10 py-6 transition-colors hover:bg-white/[0.03] sm:gap-7 sm:py-7"
                  >
                    <span className="font-serif text-2xl font-semibold tabular-nums text-champagne/70 sm:text-3xl">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-full border border-champagne/25 bg-champagne/10 text-champagne">
                      <Icon name={service.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-serif text-lg text-white sm:text-xl">
                        {service.name}
                      </span>
                      <span className="mt-1 line-clamp-2 block text-sm leading-snug text-mist">
                        {service.cardDescription}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-white/30 transition-all duration-200 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-champagne"
                      aria-hidden
                    />
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

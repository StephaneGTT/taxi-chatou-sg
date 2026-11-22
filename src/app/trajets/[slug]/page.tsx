import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Phone, Clock, MapPin, Euro, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { CTASection } from '@/components/home/CTASection';
import { BookingSection } from '@/components/home/BookingSection';
import { ReassuranceBar } from '@/components/home/ReassuranceBar';
import { JsonLd } from '@/components/seo/JsonLd';
import { routes, getRoute, getRouteSlugs, estimatePriceRange } from '@/data/routes';
import { siteConfig, hasRealContact } from '@/config/site';
import { buildMetadata, breadcrumbSchema, faqSchema, serviceSchema, absoluteUrl } from '@/lib/seo';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getRouteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) return {};
  return buildMetadata({
    title: `Taxi Chatou – ${route.shortName} : prix et réservation`,
    description: `Taxi de Chatou vers ${route.destination} : distance, durée, prix estimé et réservation 24h/24 et 7j/7.${route.forfait ? ' Forfait à prix fixe possible.' : ''}`,
    path: `/trajets/${route.slug}`,
  });
}

export default async function RoutePage({ params }: Params) {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) notFound();

  const path = `/trajets/${route.slug}`;
  const price = estimatePriceRange(route.distanceKm);
  const others = routes.filter((r) => r.slug !== route.slug);
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Trajets', path: '/trajets' },
    { name: route.shortName, path },
  ];

  const facts = [
    { icon: MapPin, label: 'Distance', value: `~ ${route.distanceKm} km` },
    { icon: Clock, label: 'Durée estimée', value: `${route.durationMin[0]}–${route.durationMin[1]} min` },
    { icon: Euro, label: 'Prix estimé', value: `≈ ${price.low}–${price.high} €` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `Taxi Chatou – ${route.shortName}`,
            description: `Trajet en taxi de Chatou vers ${route.destination}.`,
            url: absoluteUrl(path),
          }),
          breadcrumbSchema(crumbs),
          faqSchema(route.faq),
        ]}
      />

      {/* Hero */}
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
            <span className="eyebrow text-champagne">
              Trajet · {route.category} · au départ de Chatou
            </span>
          </div>
          <h1
            className="mt-5 max-w-3xl text-balance font-serif font-semibold leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)' }}
          >
            Taxi Chatou <span className="text-champagne">→</span> {route.shortName}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/80">{route.intro[0]}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#reservation" size="lg">
              Réserver ce trajet
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

      <ReassuranceBar />

      {/* L'essentiel : faits + estimation + conseils */}
      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
            <div>
              <Reveal>
                <p className="eyebrow text-champagne-dark">L’essentiel du trajet</p>
                <h2 className="mt-4 text-h2 text-ink-900">
                  Chatou →{route.shortName}, en bref
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-800/75">
                  <p>{route.intro[1]}</p>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {facts.map(({ icon: FactIcon, label, value }) => (
                    <div
                      key={label}
                      className="rounded-[var(--radius)] border border-ink-900/10 bg-white p-5"
                    >
                      <FactIcon className="h-5 w-5 text-champagne-dark" aria-hidden strokeWidth={1.5} />
                      <p className="mt-3 font-serif text-xl text-ink-900">{value}</p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-ink-900/50">{label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-relaxed text-ink-800/55">
                  Fourchette indicative selon le tarif réglementé des Yvelines : la fourchette basse
                  correspond à une course de jour, la fourchette haute à la nuit, au dimanche et aux
                  jours fériés.{route.forfait ? ' Un forfait à prix fixe est possible pour ce trajet.' : ''}{' '}
                  Le taximètre fait foi. <Link href="/#tarifs" className="text-champagne-dark underline underline-offset-2">Voir la grille tarifaire</Link>.
                </p>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="rounded-[var(--radius-lg)] border border-ink-900/10 bg-white p-7 shadow-card lg:sticky lg:top-28">
                <h2 className="font-serif text-xl text-ink-900">Bon à savoir</h2>
                <ul className="mt-5 space-y-3">
                  {route.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-3 text-sm text-ink-800/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne-dark" aria-hidden strokeWidth={2} />
                      {tip}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="#reservation" size="sm">
                    Obtenir une estimation
                  </Button>
                  {hasRealContact && (
                    <Button href={siteConfig.contact.phoneHref} variant="outline" size="sm">
                      <Phone className="h-4 w-4" aria-hidden strokeWidth={1.75} />
                      {siteConfig.contact.phone}
                    </Button>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Réservation */}
      <BookingSection />

      {/* FAQ */}
      {route.faq.length > 0 && (
        <section className="bg-sand py-20 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <SectionHeading
                eyebrow="Questions fréquentes"
                title={`Chatou →${route.shortName}`}
                description={`Les réponses aux questions courantes sur ce trajet.`}
              />
              <FAQAccordion items={route.faq} />
            </div>
          </Container>
        </section>
      )}

      {/* Autres trajets */}
      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Autres trajets au départ de Chatou"
            title="Nos itinéraires les plus demandés"
            description="Aéroports, gares parisiennes, La Défense ou Disneyland : réservez votre trajet, 24h/24 et 7j/7."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((r, i) => (
              <Reveal key={r.slug} delay={(i % 3) * 60}>
                <Link
                  href={`/trajets/${r.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-[var(--radius)] border border-ink-900/10 bg-white px-5 py-4 transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:border-champagne hover:shadow-card"
                >
                  <span>
                    <span className="block font-serif text-lg text-ink-900">{r.shortName}</span>
                    <span className="text-xs text-ink-900/45">{r.category}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-900/30 transition-colors group-hover:text-champagne-dark" aria-hidden />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection primaryHref="#reservation" />
    </>
  );
}

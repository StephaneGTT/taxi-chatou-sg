import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck, Gem, Clock, MapPin, UserRound } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { PageHero } from '@/components/layout/PageHero';
import { CTASection } from '@/components/home/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = buildMetadata({
  title: 'À propos',
  description:
    `${siteConfig.name} : votre taxi local à Chatou et dans l’Ouest parisien, pensé autour du confort, de la ponctualité et de l’attention à chaque client.`,
  path: '/a-propos',
});

const commitments = [
  { icon: UserRound, title: 'Accueil personnalisé', text: 'Une prise en charge adaptée à chaque trajet et à vos préférences.' },
  { icon: Gem, title: 'Confort et discrétion', text: 'Un service soigné, respectueux de votre confidentialité.' },
  { icon: Clock, title: 'Ponctualité', text: 'Une organisation anticipée pour aborder vos trajets sereinement.' },
  { icon: MapPin, title: 'Connaissance locale', text: 'Chatou, l’Ouest parisien et l’ensemble de l’Île-de-France.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Accueil', path: '/' },
          { name: 'À propos', path: '/a-propos' },
        ])}
      />
      <PageHero
        eyebrow="À propos"
        title="Votre taxi à Chatou et dans l’Ouest parisien"
        description="Nous mettons la qualité d’accueil, l’attention aux détails et la simplicité de réservation au cœur de chaque trajet."
        crumbs={[
          { name: 'Accueil', path: '/' },
          { name: 'À propos', path: '/a-propos' },
        ]}
      />

      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <div className="prose-content mx-auto max-w-prose">
            <h2>Votre taxi à Chatou</h2>
            <p>
              {siteConfig.name} est un service de taxi artisanal basé à Chatou et rayonnant sur
              l’Ouest parisien. Stéphane Géatti met un point d’honneur à offrir un transport
              ponctuel, confortable et attentionné, du particulier au professionnel.
            </p>
            <p>
              Taxi réglementé (titulaire d’une autorisation de stationnement) et{' '}
              <strong>conventionné par l’Assurance Maladie</strong>, il assure aussi bien vos
              transferts aéroports et déplacements professionnels que vos trajets de soins sur
              prescription médicale.
            </p>

            <h2>Notre approche</h2>
            <p>
              Que ce soit pour un transfert aéroport, un déplacement professionnel, un trajet médical
              ou une sortie privée, notre priorité est simple : un transport soigné, ponctuel et
              discret. Nous privilégions une relation directe et un échange clair avant chaque
              trajet, afin que les modalités soient toujours comprises et confirmées : aucune
              réservation n’est validée automatiquement.
            </p>

            <h2>Zones desservies</h2>
            <p>
              Notre service rayonne depuis Chatou (78400) sur {siteConfig.serviceArea} :
              Croissy-sur-Seine, Le Vésinet, Montesson, Rueil-Malmaison, Carrières-sur-Seine,
              Houilles et les communes voisines, vers Paris et les principaux aéroports.
            </p>
          </div>
        </Container>
      </section>

      {/* Le véhicule */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow text-champagne-dark">Le véhicule</p>
              <h2 className="mt-3 max-w-2xl text-h2 text-ink-900">
                Une Škoda Enyaq 100 % électrique, spacieuse et confortable
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-800/75">
                Un véhicule récent et soigneusement entretenu : conduite silencieuse, zéro émission
                à l’usage, habitacle spacieux et coffre généreux pour vos bagages et vos transferts
                aéroport. Un confort appréciable sur les longs trajets comme pour vos rendez-vous du
                quotidien.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-video overflow-hidden rounded-[var(--radius-lg)] shadow-card">
                <Image
                  src="/images/vehicule/taxi-chatou-skoda-enyaq.webp"
                  alt="Taxi à Chatou : Škoda Enyaq noire 100 % électrique, avec panneau taxi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Engagements */}
      <section className="bg-ink-900 py-20 text-white sm:py-24">
        <Container>
          <h2 className="text-h2">Nos engagements</h2>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map(({ icon: CommitIcon, title, text }) => (
              <div key={title} className="border-t border-white/15 pt-6">
                <CommitIcon className="h-7 w-7 text-champagne" aria-hidden strokeWidth={1.5} />
                <h3 className="mt-4 font-serif text-xl text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 flex items-center gap-2 text-xs text-mist">
            <ShieldCheck className="h-4 w-4 text-champagne" aria-hidden strokeWidth={1.5} />
            Nous n’affichons aucun avis, note ou garantie non vérifiés.
          </p>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

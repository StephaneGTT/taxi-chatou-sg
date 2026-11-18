import { Leaf, Wind, Armchair, Briefcase } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

/**
 * Section « expérience passager » — met en valeur le confort du trajet.
 * N'affirme que des atouts réels et génériques du véhicule électrique ;
 * aucun équipement spécifique n'est promis sans confirmation.
 */
const comforts = [
  {
    icon: Leaf,
    title: '100 % électrique',
    description: 'Zéro émission à l’usage pour des trajets plus responsables.',
  },
  {
    icon: Wind,
    title: 'Conduite silencieuse',
    description: 'Un habitacle calme et apaisant, idéal pour se reposer ou travailler.',
  },
  {
    icon: Armchair,
    title: 'Espace et confort',
    description: 'Un véhicule spacieux pour voyager sereinement, seul ou à plusieurs.',
  },
  {
    icon: Briefcase,
    title: 'Coffre généreux',
    description: 'De la place pour vos bagages et vos transferts aéroport.',
  },
];

export function PassengerExperience() {
  return (
    <section className="bg-sand py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Expérience passager"
          title="Voyagez confortablement, profitez de chaque trajet"
          description="À bord du Škoda Enyaq, chaque déplacement devient un moment de calme : un véhicule électrique récent, spacieux et silencieux, pour arriver détendu."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {comforts.map(({ icon: ComfortIcon, title, description }, index) => (
            <Reveal key={title} delay={index * 80}>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-ink-900/8 bg-white p-7 shadow-card">
                <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-champagne/25 text-champagne-dark">
                  <ComfortIcon className="h-6 w-6" aria-hidden strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-serif text-lg text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-800/70">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

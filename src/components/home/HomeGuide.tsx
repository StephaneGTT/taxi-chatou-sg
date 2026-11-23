import type { ReactNode } from 'react';
import { Phone, Check, Train, Plane, MapPin, Stethoscope, Euro, Award, Info } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { siteConfig, hasRealContact } from '@/config/site';
import { googleBusiness } from '@/data/reviews';

/**
 * Contenu éditorial long-forme de la page d'accueil (SEO).
 * Reprend l'intégralité de la copie « Landing page Taxi Chatou » en respectant
 * la hiérarchie des titres (H2 par thème, H3 par sous-thème). Le H1 reste celui
 * du hero. Les montants tarifaires sont alignés sur la grille réglementée des
 * Yvelines déjà affichée sur le site (pas de prix contradictoires).
 */

function TopicHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <div className="flex items-center gap-3">
        <span className="h-px w-10 shrink-0 bg-champagne" aria-hidden />
        <span className="eyebrow text-champagne-dark">{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-h2 text-ink-900">{title}</h2>
    </>
  );
}

function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-10 font-serif text-xl text-ink-900 sm:text-2xl">{children}</h3>;
}

const phone = siteConfig.contact.phone;
const phoneHref = siteConfig.contact.phoneHref;

export function HomeGuide() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl space-y-16 [&_p]:hyphens-auto [&_p]:text-justify">
          {/* 1. Réservez votre taxi à Chatou pour tous vos déplacements */}
          <Reveal>
            <article>
              <TopicHeading eyebrow="Taxi à Chatou" title="Réservez votre taxi à Chatou pour tous vos déplacements" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-800/75">
                <p>
                  Située sur les bords de la Seine, Chatou est une ville résidentielle à une vingtaine
                  de minutes de Paris. Cependant, les transports en commun n’y couvrent pas tous les
                  besoins : trajet tôt le matin, départ avec valises, horaires décalés ou rendez-vous à
                  l’autre bout de l’Île-de-France. Notre service de taxi à Chatou répond donc à ces
                  situations. En effet, vous bénéficiez d’un chauffeur, d’un véhicule propre et
                  confortable, et d’une arrivée à l’heure, 24h/24 et 7j/7.
                </p>
              </div>

              <H3>
                <Train className="mb-1 mr-2 inline h-5 w-5 text-champagne-dark" aria-hidden strokeWidth={1.5} />
                Taxi à la gare de Chatou–Croissy (RER A)
              </H3>
              <p className="mt-3 text-base leading-relaxed text-ink-800/75">
                La gare de Chatou–Croissy, desservie par le RER A, est l’un des points de prise en charge
                les plus demandés. Nous assurons les transferts depuis et vers la gare : retour tardif
                après la dernière correspondance, trajet vers La Défense ou Paris, arrivée avec des
                bagages. Indiquez-nous votre horaire de train : nous suivons votre arrivée pour être
                présents à la sortie de la gare.
              </p>

              <H3>Vos trajets personnels et professionnels</H3>
              <ul className="mt-4 space-y-3">
                {[
                  ['Particuliers', 'courses du quotidien, sorties, gares parisiennes (Saint-Lazare, Gare de Lyon, Montparnasse), accompagnement de personnes âgées, trajets en famille.'],
                  ['Professionnels', 'rendez-vous clients, déplacements à La Défense ou Paris, navettes régulières pour salariés et invités, trajets avec facture pour votre comptabilité.'],
                  ['Événements', 'mariages, restaurants, soirées sur l’Île des Impressionnistes ou au bord de la Seine, retours sécurisés.'],
                ].map(([label, detail]) => (
                  <li key={label} className="flex items-start gap-3 text-base leading-relaxed text-ink-800/75">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-champagne-dark" aria-hidden strokeWidth={2.5} />
                    <span>
                      <strong className="font-semibold text-ink-900">{label}</strong> : {detail}
                    </span>
                  </li>
                ))}
              </ul>

              <H3>Comment faire appel à un taxi à Chatou ?</H3>
              <p className="mt-3 text-base leading-relaxed text-ink-800/75">Trois façons de nous joindre, au choix :</p>
              <ol className="mt-4 space-y-3">
                {[
                  <>Par téléphone au <a href={phoneHref} className="font-medium text-champagne-dark underline underline-offset-2 hover:text-ink-900">{phone}</a>, pour réserver votre trajet et convenir de l’heure de prise en charge.</>,
                  <>En ligne, via notre <a href="#reservation" className="font-medium text-champagne-dark underline underline-offset-2 hover:text-ink-900">formulaire de réservation</a> : adresse de départ, destination, date, heure, nombre de passagers et de bagages.</>,
                  <>Par message (SMS ou WhatsApp) pour confirmer un trajet récurrent.</>,
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-ink-800/75">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-champagne/25 text-xs font-semibold text-champagne-dark">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-base leading-relaxed text-ink-800/75">
                Vous recevez une confirmation avec les informations de votre course. Les réservations
                se prennent au plus tôt 4 heures à l’avance : pensez à anticiper, surtout pour un
                départ tôt le matin ou un horaire précis.
              </p>
            </article>
          </Reveal>

          {/* 2. Aéroports */}
          <Reveal>
            <article className="border-t border-ink-900/10 pt-16">
              <TopicHeading eyebrow="Aéroports" title="Taxi Chatou vers les aéroports de Paris" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-800/75">
                <p>
                  Manquer un vol est une source de stress que vous pouvez éviter. Nous assurons donc vos
                  transferts aéroports au départ de Chatou. En effet, le chauffeur connaît les itinéraires
                  (A86, A13, A14, A15, A1, périphérique) et les aléas de circulation selon l’heure. Au
                  retour, nous venons aussi vous chercher à votre descente d’avion, directement au
                  terminal : grâce au suivi de vol, nous ajustons l’heure de prise en charge, et l’aide
                  aux bagages est incluse.
                </p>
              </div>

              <H3>
                <Plane className="mb-1 mr-2 inline h-5 w-5 text-champagne-dark" aria-hidden strokeWidth={1.5} />
                Taxi Chatou – Aéroport Roissy-Charles-de-Gaulle (CDG)
              </H3>
              <p className="mt-3 text-base leading-relaxed text-ink-800/75">
                Depuis Chatou, Roissy-CDG se situe à environ 40 km. Comptez en moyenne 45 à 60 minutes
                selon la circulation. Nous vous conseillons de prévoir une marge supplémentaire aux heures
                de pointe (6h30–9h30 et 16h30–19h30). Nous vous déposons au terminal correspondant à votre
                compagnie (T1, T2, T3), et assurons les prises en charge à l’arrivée, avec attente après
                l’atterrissage.
              </p>

              <H3>
                <Plane className="mb-1 mr-2 inline h-5 w-5 text-champagne-dark" aria-hidden strokeWidth={1.5} />
                Taxi Chatou – Aéroport d’Orly
              </H3>
              <p className="mt-3 text-base leading-relaxed text-ink-800/75">
                Orly est à environ 35 à 40 km de Chatou, soit 45 à 60 minutes de trajet selon l’itinéraire
                et le trafic (A86, A6, périphérique). Départs matinaux ou retours de nuit : nous sommes
                disponibles à toute heure, y compris pour les vols très tôt ou tard le soir (terminaux
                Orly 1 à 4).
              </p>

              <H3>Combien coûte un taxi entre Chatou et les aéroports ?</H3>
              <p className="mt-3 text-base leading-relaxed text-ink-800/75">
                Le prix dépend de la distance réelle, du trafic et de l’heure (tarif jour ou nuit), ainsi
                que des suppléments éventuels (bagages, passager supplémentaire). À titre indicatif, et
                comptez de l’ordre de 70 à 110 € pour Orly et de 80 à 130 € pour Roissy-CDG, selon
                l’horaire et le trafic. Les tarifs sont majorés la nuit, le dimanche et les jours
                fériés. Enfin, nous vous communiquons une estimation avant le
                départ, et le taximètre affiche le montant exact en fin de course.
              </p>
              <blockquote className="mt-6 rounded-[var(--radius)] border-l-2 border-champagne bg-champagne/10 px-5 py-4 text-sm leading-relaxed text-ink-800/80">
                <Info className="mb-1 mr-2 inline h-4 w-4 text-champagne-dark" aria-hidden />
                Bon à savoir : le tarif forfaitaire aéroports de Paris concerne uniquement les courses au
                départ ou à destination de Paris intra-muros. Au départ de Chatou, la course est facturée
                au compteur selon le tarif réglementé des Yvelines ; un forfait à prix fixe reste possible,
                convenu à l’avance.
              </blockquote>
            </article>
          </Reveal>

          {/* 3. Villes voisines */}
          <Reveal>
            <article className="border-t border-ink-900/10 pt-16">
              <TopicHeading eyebrow="Zones desservies" title="Taxi à Chatou et dans les villes voisines" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-800/75">
                <p>
                  Notre zone de prise en charge ne s’arrête pas aux limites de Chatou. Nous desservons les
                  communes voisines des Yvelines et de l’Ouest parisien, avec le même niveau de service et
                  la même disponibilité 24h/24.
                </p>
              </div>

              <H3>Taxi à Croissy-sur-Seine</H3>
              <p className="mt-3 text-base leading-relaxed text-ink-800/75">
                À quelques minutes de Chatou, Croissy-sur-Seine est desservie en continu : gare de
                Chatou–Croissy, résidences, Parc de Croissy, bords de Seine. Prise en charge rapide, y
                compris le soir et le week-end.
              </p>

              <H3>Taxi à Montesson</H3>
              <p className="mt-3 text-base leading-relaxed text-ink-800/75">
                Les habitants de Montesson font appel à nous pour rejoindre la gare RER, les aéroports ou
                leur lieu de travail, avec un départ à l’heure choisie et un tarif clair.
              </p>

              <H3>Taxi au Vésinet</H3>
              <p className="mt-3 text-base leading-relaxed text-ink-800/75">
                Au Vésinet, ville résidentielle et arborée, nous assurons les transferts vers les gares
                (Le Vésinet–Le Pecq, Le Vésinet–Centre), Roissy-CDG, Orly et Paris.
              </p>

              <H3>
                <MapPin className="mb-1 mr-2 inline h-5 w-5 text-champagne-dark" aria-hidden strokeWidth={1.5} />
                Accès et prise en charge en taxi à Chatou (78400)
              </H3>
              <p className="mt-3 text-base leading-relaxed text-ink-800/75">
                Nous venons vous chercher à l’adresse de votre choix : domicile, bureau, hôtel, restaurant,
                gare de Chatou–Croissy, bord de Seine. Dans le code postal 78400, indiquez-nous simplement
                votre rue et votre numéro, et précisez tout détail utile (digicode, bâtiment, point de
                rendez-vous). Le chauffeur vous attend à l’heure convenue et vous envoie un message à son
                arrivée.
              </p>
            </article>
          </Reveal>

          {/* 4. Conventionné */}
          <Reveal>
            <article className="border-t border-ink-900/10 pt-16">
              <TopicHeading eyebrow="Transport médical" title="Taxi conventionné à Chatou pour vos transports médicaux" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-800/75">
                <p>
                  Votre état de santé nécessite des soins réguliers ou ponctuels ? Nos taxis conventionnés
                  par l’Assurance Maladie vous conduisent à vos consultations, séances de dialyse,
                  chimiothérapie, radiothérapie, rééducation, examens d’imagerie ou hospitalisations. Le
                  chauffeur est attentif, patient et habitué à accompagner des personnes à mobilité réduite
                  ou fragiles.
                </p>
              </div>

              <H3>
                <Stethoscope className="mb-1 mr-2 inline h-5 w-5 text-champagne-dark" aria-hidden strokeWidth={1.5} />
                Réservez un taxi conventionné pour vos rendez-vous médicaux
              </H3>
              <p className="mt-3 text-base leading-relaxed text-ink-800/75">
                Pour bénéficier d’une prise en charge, munissez-vous de :
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  'votre prescription médicale de transport (délivrée par votre médecin) ;',
                  'votre carte Vitale et, le cas échéant, votre attestation de mutuelle ;',
                  'votre convocation ou rendez-vous (date, heure, établissement).',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-ink-800/75">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-champagne-dark" aria-hidden strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-base leading-relaxed text-ink-800/75">
                Selon votre situation et la prescription, le tiers payant peut s’appliquer et vous évite
                l’avance de frais. Appelez-nous au{' '}
                <a href={phoneHref} className="font-medium text-champagne-dark underline underline-offset-2 hover:text-ink-900">{phone}</a>{' '}
                : nous vous guidons dans les démarches et pouvons programmer vos trajets récurrents
                (par exemple des séances hebdomadaires).
              </p>
            </article>
          </Reveal>

          {/* 5. Tarifs */}
          <Reveal>
            <article className="border-t border-ink-900/10 pt-16">
              <TopicHeading eyebrow="Tarifs" title="Tarifs des taxis à Chatou : combien coûte votre trajet ?" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-800/75">
                <p>
                  Les taxis sont soumis à une tarification réglementée, fixée chaque année par arrêté
                  préfectoral. Le prix se compose d’une prise en charge, d’un tarif kilométrique et d’un
                  temps d’attente au compteur. Ce tarif kilométrique varie notamment selon l’heure, le
                  jour et le retour en charge ou à vide. Enfin, des suppléments peuvent s’ajouter (bagages
                  encombrants, passager supplémentaire).
                </p>
              </div>

              <H3>
                <Euro className="mb-1 mr-2 inline h-5 w-5 text-champagne-dark" aria-hidden strokeWidth={1.5} />
                Quel est le prix d’un taxi pour 20 km ?
              </H3>
              <p className="mt-3 text-base leading-relaxed text-ink-800/75">
                À titre d’ordre de grandeur, une course de 20 km revient de jour à environ 23 € à 43 €,
                selon que le taxi revient en charge (tarif A) ou à vide (tarif C) : prise en charge de
                3,00 € plus le kilométrage. De nuit, le dimanche et les jours fériés, la fourchette monte.
                L’attente et les suppléments s’ajoutent ; le taximètre fait foi. Vous retrouvez le détail
                dans notre{' '}
                <a href="#tarifs" className="font-medium text-champagne-dark underline underline-offset-2 hover:text-ink-900">grille tarifaire</a>.
              </p>

              <H3>Comment connaître le coût d’un trajet en taxi à Chatou ?</H3>
              <ul className="mt-4 space-y-3">
                {[
                  'Demandez une estimation par téléphone ou en ligne : donnez votre départ, votre arrivée et l’heure souhaitée.',
                  'Précisez vos bagages et le nombre de passagers.',
                  'Gardez à l’esprit que le prix final dépend du compteur et du trafic réel : nous vous donnons la fourchette avant de partir, sans mauvaise surprise.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-ink-800/75">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-champagne-dark" aria-hidden strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <H3>Taxi G7 à Chatou : quelles différences de tarifs et de services ?</H3>
              <p className="mt-3 text-base leading-relaxed text-ink-800/75">
                Les tarifs des taxis sont réglementés, qu’ils soient pris auprès d’une centrale comme G7 ou
                d’un taxi local indépendant : le compteur applique la même grille. Les différences se
                jouent ailleurs : frais de réservation appliqués par certaines plateformes, temps d’attente
                à l’arrivée du véhicule, proximité du chauffeur et connaissance du secteur. Un taxi basé à
                Chatou connaît les rues, les accès à la gare et les itinéraires locaux, et peut vous
                proposer un tarif estimé à l’avance pour les trajets longue distance.
              </p>
            </article>
          </Reveal>

          {/* 6. Pourquoi choisir */}
          <Reveal>
            <article className="border-t border-ink-900/10 pt-16">
              <TopicHeading eyebrow="Pourquoi nous" title="Pourquoi choisir notre service de taxi à Chatou ?" />

              <H3>
                <Award className="mb-1 mr-2 inline h-5 w-5 text-champagne-dark" aria-hidden strokeWidth={1.5} />
                Un service de taxi à Chatou fiable et apprécié des clients
              </H3>
              <p className="mt-3 text-base leading-relaxed text-ink-800/75">
                Ponctualité, propreté du véhicule, courtoisie : ce sont les trois engagements sur lesquels
                nous nous faisons juger. Particuliers, entreprises et patients nous font confiance au
                quotidien pour leurs trajets réguliers comme pour leurs urgences. Notre service est noté{' '}
                {googleBusiness.rating.toFixed(1).replace('.', ',')}/5 sur Google
                ({googleBusiness.reviewCount} avis).
              </p>

              <H3>Des chauffeurs professionnels pour vos déplacements</H3>
              <p className="mt-3 text-base leading-relaxed text-ink-800/75">
                Nos chauffeurs sont titulaires de la carte professionnelle de taxi, formés à l’accueil et à
                la conduite en toute sécurité. Ils connaissent Chatou, les Yvelines et l’Île-de-France,
                aident à charger vos bagages et adaptent leur conduite à vos besoins (personne âgée, enfant,
                mobilité réduite).
              </p>

              <H3>Une réservation simple et rapide, 24h/24 et 7j/7</H3>
              <p className="mt-3 text-base leading-relaxed text-ink-800/75">
                Un appel, un formulaire, un message : votre demande est enregistrée en quelques instants.
                Réservez à l’avance, de jour comme de nuit : nous restons joignables en permanence pour
                confirmer votre prise en charge.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#reservation" size="lg">
                  Réserver mon taxi
                </Button>
                {hasRealContact && (
                  <Button href={phoneHref} variant="outline" size="lg">
                    <Phone className="h-4 w-4" aria-hidden strokeWidth={1.75} />
                    {phone}
                  </Button>
                )}
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

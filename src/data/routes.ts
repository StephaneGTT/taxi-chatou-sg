/**
 * Pages « itinéraire » (pSEO) : trajets au départ de Chatou vers des
 * destinations à forte intention (aéroports, gares, La Défense, Disneyland).
 *
 * Origine fixe = Chatou. Chaque trajet porte un contenu unique (intro,
 * conseils, FAQ) + une estimation de prix dérivée du tarif réglementé des
 * Yvelines. Les distances/durées sont approximatives (selon le trafic) ; le
 * taximètre fait foi.
 */

export type RouteCategory = 'Aéroport' | 'Gare' | 'Quartier d’affaires' | 'Loisir';

export type TaxiRoute = {
  slug: string;
  /** Nom complet de la destination */
  destination: string;
  /** Libellé court (titre, fil d'Ariane) */
  shortName: string;
  category: RouteCategory;
  /** Distance routière approximative depuis Chatou (km) */
  distanceKm: number;
  /** Durée estimée min–max selon le trafic (minutes) */
  durationMin: [number, number];
  /** Fourchette de prix indicative [bas, haut] en euros (sinon : estimée depuis la distance). */
  priceRange?: [number, number];
  /** Un forfait à prix fixe est proposé (aéroports) */
  forfait?: boolean;
  /** 2 paragraphes d'introduction, propres à ce trajet */
  intro: [string, string];
  /** Conseils pratiques spécifiques */
  tips: string[];
  faq: { question: string; answer: string }[];
};

/**
 * Estimation de prix à partir du tarif réglementé des Yvelines : prise en charge 3 € + km.
 * Fourchette basse 2 €/km (course de jour, retour à vide – tarif C), fourchette haute 3 €/km
 * (nuit, dimanche et jours fériés, retour à vide – tarif D). Le taximètre fait foi.
 */
export function estimatePriceRange(km: number): { low: number; high: number } {
  const base = 3; // prise en charge
  const low = Math.max(8, Math.round(base + km * 2.0)); // 2 €/km (tarif C : jour, retour à vide)
  const high = Math.max(8, Math.round(base + km * 3.0)); // 3 €/km (tarif D : nuit/dimanche/férié, retour à vide)
  return { low, high };
}

export const routes: TaxiRoute[] = [
  {
    slug: 'taxi-chatou-aeroport-cdg',
    destination: 'Aéroport Paris-Charles-de-Gaulle (Roissy CDG)',
    shortName: 'Aéroport CDG',
    category: 'Aéroport',
    distanceKm: 45,
    durationMin: [40, 90],
    priceRange: [80, 130],
    forfait: true,
    intro: [
      'Rejoindre l’aéroport Paris-Charles-de-Gaulle depuis Chatou suppose d’anticiper le trafic de l’A86 et de l’A1, en particulier tôt le matin et aux heures de pointe.',
      'Nous calculons votre heure de prise en charge selon votre vol et les marges d’enregistrement habituelles, pour arriver au bon terminal sans stress, bagages compris.',
    ],
    tips: [
      'Indiquez votre numéro de vol et votre terminal pour un calcul d’horaire précis.',
      'Pour un départ aux premières heures, réservez la veille afin de garantir la disponibilité.',
      'Un forfait aéroport à prix fixe est possible : demandez-le à la réservation.',
    ],
    faq: [
      {
        question: 'À quelle heure partir de Chatou pour un vol à Roissy ?',
        answer:
          'Nous définissons l’heure ensemble selon votre terminal et l’heure d’embarquement, en prévoyant une marge pour le trafic. Comptez généralement un départ 3 h avant un vol long-courrier et 2 h avant un vol court/moyen-courrier.',
      },
    ],
  },
  {
    slug: 'taxi-chatou-aeroport-orly',
    destination: 'Aéroport de Paris-Orly',
    shortName: 'Aéroport d’Orly',
    category: 'Aéroport',
    distanceKm: 35,
    durationMin: [35, 80],
    priceRange: [70, 110],
    forfait: true,
    intro: [
      'Orly se situe au sud de Paris : depuis Chatou, l’itinéraire emprunte le plus souvent l’A86 pour contourner la capitale, un trajet sensible au trafic selon l’heure.',
      'Nous anticipons votre départ pour absorber les ralentissements et vous déposer directement au bon terminal (Orly 1-2-3-4).',
    ],
    tips: [
      'Précisez votre terminal Orly et votre numéro de vol.',
      'Les retours tard le soir se réservent à l’avance : indiquez votre heure d’atterrissage.',
      'Forfait Orly à prix fixe possible, convenu avant le départ.',
    ],
    faq: [
      {
        question: 'Le trajet Chatou–Orly passe-t-il par Paris ?',
        answer:
          'Le plus souvent, non : nous contournons Paris par l’A86. L’itinéraire exact est choisi le jour même selon le trafic, pour limiter le temps de trajet.',
      },
    ],
  },
  {
    slug: 'taxi-chatou-aeroport-le-bourget',
    destination: 'Aéroport de Paris-Le Bourget',
    shortName: 'Aéroport du Bourget',
    category: 'Aéroport',
    distanceKm: 35,
    durationMin: [35, 80],
    priceRange: [70, 100],
    forfait: true,
    intro: [
      'Le Bourget, première plateforme d’aviation d’affaires d’Europe, accueille vols privés et grands salons. Depuis Chatou, l’accès se fait par l’A86 puis l’A1.',
      'Nous organisons une prise en charge ponctuelle et discrète, adaptée aux horaires serrés de l’aviation d’affaires comme aux déplacements liés aux événements du parc des expositions.',
    ],
    tips: [
      'Indiquez le terminal ou le FBO (opérateur) d’arrivée/départ.',
      'Pour les salons (Salon du Bourget…), anticipez : le secteur est très chargé.',
      'Service discret adapté aux déplacements professionnels sensibles.',
    ],
    faq: [
      {
        question: 'Desservez-vous les terminaux d’aviation d’affaires du Bourget ?',
        answer:
          'Oui. Indiquez le nom de l’opérateur ou du terminal à la réservation ; nous organisons une prise en charge à l’heure convenue, au départ de Chatou.',
      },
    ],
  },
  {
    slug: 'taxi-chatou-aeroport-beauvais',
    destination: 'Aéroport de Beauvais-Tillé',
    shortName: 'Aéroport de Beauvais',
    category: 'Aéroport',
    distanceKm: 80,
    durationMin: [70, 120],
    priceRange: [150, 200],
    forfait: true,
    intro: [
      'Beauvais-Tillé, dans l’Oise, est le plus éloigné des aéroports franciliens : comptez environ 1 h 10 de route depuis Chatou, principalement par l’A15 et l’A16.',
      'Ce trajet plus long se prépare : nous fixons une heure de départ avec marge confortable et vous proposons volontiers un forfait pour un tarif connu à l’avance.',
    ],
    tips: [
      'Anticipez largement : Beauvais est à plus de 80 km, le temps de route pèse sur l’horaire.',
      'Un forfait à prix fixe est particulièrement intéressant sur cette longue distance.',
      'Vérifiez l’heure limite d’enregistrement propre aux compagnies low-cost.',
    ],
    faq: [
      {
        question: 'Combien de temps faut-il prévoir pour Chatou–Beauvais ?',
        answer:
          'Comptez environ 1 h 10 de trajet hors trafic, davantage aux heures chargées. Nous intégrons cette marge au calcul de votre heure de prise en charge.',
      },
    ],
  },
  {
    slug: 'taxi-chatou-gare-saint-lazare',
    destination: 'Gare de Paris-Saint-Lazare',
    shortName: 'Gare Saint-Lazare',
    category: 'Gare',
    distanceKm: 18,
    durationMin: [45, 80],
    priceRange: [50, 80],
    intro: [
      'Saint-Lazare est la gare parisienne la plus naturelle depuis l’Ouest francilien, porte d’entrée vers la Normandie et de nombreuses lignes Transilien.',
      'Un taxi au départ de Chatou vous y dépose en porte-à-porte, une solution directe et confortable avec des bagages, en complément ou en alternative au RER A.',
    ],
    tips: [
      'Communiquez l’heure de votre train pour caler la prise en charge.',
      'La dépose se fait au plus près de l’entrée selon la circulation du secteur.',
      'Idéal avec des bagages ou tôt le matin, sans correspondance.',
    ],
    faq: [
      {
        question: 'Le taxi est-il plus intéressant que le RER pour Saint-Lazare ?',
        answer:
          'Pour un trajet direct, avec bagages ou à une heure sans correspondance pratique, le porte-à-porte en taxi fait gagner en confort et en sérénité. Le RER reste une option économique selon vos horaires.',
      },
    ],
  },
  {
    slug: 'taxi-chatou-gare-de-lyon',
    destination: 'Gare de Paris-Lyon',
    shortName: 'Gare de Lyon',
    category: 'Gare',
    distanceKm: 25,
    durationMin: [45, 90],
    priceRange: [60, 80],
    intro: [
      'La Gare de Lyon, grand hub des TGV vers le Sud-Est et la Méditerranée, se situe à l’est de Paris : depuis Chatou, le trajet traverse l’agglomération et dépend fortement du trafic.',
      'Nous anticipons ce temps de traversée pour vous déposer à l’heure, hall des départs, prêt à embarquer.',
    ],
    tips: [
      'Prévoyez une marge confortable : la traversée de Paris est variable.',
      'Indiquez votre heure de train et, si possible, le hall (1 ou 2).',
      'Réservation conseillée aux heures de pointe.',
    ],
    faq: [
      {
        question: 'Faut-il partir plus tôt pour la Gare de Lyon ?',
        answer:
          'Oui, car le trajet traverse Paris d’ouest en est. Nous intégrons une marge au calcul de l’heure de départ pour absorber le trafic et arriver sereinement.',
      },
    ],
  },
  {
    slug: 'taxi-chatou-la-defense',
    destination: 'Quartier d’affaires de La Défense',
    shortName: 'La Défense',
    category: 'Quartier d’affaires',
    distanceKm: 10,
    durationMin: [15, 35],
    priceRange: [25, 40],
    intro: [
      'La Défense, premier quartier d’affaires européen, est tout proche de Chatou : quelques kilomètres par l’A14 ou via Nanterre suffisent pour rejoindre le cœur du quartier.',
      'Pour un rendez-vous d’affaires, une arrivée ponctuelle et un cadre calme comptent : nous vous déposons au pied de votre tour ou sur le parvis, à l’heure convenue.',
    ],
    tips: [
      'Précisez la tour ou l’adresse exacte : La Défense est vaste.',
      'Les trajets récurrents peuvent être organisés à l’avance (même horaire).',
      'Cadre discret, idéal pour préparer une réunion ou passer un appel.',
    ],
    faq: [
      {
        question: 'Pouvez-vous organiser des trajets réguliers vers La Défense ?',
        answer:
          'Oui. Les déplacements récurrents (même trajet, horaires fixes) s’organisent à l’avance pour simplifier votre agenda, au départ de Chatou et des communes voisines.',
      },
    ],
  },
  {
    slug: 'taxi-chatou-disneyland',
    destination: 'Disneyland Paris (Marne-la-Vallée)',
    shortName: 'Disneyland Paris',
    category: 'Loisir',
    distanceKm: 55,
    durationMin: [60, 80],
    priceRange: [120, 160],
    intro: [
      'Disneyland Paris, à Marne-la-Vallée, se trouve à l’est de l’agglomération : depuis Chatou, le trajet traverse la région et se prépare, surtout en période de vacances.',
      'En famille, le taxi offre un vrai confort : porte-à-porte, bagages et poussettes embarqués, sans correspondance ni stationnement à gérer.',
    ],
    tips: [
      'Précisez le nombre de passagers et de bagages (siège enfant possible sur demande).',
      'Pensez à l’aller-retour : réservez le retour en même temps que l’aller.',
      'Anticipez pendant les vacances scolaires, le secteur est très fréquenté.',
    ],
    faq: [
      {
        question: 'Peut-on réserver un aller-retour vers Disneyland ?',
        answer:
          'Oui. Indiquez vos horaires souhaités pour l’aller et le retour : nous organisons les deux trajets, avec un véhicule adapté au nombre de passagers et de bagages.',
      },
    ],
  },
];

export function getRoute(slug: string): TaxiRoute | undefined {
  return routes.find((r) => r.slug === slug);
}

export function getRouteSlugs(): string[] {
  return routes.map((r) => r.slug);
}

import type { Location } from '@/types';

/**
 * Pages locales. Le contenu décrit le service de transport proposé DEPUIS/VERS ces communes.
 * Il ne doit jamais laisser entendre que l'entreprise dispose d'un établissement physique
 * dans chaque ville : l'activité rayonne depuis Chatou et l'Ouest parisien.
 */
export const locations: Location[] = [
  {
    slug: 'taxi-croissy-sur-seine',
    name: 'Croissy-sur-Seine',
    title: 'Taxi à Croissy-sur-Seine',
    h1: 'Taxi à Croissy-sur-Seine : gare RER A et aéroports',
    metaTitle: 'Taxi Croissy-sur-Seine | Gare RER A et Aéroports',
    metaDescription:
      'Taxi à Croissy-sur-Seine 24h/24 et 7j/7 : gare RER A Chatou–Croissy, aéroports Orly et Roissy, trajets médicaux. Réservez en ligne ou par téléphone.',
    postalCode: '78290',
    tagline: 'Votre taxi de proximité à Croissy-sur-Seine',
    context: [
      'Croissy-sur-Seine, commune résidentielle des bords de Seine, est la voisine immédiate de Chatou, avec laquelle elle partage la gare RER A Chatou–Croissy.',
      'Entre le centre-ville, les quais et les quartiers pavillonnaires, les besoins de transport y sont nombreux : aéroports, rendez-vous médicaux, trajets professionnels et sorties.',
    ],
    needs: [
      'Transferts aéroports au départ du centre ou des quartiers résidentiels.',
      'Transport médical conventionné (CPAM) vers vos rendez-vous de soins.',
      'Déplacements professionnels vers Paris, La Défense et les gares.',
      'Compléments ou alternatives au RER A pour les trajets avec bagages.',
    ],
    destinations: [
      { label: 'Roissy CDG / Orly', detail: 'Transferts aéroports organisés.' },
      { label: 'La Défense', detail: 'Déplacements d’affaires.' },
      { label: 'Hôpitaux et cliniques', detail: 'Trajets médicaux conventionnés.' },
      { label: 'Chatou & communes voisines', detail: 'Liaisons locales.' },
    ],
    practical: [
      'Prise en charge à l’adresse de votre choix à Croissy-sur-Seine.',
      'Idéal pour les trajets avec bagages ou en soirée, en complément du RER.',
      'Réservation conseillée pour les horaires de pointe.',
    ],
    faq: [
      {
        question: 'Proposez-vous une alternative au RER A ?',
        answer:
          'Notre service est une solution de porte à porte, particulièrement utile avec des bagages, en soirée ou pour un trajet direct sans correspondance. Il fonctionne sur réservation.',
      },
      {
        question: 'Assurez-vous les trajets médicaux depuis Croissy-sur-Seine ?',
        answer:
          'Oui. Nous assurons le transport médical conventionné (CPAM), sur prescription, vers vos consultations, examens et séjours hospitaliers, à l’adresse de votre choix.',
      },
    ],
  },
  {
    slug: 'taxi-le-vesinet',
    name: 'Le Vésinet',
    title: 'Taxi au Vésinet',
    h1: 'Taxi au Vésinet : gares RER A et transferts aéroports',
    metaTitle: 'Taxi Le Vésinet | Gare RER A, Orly et Roissy',
    metaDescription:
      'Taxi au Vésinet 24h/24 et 7j/7 : gares RER A, Orly, Roissy CDG, transport médical. Réservez en ligne ou par téléphone, tarif annoncé avant le départ.',
    postalCode: '78110',
    tagline: 'Votre taxi de proximité au Vésinet',
    context: [
      'Le Vésinet, ville-parc réputée pour ses lacs et son urbanisme paysager, est l’une des communes résidentielles les plus prisées de l’Ouest parisien, desservie par le RER A.',
      'Voisine de Chatou, elle appelle un service de transport soigné et ponctuel, des abords de ses lacs jusqu’aux gares du RER A (Le Vésinet-Centre, Le Vésinet–Le Pecq).',
    ],
    needs: [
      'Transferts aéroports au départ du Vésinet.',
      'Transport médical conventionné (CPAM) vers vos rendez-vous de soins.',
      'Déplacements professionnels vers Paris et La Défense.',
      'Trajets privés pour sorties et événements.',
    ],
    destinations: [
      { label: 'Roissy CDG / Orly', detail: 'Transferts aéroports.' },
      { label: 'La Défense', detail: 'Trajets d’affaires.' },
      { label: 'Hôpitaux et cliniques', detail: 'Trajets médicaux conventionnés.' },
      { label: 'Chatou & communes voisines', detail: 'Liaisons locales.' },
    ],
    practical: [
      'Prise en charge à l’adresse de votre choix au Vésinet.',
      'Service soigné et ponctuel, sur réservation.',
      'Durées estimées lors de la demande.',
    ],
    faq: [
      {
        question: 'Prenez-vous en charge les trajets depuis les quartiers résidentiels du Vésinet ?',
        answer:
          'Oui. Des abords des lacs aux villas et aux gares du RER A, la prise en charge se fait à l’adresse exacte de votre choix, pour un trajet direct et ponctuel.',
      },
    ],
  },
  {
    slug: 'taxi-montesson',
    name: 'Montesson',
    title: 'Taxi à Montesson',
    h1: 'Taxi à Montesson : prise en charge à domicile, 24h/24 et 7j/7',
    metaTitle: 'Taxi Montesson | Départ à Domicile, Aéroports',
    metaDescription:
      'Taxi à Montesson 24h/24 et 7j/7 : départ à domicile, aéroports, transport médical conventionné. Réservez en ligne ou par téléphone, réponse rapide.',
    postalCode: '78360',
    tagline: 'Votre taxi de proximité à Montesson',
    context: [
      'Montesson, connue pour sa plaine maraîchère et ses quartiers résidentiels, est une commune voisine de Chatou, à deux pas de la boucle de la Seine et des grands axes (A14).',
      'Moins desservie par les transports en commun, elle se prête particulièrement au transport de porte à porte, pour les aéroports comme pour les rendez-vous du quotidien.',
    ],
    needs: [
      'Transferts aéroports au départ de Montesson.',
      'Transport médical conventionné (CPAM) vers vos rendez-vous de soins.',
      'Déplacements professionnels vers Paris, La Défense et les gares.',
      'Trajets privés et liaisons locales.',
    ],
    destinations: [
      { label: 'Roissy CDG / Orly', detail: 'Transferts aéroports organisés.' },
      { label: 'La Défense', detail: 'Déplacements d’affaires.' },
      { label: 'Hôpitaux et cliniques', detail: 'Trajets médicaux conventionnés.' },
      { label: 'Chatou & Sartrouville', detail: 'Liaisons locales.' },
    ],
    practical: [
      'Prise en charge à l’adresse de votre choix à Montesson.',
      'Solution adaptée aux quartiers peu desservis par les transports en commun.',
      'Réservation conseillée, surtout pour les départs matinaux.',
    ],
    faq: [
      {
        question: 'Desservez-vous toute la commune de Montesson ?',
        answer:
          'Oui, du centre aux quartiers de la plaine et des bords de Seine. La prise en charge se fait à l’adresse de votre choix, sur réservation.',
      },
    ],
  },
  {
    slug: 'taxi-rueil-malmaison',
    name: 'Rueil-Malmaison',
    title: 'Taxi à Rueil-Malmaison',
    h1: 'Taxi à Rueil-Malmaison : RER A, La Défense et aéroports',
    metaTitle: 'Taxi Rueil-Malmaison | RER A, La Défense, Aéroports',
    metaDescription:
      'Taxi à Rueil-Malmaison 24h/24 et 7j/7 : RER A, La Défense, aéroports Orly et Roissy, transport médical. Réservez en ligne ou par téléphone.',
    postalCode: '92500',
    tagline: 'Votre taxi de proximité à Rueil-Malmaison',
    context: [
      'Rueil-Malmaison, grande ville des Hauts-de-Seine aux portes de l’Ouest parisien, est voisine de Chatou et desservie par le RER A, à quelques minutes de La Défense.',
      'Entre pôles d’affaires, quartiers résidentiels et sites comme le château de Malmaison, les besoins de transport y sont variés, du déplacement professionnel au trajet médical.',
    ],
    needs: [
      'Déplacements professionnels vers La Défense et Paris.',
      'Transferts aéroports au départ de Rueil-Malmaison.',
      'Transport médical conventionné (CPAM) vers vos rendez-vous de soins.',
      'Trajets privés, sorties et liaisons locales.',
    ],
    destinations: [
      { label: 'La Défense', detail: 'Déplacements d’affaires, à quelques minutes.' },
      { label: 'Roissy CDG / Orly', detail: 'Transferts aéroports organisés.' },
      { label: 'Hôpitaux et cliniques', detail: 'Trajets médicaux conventionnés.' },
      { label: 'Chatou & Paris Ouest', detail: 'Liaisons locales et professionnelles.' },
    ],
    practical: [
      'Prise en charge à l’adresse de votre choix à Rueil-Malmaison.',
      'Accès rapide à La Défense et aux grands axes (A86, A13).',
      'Service sur réservation, 24h/24 et 7j/7.',
    ],
    faq: [
      {
        question: 'Assurez-vous les trajets vers La Défense ?',
        answer:
          'Oui. Rueil-Malmaison est à quelques minutes de La Défense : nous organisons vos déplacements professionnels de porte à porte, ponctuels, sur réservation.',
      },
      {
        question: 'Proposez-vous le transport médical conventionné ?',
        answer:
          'Oui. Sur prescription médicale, nous assurons le transport assis conventionné (CPAM) vers vos consultations, examens, dialyses ou séjours hospitaliers.',
      },
    ],
  },
  {
    slug: 'taxi-carrieres-sur-seine',
    name: 'Carrières-sur-Seine',
    title: 'Taxi à Carrières-sur-Seine',
    h1: 'Taxi à Carrières-sur-Seine : bords de Seine et aéroports',
    metaTitle: 'Taxi Carrières-sur-Seine | Gare, Aéroports 24h/24 et 7j/7',
    metaDescription:
      'Taxi à Carrières-sur-Seine 24h/24 et 7j/7 : gare, aéroports Orly et Roissy, transport médical conventionné. Réservez en ligne ou par téléphone.',
    postalCode: '78420',
    tagline: 'Votre taxi de proximité à Carrières-sur-Seine',
    context: [
      'Carrières-sur-Seine, nichée dans la boucle de la Seine entre Chatou et Houilles, est une commune résidentielle au cadre préservé.',
      'Ses coteaux, ses quais et ses quartiers pavillonnaires appellent un transport de porte à porte pratique, pour les aéroports comme pour les trajets du quotidien.',
      'Par ailleurs, la commune n’a pas de gare sur son territoire. Pour rejoindre le RER A à Chatou–Croissy ou la gare Houilles–Carrières, le taxi assure donc une liaison directe. Ainsi, vous voyagez sans correspondance, même tôt le matin ou avec des bagages.',
    ],
    needs: [
      'Transferts aéroports au départ de Carrières-sur-Seine.',
      'Transport médical conventionné (CPAM) vers vos rendez-vous de soins.',
      'Déplacements professionnels vers Paris et La Défense.',
      'Liaisons vers les gares et les communes voisines.',
    ],
    destinations: [
      { label: 'Roissy CDG / Orly', detail: 'Transferts aéroports.' },
      { label: 'La Défense', detail: 'Déplacements d’affaires.' },
      { label: 'Hôpitaux et cliniques', detail: 'Trajets médicaux conventionnés.' },
      { label: 'Chatou & Houilles', detail: 'Liaisons locales.' },
    ],
    practical: [
      'Prise en charge à l’adresse de votre choix à Carrières-sur-Seine.',
      'Service de porte à porte, utile avec des bagages ou en soirée.',
      'Service sur réservation, 24h/24 et 7j/7.',
    ],
    faq: [
      {
        question: 'Venez-vous me chercher à domicile à Carrières-sur-Seine ?',
        answer:
          'Oui. La prise en charge se fait à l’adresse exacte de votre choix, du centre aux coteaux et aux bords de Seine, sur réservation.',
      },
      {
        question: 'Combien de temps à l’avance réserver à Carrières-sur-Seine ?',
        answer:
          'Nos trajets se réservent au plus tôt 4 heures à l’avance : indiquez votre adresse, votre destination et l’heure souhaitée, et nous confirmons la prise en charge. Pour un horaire précis (train, vol ou rendez-vous), anticipez davantage.',
      },
      {
        question: 'Assurez-vous les départs aéroport de nuit depuis Carrières-sur-Seine ?',
        answer:
          'Oui. Notre service fonctionne 24h/24 et 7j/7. Ainsi, nous assurons les départs très tôt le matin comme les retours tardifs. Pensez toutefois à réserver à l’avance pour garantir la disponibilité.',
      },
    ],
  },
  {
    slug: 'taxi-houilles',
    name: 'Houilles',
    title: 'Taxi à Houilles',
    h1: 'Taxi à Houilles : gare, aéroports et rendez-vous',
    metaTitle: 'Taxi Houilles | Gare, Aéroports, Rendez-vous',
    metaDescription:
      'Taxi à Houilles 24h/24 et 7j/7 : gare Houilles–Carrières, aéroports, transport médical conventionné. Réservez en ligne ou par téléphone.',
    postalCode: '78800',
    tagline: 'Votre taxi de proximité à Houilles',
    context: [
      'Houilles, commune animée de l’Ouest parisien proche de Chatou, est desservie par la gare Houilles–Carrières-sur-Seine (Transilien lignes J et L, RER A à proximité).',
      'Son tissu résidentiel dense et ses commerces génèrent de nombreux besoins de transport, des transferts aéroports aux trajets médicaux.',
      'En complément du train, le taxi apporte une réponse directe de porte à porte. En effet, il se révèle utile avec des bagages, en soirée ou pour un départ matinal vers un aéroport. De plus, il évite les correspondances et l’attente sur le quai.',
    ],
    needs: [
      'Transferts aéroports au départ de Houilles.',
      'Transport médical conventionné (CPAM) vers vos rendez-vous de soins.',
      'Déplacements professionnels vers Paris et La Défense.',
      'Compléments à la gare pour les trajets avec bagages ou horaires décalés.',
    ],
    destinations: [
      { label: 'Roissy CDG / Orly', detail: 'Transferts aéroports organisés.' },
      { label: 'La Défense', detail: 'Déplacements d’affaires.' },
      { label: 'Hôpitaux et cliniques', detail: 'Trajets médicaux conventionnés.' },
      { label: 'Chatou & Sartrouville', detail: 'Liaisons locales.' },
    ],
    practical: [
      'Prise en charge à l’adresse de votre choix à Houilles.',
      'Utile pour les départs matinaux ou les retours tardifs, hors horaires de train.',
      'Service sur réservation, 24h/24 et 7j/7.',
    ],
    faq: [
      {
        question: 'Puis-je réserver un trajet tôt le matin depuis Houilles ?',
        answer:
          'Oui. Pour les départs matinaux, notamment vers les aéroports, une réservation anticipée est recommandée afin de garantir la disponibilité.',
      },
      {
        question: 'Desservez-vous la gare de Houilles–Carrières ?',
        answer:
          'Oui. Nous assurons les transferts depuis et vers la gare de Houilles–Carrières, ainsi que vers les gares parisiennes. Par ailleurs, nous vous déposons à l’adresse de votre choix, sans correspondance.',
      },
      {
        question: 'Le transport médical conventionné est-il possible depuis Houilles ?',
        answer:
          'Oui. Sur prescription médicale, nous assurons le transport assis conventionné (CPAM) vers vos consultations, examens ou séjours hospitaliers. De plus, le tiers payant s’applique selon votre situation.',
      },
    ],
  },
  {
    slug: 'taxi-le-pecq',
    name: 'Le Pecq',
    title: 'Taxi au Pecq',
    h1: 'Taxi au Pecq : gare RER A et transferts aéroports',
    metaTitle: 'Taxi Le Pecq | Gare RER A, Orly et Roissy',
    metaDescription:
      'Taxi au Pecq (78) 24h/24 et 7j/7 : gare RER A Le Vésinet–Le Pecq, aéroports Orly et Roissy, transport médical conventionné. Réservez en ligne ou par téléphone.',
    postalCode: '78230',
    tagline: 'Votre taxi de proximité au Pecq',
    context: [
      'Le Pecq, commune des bords de Seine au pied de Saint-Germain-en-Laye, est voisine du Vésinet et toute proche de Chatou.',
      'Entre les quais, le centre et les quartiers résidentiels, les besoins de transport y sont nombreux : aéroports, rendez-vous médicaux, trajets professionnels et sorties.',
      'La commune partage la gare RER A Le Vésinet–Le Pecq. En complément du train, le taxi assure une liaison directe de porte à porte. Ainsi, vous voyagez sans correspondance, même tôt le matin ou avec des bagages.',
    ],
    needs: [
      'Transferts aéroports au départ du Pecq.',
      'Transport médical conventionné (CPAM) vers vos rendez-vous de soins.',
      'Déplacements professionnels vers Paris et La Défense.',
      'Compléments au RER A pour les trajets avec bagages ou horaires décalés.',
    ],
    destinations: [
      { label: 'Roissy CDG / Orly', detail: 'Transferts aéroports organisés.' },
      { label: 'La Défense', detail: 'Déplacements d’affaires.' },
      { label: 'Hôpitaux et cliniques', detail: 'Trajets médicaux conventionnés.' },
      { label: 'Chatou & Le Vésinet', detail: 'Liaisons locales.' },
    ],
    practical: [
      'Prise en charge à l’adresse de votre choix au Pecq.',
      'Service de porte à porte, utile avec des bagages ou en soirée.',
      'Service sur réservation, 24h/24 et 7j/7.',
    ],
    faq: [
      {
        question: 'Desservez-vous la gare du Vésinet–Le Pecq ?',
        answer:
          'Oui. Nous assurons les transferts depuis et vers la gare Le Vésinet–Le Pecq (RER A), ainsi que vers les gares parisiennes. Par ailleurs, nous vous déposons à l’adresse de votre choix, sans correspondance.',
      },
      {
        question: 'Assurez-vous les trajets médicaux depuis Le Pecq ?',
        answer:
          'Oui. Sur prescription médicale, nous assurons le transport assis conventionné (CPAM) vers vos consultations, examens et séjours hospitaliers, à l’adresse de votre choix.',
      },
    ],
  },
  {
    slug: 'taxi-nanterre',
    name: 'Nanterre',
    title: 'Taxi à Nanterre',
    h1: 'Taxi à Nanterre : La Défense, gares et aéroports',
    metaTitle: 'Taxi Nanterre | La Défense, Gares, Aéroports',
    metaDescription:
      'Taxi à Nanterre (92) 24h/24 et 7j/7 : La Défense, RER A, aéroports Orly et Roissy, transport médical conventionné. Réservez en ligne ou par téléphone.',
    postalCode: '92000',
    tagline: 'Votre taxi de proximité à Nanterre',
    context: [
      'Nanterre, préfecture des Hauts-de-Seine aux portes de La Défense, est voisine de Rueil-Malmaison et proche de Chatou.',
      'Entre le quartier d’affaires, l’université et les zones résidentielles, les besoins de transport y sont variés : aéroports, déplacements professionnels, rendez-vous médicaux et trajets du quotidien.',
      'La ville est desservie par le RER A (Nanterre-Préfecture, Nanterre-Ville, Nanterre-Université) et le Transilien. En complément, le taxi offre une liaison directe de porte à porte, notamment avec des bagages ou aux horaires décalés.',
    ],
    needs: [
      'Déplacements professionnels vers La Défense et Paris.',
      'Transferts aéroports au départ de Nanterre.',
      'Transport médical conventionné (CPAM) vers vos rendez-vous de soins.',
      'Liaisons vers les gares et les communes voisines.',
    ],
    destinations: [
      { label: 'La Défense', detail: 'Déplacements d’affaires de porte à porte.' },
      { label: 'Roissy CDG / Orly', detail: 'Transferts aéroports organisés.' },
      { label: 'Hôpitaux et cliniques', detail: 'Trajets médicaux conventionnés.' },
      { label: 'Chatou & Rueil-Malmaison', detail: 'Liaisons locales.' },
    ],
    practical: [
      'Prise en charge à l’adresse de votre choix à Nanterre.',
      'Idéal pour les déplacements d’affaires vers La Défense et les trajets avec bagages.',
      'Service sur réservation, 24h/24 et 7j/7.',
    ],
    faq: [
      {
        question: 'Assurez-vous les trajets vers La Défense depuis Nanterre ?',
        answer:
          'Oui. Nanterre est aux portes de La Défense : nous organisons vos déplacements professionnels de porte à porte, ponctuels, sur réservation. Par ailleurs, nous desservons Paris et les gares parisiennes.',
      },
      {
        question: 'Proposez-vous le transport médical conventionné à Nanterre ?',
        answer:
          'Oui. Sur prescription médicale, nous assurons le transport assis conventionné (CPAM) vers vos consultations, examens, dialyses ou séjours hospitaliers, avec le tiers payant selon votre situation.',
      },
    ],
  },
  {
    slug: 'taxi-yvelines',
    name: 'Ouest parisien',
    title: 'Taxi dans l’Ouest parisien',
    postalCode: '78',
    tagline: 'Un service de proximité dans tout l’Ouest parisien',
    bookingCity: 'Chatou',
    heroLede:
      'Besoin d’un taxi dans l’Ouest parisien ? Basés à Chatou, nous rayonnons sur Croissy-sur-Seine, Le Vésinet, Montesson, Rueil-Malmaison et les communes voisines, et vers Paris, La Défense et les aéroports franciliens, 24h/24 et 7j/7, sur réservation.',
    context: [
      'Basés à Chatou, nous assurons un service de taxi de proximité dans tout l’Ouest parisien : Croissy-sur-Seine, Le Vésinet, Montesson, Rueil-Malmaison, Carrières-sur-Seine, Houilles, Nanterre, Le Pecq et les communes voisines.',
      'Cette page régionale regroupe nos zones desservies. Retrouvez plus bas la liste des communes où nous assurons une prise en charge de porte à porte, ainsi que nos liaisons vers Paris, La Défense et les aéroports.',
    ],
    needs: [
      'Transferts vers tous les aéroports franciliens (Roissy, Orly, Le Bourget, Beauvais).',
      'Transport médical conventionné (CPAM), sur prescription.',
      'Déplacements professionnels vers Paris, La Défense et les pôles d’affaires.',
      'Trajets privés et liaisons entre communes et gares (RER A, Transilien).',
    ],
    destinations: [
      { label: 'Aéroports franciliens', detail: 'Roissy CDG, Orly, Le Bourget, Beauvais.' },
      { label: 'La Défense & Paris', detail: 'Déplacements professionnels et privés.' },
      { label: 'Communes de l’Ouest parisien', detail: 'Croissy, Le Vésinet, Montesson, Rueil…' },
      { label: 'Gares du secteur', detail: 'RER A (Chatou–Croissy) et Transilien (J, L).' },
    ],
    practical: [
      'Zone de service : Chatou, l’Ouest parisien et l’Île-de-France.',
      'Trajets de porte à porte sur réservation, 24h/24 et 7j/7.',
      'Estimations et modalités communiquées lors de la demande.',
    ],
    faq: [
      {
        question: 'Quelles communes desservez-vous autour de Chatou ?',
        answer:
          'Depuis Chatou, nous desservons notamment Croissy-sur-Seine, Le Vésinet, Montesson, Rueil-Malmaison, Carrières-sur-Seine, Houilles, Nanterre et Le Pecq, ainsi que les communes voisines. Votre commune n’y figure pas ? Contactez-nous pour confirmation.',
      },
      {
        question: 'Quelle est votre zone de service exacte ?',
        answer:
          'Nous rayonnons depuis Chatou sur l’Ouest parisien et l’Île-de-France. N’hésitez pas à nous préciser votre trajet lors de votre demande.',
      },
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}

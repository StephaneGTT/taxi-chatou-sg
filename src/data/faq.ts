import type { FaqItem } from '@/types';

/** FAQ générale affichée sur la page d'accueil (alimente aussi le JSON-LD FAQPage). */
export const homeFaq: FaqItem[] = [
  {
    question: 'Comment faire appel à un taxi ?',
    answer:
      'Remplissez le formulaire en ligne ou appelez-nous au 06 12 29 51 54 (également joignable par SMS et WhatsApp), en précisant votre départ, votre destination, la date, l’heure et le nombre de passagers et de bagages. Nous revenons ensuite vers vous pour confirmer : aucune réservation ne part automatiquement.',
  },
  {
    question: 'Quels sont les tarifs des taxis dans les Yvelines en 2026 ?',
    answer:
      'Dans les Yvelines, en 2026 : prise en charge 3,00 €, kilomètre de 1,00 € à 3,00 € selon le tarif A, B, C ou D, heure d’attente 41,56 € et minimum de course 8 €. S’ajoutent des suppléments réglementés : 2 € par bagage encombrant et 4 € dès le 5ᵉ passager. Le détail figure dans notre grille tarifaire.',
  },
  {
    question: 'Quel est le prix d’un taxi pour 20 km ?',
    answer:
      'Comptez environ 23 € à 43 € pour 20 km de jour, selon que le taxi revient en charge (tarif A) ou à vide (tarif C) : prise en charge 3,00 € + 20 km. De nuit, le dimanche et les jours fériés, la fourchette monte à 33 € – 63 €. L’attente et les suppléments s’ajoutent ; le taximètre fait foi.',
  },
  {
    question: 'Comment calcule-t-on le prix d’une course ?',
    answer:
      'Le taximètre additionne trois éléments : la prise en charge, la distance et le temps d’attente. Le tarif kilométrique varie selon le jour, l’heure et le retour du taxi, et des suppléments réglementés peuvent s’ajouter. Le minimum de course reste de 8 €.',
  },
  {
    question: 'Comment connaître le prix de ma course ?',
    answer:
      'Demandez une estimation avant le départ : indiquez votre adresse, votre destination et votre horaire, et nous vous donnons une fourchette indicative. Le taximètre fixe toutefois le prix définitif : il additionne la prise en charge, la distance et le temps d’attente, sans dépasser les tarifs réglementés.',
  },
  {
    question: 'Est-il préférable de réserver un taxi à l’avance ?',
    answer:
      'Oui, surtout pour une gare, un aéroport ou un rendez-vous à heure fixe : vous avez ainsi un chauffeur à l’heure convenue, bagages compris. Pour un départ tôt le matin ou tard le soir, anticipez davantage. Une course de dernière minute reste possible, selon les disponibilités.',
  },
  {
    question: 'Comment réserver un taxi à Chatou pour un départ immédiat ?',
    answer:
      'Appelez-nous directement au 06 12 29 51 54. Précisez votre adresse à Chatou (78400) et votre destination : nous vous indiquons le délai d’arrivée du chauffeur, en fonction de sa disponibilité. Pour un horaire précis (train, vol, rendez-vous), la réservation à l’avance reste préférable.',
  },
  {
    question: 'Proposez-vous un taxi 24h/24, y compris la nuit ?',
    answer:
      'Oui, notre service fonctionne 24h/24 et 7j/7 : départ à l’aube pour un vol matinal, retour de soirée, course de nuit après le dernier RER. Un tarif de nuit réglementé s’applique en général entre 19h et 7h, ainsi que les dimanches et jours fériés ; le taximètre fait foi.',
  },
  {
    question: 'Peut-on réserver un taxi pour Orly ou Roissy depuis Chatou ?',
    answer:
      'Oui. Nous assurons les transferts vers Paris-Charles-de-Gaulle, Orly et Le Bourget. Réservez à l’avance : précisez votre heure de départ ou votre numéro de vol, ainsi que vos passagers et bagages. Vous pouvez demander un forfait aéroport à prix fixe, convenu à l’avance, ou laisser le taximètre calculer le prix selon le tarif des Yvelines.',
  },
  {
    question: 'Proposez-vous un taxi conventionné (transport médical remboursé) ?',
    answer:
      'Oui. Nous sommes taxi conventionné par l’Assurance Maladie : sur prescription médicale de transport, vos trajets de soins (consultations, examens, hôpital, dialyse, cures) sont pris en charge, avec le tiers payant selon votre situation. Munissez-vous de votre bon de transport lors de la réservation.',
  },
  {
    question: 'Quelles zones desservez-vous ?',
    answer:
      'Depuis Chatou, notre service rayonne sur l’Ouest parisien et l’Île-de-France. Nous desservons notamment Croissy-sur-Seine, Le Vésinet, Montesson, Rueil-Malmaison, Carrières-sur-Seine et Houilles, ainsi que les communes voisines. Votre commune n’y figure pas ? Contactez-nous pour confirmation.',
  },
  {
    question: 'Quels sont les transports en commun disponibles à Chatou ?',
    answer:
      'Chatou est desservie par le RER A (gare de Chatou–Croissy) et plusieurs lignes de bus vers Croissy-sur-Seine, Le Vésinet, Rueil-Malmaison et Montesson. Le taxi reste la solution la plus pratique en soirée après les derniers passages, tôt le matin, avec des bagages ou pour rejoindre un aéroport sans correspondance.',
  },
  {
    question: 'Quels moyens de paiement acceptez-vous ?',
    answer:
      'Vous réglez votre course par carte bancaire (Visa, Mastercard, American Express) ou en espèces. Vous pouvez aussi préciser votre moyen de paiement dès la réservation.',
  },
  {
    question: 'Puis-je voyager avec des bagages ?',
    answer:
      'Oui. Indiquez le nombre de passagers et de bagages lors de votre demande : nous adaptons le véhicule à votre trajet, notamment pour les transferts aéroports. Un supplément réglementé peut s’appliquer aux bagages encombrants.',
  },
];

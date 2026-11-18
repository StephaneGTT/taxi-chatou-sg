export type NavItem = {
  label: string;
  href: string;
};

/** Navigation principale (header). */
export const mainNav: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Trajets', href: '/trajets' },
  { label: 'Destinations', href: '/zones' },
  { label: 'Avis', href: '/#avis' },
  { label: 'Contact', href: '/contact' },
];

/** Liens de pied de page regroupés par colonne. */
export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: 'Services',
    items: [
      { label: 'Transferts aéroports', href: '/services/transfert-aeroport' },
      { label: 'Transport médical (CPAM)', href: '/services/transport-medical' },
      { label: 'Taxi professionnel', href: '/services/taxi-professionnel' },
      { label: 'Trajets privés', href: '/services/trajets-prives' },
      { label: 'Mise à disposition', href: '/services/mise-a-disposition' },
    ],
  },
  {
    title: 'Zones desservies',
    items: [
      { label: 'Taxi Croissy-sur-Seine', href: '/zones/taxi-croissy-sur-seine' },
      { label: 'Taxi Le Vésinet', href: '/zones/taxi-le-vesinet' },
      { label: 'Taxi Montesson', href: '/zones/taxi-montesson' },
      { label: 'Taxi Rueil-Malmaison', href: '/zones/taxi-rueil-malmaison' },
      { label: 'Toutes les zones', href: '/zones' },
      { label: 'Nos trajets (aéroports, gares…)', href: '/trajets' },
    ],
  },
  {
    title: 'Informations',
    items: [
      { label: 'À propos', href: '/a-propos' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'CGV', href: '/cgv' },
      { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
      { label: 'Politique de cookies', href: '/politique-cookies' },
      { label: 'Plan du site', href: '/plan-du-site' },
    ],
  },
];

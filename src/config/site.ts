/**
 * Configuration centralisée du site.
 *
 * ⚠️ IMPORTANT — DONNÉES À PERSONNALISER
 * Les valeurs commentées « À COMPLÉTER » sont en attente (ex. n° ADS taxi).
 * Ne jamais présenter une valeur manquante comme réelle tant qu'elle n'a pas été confirmée.
 */

/** Normalise une URL : ajoute https:// si le protocole manque et retire le slash final. */
function normalizeUrl(value: string): string {
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/$/, '');
}

const siteUrl = normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://taxi-chatou-sg.com');

export const siteConfig = {
  /** Nom commercial affiché */
  name: 'Taxi Stéphane Géatti',
  description:
    'Taxi à Chatou (78) et dans l’Ouest parisien : transferts aéroports et gares, trajets professionnels et privés, longue distance. Véhicule 100 % électrique, 24h/24 et 7j/7 sur réservation.',

  url: siteUrl,
  locale: 'fr-FR',

  /** Coordonnées de l'entreprise (réelles). */
  contact: {
    phone: '06 12 29 51 54',
    phoneHref: 'tel:+33612295154',
    email: 'taxi.geatti@gmail.com',
    emailHref: 'mailto:taxi.geatti@gmail.com',
    // WhatsApp : numéro au format international sans "+" (pour les liens wa.me).
    whatsapp: '33612295154',
    whatsappHref: 'https://wa.me/33612295154',
  },

  /**
   * Adresse / implantation.
   * Siège administratif réel (entrepreneur individuel) à Rueil-Malmaison.
   * Le service rayonne principalement sur Chatou et l'Ouest parisien (rattachement taxi : Chatou).
   */
  address: {
    city: 'Rueil-Malmaison',
    postalCode: '92500',
    region: 'Île-de-France',
    street: '15 avenue Ossart',
    // Coordonnées géographiques (Rueil-Malmaison, approximatives).
    geo: { latitude: 48.8773, longitude: 2.181 },
  },

  /** Zone principale décrite sur le site. */
  serviceArea: 'Chatou, Croissy-sur-Seine, Montesson, Rueil-Malmaison et l’Ouest parisien',

  /** Horaires — service sur réservation. */
  hours: {
    label: 'Service sur réservation, 24h/24 et 7j/7',
    note: 'Réservation par appel, SMS, e-mail ou WhatsApp.',
  },

  /**
   * Réseaux sociaux — laisser une chaîne vide pour masquer le lien.
   * À COMPLÉTER si des comptes existent.
   */
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },

  /**
   * Informations légales — Entrepreneur individuel.
   * Ne jamais inventer de n° ADS/licence tant qu'il n'est pas communiqué.
   */
  legal: {
    legalName: 'Stéphane Géatti',
    legalForm: 'Entrepreneur individuel (EI)',
    capital: '', // Sans objet (entrepreneur individuel)
    rcs: '', // Sans objet (EI immatriculé au Registre National des Entreprises)
    siren: '907 820 054',
    euid: '', // Non communiqué
    registrationDate: '', // Non communiqué
    // Siège administratif (entrepreneur individuel).
    headquarters: '15 avenue Ossart, 92500 Rueil-Malmaison',
    operatorName: 'Stéphane Géatti', // Exploitant
    siret: '907 820 054 00035', // SIRET complet (14 chiffres)
    vatNumber: 'FR01907820054', // N° de TVA intracommunautaire
    licenseNumber: '2024/02', // Autorisation de stationnement (taxi) — N° ADS
    stationZone: 'Chatou', // Commune de rattachement / zone de stationnement du taxi
    adsAuthority: 'la Mairie de Chatou', // Autorité ayant délivré l'ADS
    adsDate: '19 novembre 2024', // Date de délivrance de l'ADS
    // Médiateur de la consommation : CM2C (coordonnées officielles — cm2c.net).
    mediatorName: 'CM2C, Centre de la Médiation de la Consommation de Conciliateurs de Justice',
    mediatorAddress: '49 rue de Ponthieu, 75008 Paris',
    mediatorPhone: '01 89 47 00 14',
    mediatorUrl: 'https://www.cm2c.net',
    lastUpdated: '18 novembre 2026', // Dernière mise à jour des mentions légales
  },

  /**
   * Référencements officiels / tiers de confiance vérifiables (signaux de crédibilité).
   * Laisser vide tant qu'aucune fiche publique n'est à référencer.
   */
  officialListing: {
    mairieChambourcyUrl: '',
  },

  /** Éditeur du site (agence web) — distinct de l'exploitant du service de taxi. */
  publisher: {
    name: 'SEO Acquisition',
    parentEntity: '',
    publicationDirector: 'Stéphane Géatti',
    url: 'https://seo-acquisition.com',
  },

  /** Image Open Graph par défaut (aperçu lors du partage de liens). */
  ogImage: '/images/vehicule/taxi-chatou-skoda-enyaq-exterieur.webp',
} as const;

/** Raccourci : le site est-il prêt à annoncer des coordonnées réelles ? */
export const hasRealContact = true; // Coordonnées réelles renseignées.

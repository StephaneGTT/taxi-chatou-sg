/**
 * Avis clients RÉELS issus de la fiche Google (Google Business Profile / GMB).
 *
 * ⚠️ N'ajouter ici que des avis authentiques réellement publiés sur Google.
 * Ne jamais inventer d'avis, de note ou d'auteur.
 *
 * Fiche « Taxi Stéphane Géatti » : 5,0/5 sur 9 avis Google.
 * 5 avis sont récupérés mot pour mot ci-dessous ; les 4 autres ne sont pas
 * affichés car ils ne sont pas accessibles publiquement sans connexion Google.
 */

export type Review = {
  /** Nom de l'auteur tel qu'affiché sur Google */
  author: string;
  /** Note sur 5 (entier de 1 à 5) */
  rating: number;
  /** Texte de l'avis */
  text: string;
  /** Date de l'avis (ISO, ex. "2026-09-14") — facultatif */
  date?: string;
  /** Indication relative affichée si pas de date (ex. "il y a 2 mois") — facultatif */
  relativeTime?: string;
};

/**
 * Fiche Google (Google Business Profile) de l'établissement.
 * Données publiques affichées sur Google — à mettre à jour si elles évoluent.
 * Mettre `url` à '' pour masquer les liens vers Google.
 */
export const googleBusiness = {
  name: 'Taxi Stéphane Géatti',
  /** Note moyenne affichée sur Google */
  rating: 5.0,
  /** Nombre total d'avis sur Google */
  reviewCount: 9,
  /** Lien vers la fiche (voir les avis) */
  url: 'https://share.google/OAPT9kTkgDXhCUTOu',
  /** Lien direct « écrire un avis » (ouvre le formulaire Google). Vide = masqué. */
  reviewUrl: 'https://g.page/r/CUjPVGyWuB9QEBM/review',
  /** URL d'intégration Google Maps (iframe, sans clé d'API) */
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Taxi+St%C3%A9phane+G%C3%A9atti,+15+Avenue+Ossart,+92500+Rueil-Malmaison&output=embed',
};

export const reviews: Review[] = [
  {
    author: 'mfrance manceau',
    rating: 5,
    relativeTime: 'il y a 2 mois',
    text: 'Professionnel : ponctuel, attentionné, à l’écoute des besoins de ses clients. Je vous recommande de faire appel aux services de Stéphane, vous en serez pleinement satisfait(e). Il respectera votre choix de parler ou de garder le silence et sa conduite fluide est aussi appréciable.',
  },
  {
    author: 'Alexandre WEHBI',
    rating: 5,
    relativeTime: 'il y a un an',
    text: 'J’ai recours aux services de Stéphane pour m’emmener et venir me récupérer à l’aéroport pour mes déplacements professionnels. Conduite calme, véhicule propre et toujours ponctuel. Je recommande.',
  },
  {
    author: 'Clement Thomas',
    rating: 5,
    relativeTime: 'il y a un an',
    text: 'Je recommande Stéphane pour sa fiabilité et son professionnalisme. Étant en congés, il a tout de même pris le temps d’organiser la course pour répondre à ma demande.',
  },
  {
    author: 'mita patel',
    rating: 5,
    relativeTime: 'il y a un an',
    text: 'Chauffeur super agréable et sociable, toujours souriant et soucieux de bien faire en toute circonstance. Le chauffeur le plus humain que j’ai jamais rencontré. N’hésitez plus !',
  },
  {
    author: 'Nicolas Alexandre',
    rating: 5,
    relativeTime: 'il y a un an',
    text: 'Chauffeur ponctuel et professionnel, conduite très agréable. Merci !',
  },
];

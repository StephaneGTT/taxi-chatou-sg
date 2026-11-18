/**
 * Clients professionnels (B2B) affichés dans la section « Ils nous font confiance ».
 *
 * ⚠️ N'ajouter que des clients réels, et s'assurer de disposer de l'autorisation
 * d'afficher leur nom / logo (les marques et hôtels exigent souvent un accord).
 *
 * - Sans `logo` : le nom est affiché en toutes lettres (joli repli, aucun fichier requis).
 * - Avec `logo` : déposer le fichier dans `public/images/clients/` et indiquer son chemin.
 */

export type Client = {
  /** Nom du client (sert d'alt du logo et de repli texte) */
  name: string;
  /** Chemin du logo, ex. "/images/clients/ritz.svg" — facultatif */
  logo?: string;
  /** Lien vers le site du client — facultatif */
  url?: string;
  /** Logo blanc sur fond sombre : affiché dans une pastille sombre pour rester lisible sur la section claire. */
  darkBg?: boolean;
};

// ⚠️ À COMPLÉTER avec les VRAIS clients de Taxi Stéphane Géatti (avec autorisation d'afficher
// leur nom / logo). Tant que la liste est vide, la section « Ils nous font confiance » est
// automatiquement masquée (voir ClientsSection). Ne jamais réutiliser les logos de l'ancien client.
export const clients: Client[] = [];

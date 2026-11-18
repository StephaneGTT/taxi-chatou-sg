import Link from 'next/link';
import { CalendarCheck, Phone } from 'lucide-react';
import { WhatsAppIcon, whatsappUrl } from '@/components/ui/WhatsAppIcon';
import { siteConfig, hasRealContact } from '@/config/site';

/**
 * Barre d'action fixe en bas d'écran (mobile/tablette uniquement) : accès
 * immédiat à la réservation, à l'appel et à WhatsApp. Remplace les boutons
 * flottants sur petit écran. Le padding bas du body (layout) évite qu'elle
 * masque le contenu.
 */
export function MobileReserveBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-900/10 bg-cream/95 px-4 pt-3 backdrop-blur lg:hidden"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="mx-auto flex max-w-container items-center gap-2.5">
        {hasRealContact && (
          <a
            href={siteConfig.contact.phoneHref}
            aria-label={`Appeler le ${siteConfig.contact.phone}`}
            className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-[var(--radius)] border border-ink-900/15 text-ink-900 transition-colors hover:border-ink-900/35"
          >
            <Phone className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </a>
        )}
        {siteConfig.contact.whatsapp && (
          <a
            href={whatsappUrl(
              siteConfig.contact.whatsapp,
              'Bonjour, je souhaite obtenir des informations pour un trajet en taxi à Chatou.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Écrivez-nous sur WhatsApp"
            className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-[var(--radius)] border border-ink-900/15 text-[#25D366] transition-colors hover:border-ink-900/35"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        )}
        <Link
          href="/#reservation"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-[var(--radius)] bg-champagne font-semibold text-ink-900 transition-colors hover:bg-champagne-light"
        >
          <CalendarCheck className="h-4 w-4" strokeWidth={2} aria-hidden />
          Réserver mon taxi
        </Link>
      </div>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Landmark } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { WhatsAppIcon, whatsappUrl } from '@/components/ui/WhatsAppIcon';
import { PaymentMethods } from '@/components/ui/PaymentMethods';
import { footerNav } from '@/config/navigation';
import { siteConfig, hasRealContact } from '@/config/site';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#00091f] text-cream/90">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Marque + coordonnées */}
          <div>
            <Link href="/" className="inline-flex items-center" aria-label={`${siteConfig.name}, accueil`}>
              <Image
                src="/images/branding/logo-geatti.webp"
                alt={siteConfig.name}
                width={1774}
                height={887}
                sizes="230px"
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              Taxi à Chatou et dans l’Ouest parisien. Transferts aéroports, transport médical
              conventionné, trajets professionnels et privés. Véhicule 100 % électrique, 7j/7.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden />
                <span>
                  {siteConfig.address.street ? (
                    <>
                      {siteConfig.address.street}, {siteConfig.address.postalCode}{' '}
                      {siteConfig.address.city}
                      <br />
                    </>
                  ) : null}
                  <span className="text-mist">{siteConfig.serviceArea}</span>
                </span>
              </li>
              {hasRealContact ? (
                <>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-champagne" aria-hidden />
                    <a href={siteConfig.contact.phoneHref} className="hover:text-champagne">
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-champagne" aria-hidden />
                    <a href={siteConfig.contact.emailHref} className="hover:text-champagne">
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  {siteConfig.contact.whatsapp && (
                    <li className="flex items-center gap-3">
                      <WhatsAppIcon className="h-4 w-4 shrink-0 text-champagne" />
                      <a
                        href={whatsappUrl(siteConfig.contact.whatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-champagne"
                      >
                        WhatsApp
                      </a>
                    </li>
                  )}
                </>
              ) : (
                <li className="flex items-center gap-3 text-mist">
                  <Phone className="h-4 w-4 shrink-0 text-champagne" aria-hidden />
                  <span>Coordonnées à configurer avant publication.</span>
                </li>
              )}
            </ul>

            {/* Référencement officiel vérifiable (signal de confiance) — affiché si une fiche existe. */}
            {siteConfig.officialListing.mairieChambourcyUrl && (
              <a
                href={siteConfig.officialListing.mairieChambourcyUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="mt-6 inline-flex items-start gap-2.5 rounded-[var(--radius)] border border-champagne/30 bg-champagne/[0.08] px-3.5 py-2.5 text-xs leading-snug text-cream transition-colors hover:border-champagne/60"
              >
                <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden strokeWidth={1.5} />
                <span>
                  Référencé à l’annuaire officiel
                  <br className="hidden sm:block" /> de la Ville de Chatou
                </span>
              </a>
            )}
          </div>

          {/* Colonnes de navigation */}
          {footerNav.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="eyebrow text-champagne">{column.title}</h2>
              <ul className="mt-5 space-y-3 text-sm text-mist">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-cream">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <PaymentMethods tone="light" className="mt-12 border-t border-white/10 pt-6" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <p className="max-w-md sm:text-right">
            Édité par{' '}
            <a
              href={siteConfig.publisher.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="underline underline-offset-2 hover:text-champagne"
            >
              {siteConfig.publisher.name}
            </a>
            {siteConfig.publisher.parentEntity ? ` (${siteConfig.publisher.parentEntity})` : ''}
          </p>
        </div>
      </Container>
    </footer>
  );
}

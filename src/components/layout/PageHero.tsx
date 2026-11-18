import { Container } from '@/components/ui/Container';
import { Breadcrumb, type Crumb } from '@/components/ui/Breadcrumb';
import { ReassuranceBar } from '@/components/home/ReassuranceBar';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
};

/** En-tête des pages internes : bannière marine sobre, filet beige signature. */
export function PageHero({ eyebrow, title, description, crumbs }: PageHeroProps) {
  return (
    <>
    <section className="relative overflow-hidden bg-ink-900 pb-16 pt-[120px] text-white sm:pt-[136px]">
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full"
        aria-hidden
        style={{ background: 'radial-gradient(circle, rgba(216,195,165,0.10), transparent 70%)' }}
      />
      <Container className="relative z-10">
        <Breadcrumb items={crumbs} tone="light" className="mb-8" />
        {eyebrow && (
          <div className="flex items-center gap-3">
            <span className="h-px w-10 shrink-0 bg-champagne" aria-hidden />
            <span className="eyebrow text-champagne">{eyebrow}</span>
          </div>
        )}
        <h1
          className="mt-5 max-w-3xl text-balance font-serif font-semibold leading-[1.05] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(2.1rem, 4vw, 3.4rem)' }}
        >
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist">{description}</p>
        )}
      </Container>
    </section>
    <ReassuranceBar />
    </>
  );
}

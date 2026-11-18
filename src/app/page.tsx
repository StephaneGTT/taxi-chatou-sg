import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { ReassuranceBar } from '@/components/home/ReassuranceBar';
import { BookingSection } from '@/components/home/BookingSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { VehicleShowcase } from '@/components/home/VehicleShowcase';
import { PassengerExperience } from '@/components/home/PassengerExperience';
import { WhyChoose } from '@/components/home/WhyChoose';
import { DestinationsSection } from '@/components/home/DestinationsSection';
import { PricingSection } from '@/components/home/PricingSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { BlogPreview } from '@/components/home/BlogPreview';
import { HomeGuide } from '@/components/home/HomeGuide';
import { FaqSection } from '@/components/home/FaqSection';
import { CTASection } from '@/components/home/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { getAllPosts } from '@/lib/blog';
import { homeFaq } from '@/data/faq';
import { buildMetadata, homePageGraph } from '@/lib/seo';

// Title + meta description propres à l'accueil (mot-clé « taxi à Chatou » en début).
// buildMetadata aligne automatiquement Open Graph et Twitter sur ce titre/description.
export const metadata: Metadata = buildMetadata({
  title: 'Taxi Chatou (78) - Réservation 24h/24 7j/7 | Taxi Géatti',
  description:
    'Taxi à Chatou (78), 24h/24 et 7j/7 : gares, aéroports (Orly, Roissy), transport médical conventionné CPAM, tarifs réglementés. Réservez en ligne.',
  path: '/',
  absoluteTitle: true,
});

export default function HomePage() {
  const posts = getAllPosts();

  // Sur l'accueil, on met en avant les guides liés à Chatou (titre, description
  // ou slug), puis on complète avec les articles les plus récents si besoin.
  const isChatouPost = (post: (typeof posts)[number]) =>
    /chatou/i.test(post.slug) ||
    /chatou/i.test(post.frontmatter.title) ||
    /chatou/i.test(post.frontmatter.description ?? '');
  const homePosts = [
    ...posts.filter(isChatouPost),
    ...posts.filter((post) => !isChatouPost(post)),
  ].slice(0, 3);

  return (
    <>
      <JsonLd data={homePageGraph(homeFaq)} />
      <Hero />
      <ReassuranceBar />
      <BookingSection />
      <ServicesSection />
      <VehicleShowcase />
      <PassengerExperience />
      <WhyChoose />
      <DestinationsSection />
      <PricingSection />
      <ReviewsSection />
      <AboutSection />
      <BlogPreview posts={homePosts} />
      <HomeGuide />
      <FaqSection items={homeFaq} />
      <CTASection />
    </>
  );
}

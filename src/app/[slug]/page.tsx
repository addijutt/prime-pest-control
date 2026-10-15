import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HomeHero from '../../components/HomeHero';
import UrgencySection from '../../components/sections/UrgencySection';
import WhatWeDoSection from '../../components/sections/WhatWeDoSection';
import ServiceAreaSection from '../../components/sections/ServiceAreaSection';
import WhyCallUsSection from '../../components/sections/WhyCallUsSection';
import FreeQuoteSection from '../../components/sections/FreeQuoteSection';
import SatisfactionGuaranteeSection from '../../components/sections/SatisfactionGuaranteeSection';
import TrustedByCustomersSection from '../../components/sections/TrustedByCustomersSection';
import WhyChooseUsSection from '../../components/sections/WhyChooseUsSection';
import FaqSection from '../../components/sections/FaqSection';
import { getPageContent } from '../../config/pageContent';

const SEO_META: Record<string, { title: string; description: string }> = {
  'free-quote': {
    title: 'Free Pest & Bird Control Quote Dubai | Prime Pest Control',
    description: 'Get a free, no-obligation pest and bird control quote in Dubai. WhatsApp us in seconds for a same-day response guaranteed.',
  },
  '24-7-service': {
    title: 'Fast Response Pest & Bird Control Dubai | Prime Pest Control',
    description: 'Fast response pest and bird control in Dubai. Call or WhatsApp 055 304 5256. We respond quickly across all communities.',
  },
  'same-day-appointment': {
    title: 'Same-Day Pest Control Dubai | Prime Pest Control',
    description: 'Book same-day pest control in Dubai. Available across Dubai Marina, Downtown, Business Bay, JBR, Jumeirah and all communities. WhatsApp now.',
  },
  'local-pest-control': {
    title: 'Local Pest Control Dubai | Prime Pest Control',
    description: 'Local pest control experts in Dubai. We cover every community with fast, reliable, 100% guaranteed service. WhatsApp 055 304 5256 for a free quote.',
  },
  'pest-control-near-me': {
    title: 'Pest Control in Dubai | Prime Pest Control | Same Day Service',
    description: 'Searching for pest control in Dubai? Prime Pest Control covers all communities with same-day service. Cockroaches, bed bugs, rodents & more. WhatsApp for a free quote.',
  },
  'exterminator-near-me': {
    title: 'Pest Exterminator Dubai | Prime Pest Control | 055 304 5256',
    description: 'Professional pest exterminator services in Dubai. We eliminate cockroaches, bed bugs, termites, rodents, wasps and 50+ pests. WhatsApp for a free quote.',
  },
  'local-pest-control-in-my-area': {
    title: 'Pest Control in My Area Dubai | Prime Pest Control',
    description: 'Local pest control anywhere in Dubai. Prime Pest Control technicians cover all areas with same-day appointments available. WhatsApp 055 304 5256.',
  },
  'rodent-control-near-me': {
    title: 'Rodent Control Dubai | Rat & Mouse Exterminator | Prime Pest Control',
    description: 'Expert rodent control in Dubai. We eliminate rats and mice from homes and businesses across all Dubai communities. Call or WhatsApp 055 304 5256.',
  },
  'rat-exterminator-near-me': {
    title: 'Rat Exterminator Dubai | Professional Rat Removal | Prime Pest Control',
    description: 'Fast, effective rat extermination in Dubai. Our specialists eliminate rat infestations from apartments, villas, and offices. WhatsApp for a free quote.',
  },
  'mice-exterminator-near-me': {
    title: 'Mice Exterminator Dubai | Mouse Control Services | Prime Pest Control',
    description: 'Professional mice exterminator in Dubai. We remove mouse infestations from homes and businesses quickly and safely. WhatsApp 055 304 5256.',
  },
  'yellow-jacket-nest-removal': {
    title: 'Yellow Jacket Removal Dubai | Wasp & Hornet Control | Prime Pest Control',
    description: 'Professional yellow jacket and wasp removal in Dubai. Safe, fast nest removal across all communities. WhatsApp for a free quote.',
  },
  'ant-exterminator-near-me': {
    title: 'Ant Control Dubai | Ant Exterminator Services | Prime Pest Control',
    description: 'Professional ant control and extermination in Dubai. We treat all ant species found in UAE homes and businesses. Same-day service. WhatsApp 055 304 5256.',
  },
  'spider-exterminator-near-me': {
    title: 'Spider Control Dubai | Spider Exterminator | Prime Pest Control',
    description: 'Expert spider extermination services in Dubai. Safe removal of all spider species from homes and businesses. WhatsApp for a free quote.',
  },
  'carpenter-bee-exterminator-near-me': {
    title: 'Bee Exterminator Dubai | Carpenter Bee Removal | Prime Pest Control',
    description: 'Professional carpenter bee and bee extermination in Dubai. Safe bee removal from homes and properties. WhatsApp 055 304 5256.',
  },
  'cockroach-exterminator-near-me': {
    title: 'Cockroach Control Dubai | Cockroach Exterminator | Prime Pest Control',
    description: 'Expert cockroach extermination in Dubai. We eliminate German, American and all cockroach species from homes and businesses. WhatsApp for a free quote.',
  },
  'roach-exterminator-near-me': {
    title: 'Roach Exterminator Dubai | Cockroach Treatment | Prime Pest Control',
    description: 'Fast, effective roach exterminator services in Dubai. We eliminate cockroach infestations with guaranteed results. WhatsApp 055 304 5256.',
  },
  'exterminator-for-house-centipedes': {
    title: 'Centipede Control Dubai | Exterminator Services | Prime Pest Control',
    description: 'Professional centipede extermination services in Dubai. We remove centipede infestations from homes and businesses. WhatsApp for a free quote.',
  },
  'pest-control-for-fleas': {
    title: 'Flea Control Dubai | Flea Treatment Services | Prime Pest Control',
    description: 'Expert flea control and treatment in Dubai. We eliminate flea infestations from homes, carpets and pet areas. WhatsApp 055 304 5256.',
  },
  'professional-flea-control': {
    title: 'Professional Flea Control Dubai | Guaranteed Results | Prime Pest Control',
    description: 'Professional flea control treatment in Dubai with 100% guaranteed results. Effective, pet-safe flea elimination. WhatsApp for a free quote.',
  },
  'mosquito-spraying-near-me': {
    title: 'Mosquito Control Dubai | Mosquito Spraying Services | Prime Pest Control',
    description: 'Professional mosquito control and spraying services across Dubai. Eliminate mosquitoes from gardens, pools and outdoor spaces. WhatsApp 055 304 5256.',
  },
  'tick-control-near-me': {
    title: 'Tick Control Dubai | Tick Exterminator Services | Prime Pest Control',
    description: 'Expert tick control services in Dubai. Protect your family and pets from tick infestations. WhatsApp for a free quote.',
  },
  'pest-control-for-bugs': {
    title: 'Bug Control Dubai | Insect Exterminator | Prime Pest Control',
    description: 'Comprehensive bug and insect control services in Dubai. We handle all types of bug infestations. Same-day service available. WhatsApp 055 304 5256.',
  },
  'bed-bug-exterminator-near-me': {
    title: 'Bed Bug Treatment Dubai | Bed Bug Exterminator | Prime Pest Control',
    description: 'Professional bed bug exterminator in Dubai. Complete elimination of bed bug infestations from hotels, apartments and villas. WhatsApp for a free quote.',
  },
  'termite-control': {
    title: 'Termite Control Dubai | Termite Treatment Services | Prime Pest Control',
    description: 'Expert termite control and treatment in Dubai. Protect your property from termite damage with our guaranteed solutions. WhatsApp 055 304 5256.',
  },
  'residential-pest-control': {
    title: 'Residential Pest Control Dubai | Home Pest Services | Prime Pest Control',
    description: 'Professional residential pest control services across Dubai. We protect homes from cockroaches, bed bugs, termites, rodents and 50+ pests. WhatsApp for a free quote.',
  },
  'residential-pest-control-service': {
    title: 'Residential Pest Control Services Dubai | Prime Pest Control',
    description: 'Reliable residential pest control services in Dubai. Covering all communities with same-day appointments available. 100% guaranteed. WhatsApp 055 304 5256.',
  },
  'rodent-control': {
    title: 'Rodent Control Dubai | Rat & Mouse Removal | Prime Pest Control',
    description: 'Professional rodent control services in Dubai. Expert rat and mouse removal from homes and businesses across all communities. WhatsApp for a free quote.',
  },
  'insect-control': {
    title: 'Insect Control Dubai | Insect Exterminator Services | Prime Pest Control',
    description: 'Comprehensive insect control services in Dubai. We eliminate mosquitoes, flies, beetles and all insect pests. WhatsApp 055 304 5256.',
  },
  'hornet-nest-removal': {
    title: 'Hornet Control Dubai | Hornet Nest Removal | Prime Pest Control',
    description: 'Safe hornet nest removal and control in Dubai. Our experts remove hornet nests from homes, gardens and businesses. WhatsApp for a free quote.',
  },
  'wasp-nest-removal': {
    title: 'Wasp Control Dubai | Wasp Nest Removal | Prime Pest Control',
    description: 'Professional wasp nest removal in Dubai. Fast, safe elimination of wasp nests from homes and businesses. WhatsApp 055 304 5256.',
  },
  'bee-removal': {
    title: 'Bee Removal Dubai | Bee Hive Removal Services | Prime Pest Control',
    description: 'Safe bee removal and hive relocation in Dubai. Our specialists handle all bee removal with care and expertise. WhatsApp for a free quote.',
  },
  'critter-control': {
    title: 'Wildlife & Critter Control Dubai | Prime Pest Control',
    description: 'Professional wildlife and critter control services in Dubai. We handle all unwanted wildlife safely and humanely. WhatsApp 055 304 5256.',
  },
  'bird-control-dubai': {
    title: 'Bird Control Dubai | Pigeon & Mynah Control | Prime Pest Control',
    description: 'Expert bird control services in Dubai. We remove and deter pigeons, mynahs and other pest birds from homes and businesses. WhatsApp for a free quote.',
  },
  'pigeon-control-dubai': {
    title: 'Pigeon Control Dubai | Pigeon Removal & Deterrents | Prime Pest Control',
    description: 'Professional pigeon control and removal in Dubai. Pigeon netting, spikes and deterrents installed across all communities. WhatsApp 055 304 5256.',
  },
  'mynah-bird-control': {
    title: 'Mynah Bird Control Dubai | Mynah Removal Services | Prime Pest Control',
    description: 'Expert mynah bird control and removal in Dubai. We provide humane, effective deterrents for mynah bird problems. WhatsApp for a free quote.',
  },
  'bird-netting-dubai': {
    title: 'Bird Netting Dubai | Anti-Bird Net Installation | Prime Pest Control',
    description: 'Professional bird netting installation in Dubai. Anti-pigeon nets for balconies, rooftops and buildings. WhatsApp 055 304 5256.',
  },
  'bird-proofing-dubai': {
    title: 'Bird Proofing Dubai | Bird Deterrent Solutions | Prime Pest Control',
    description: 'Complete bird proofing solutions for Dubai homes and businesses. Spikes, nets, gels and more. 100% effective bird deterrents. WhatsApp for a free quote.',
  },
  'scorpion-control-dubai': {
    title: 'Scorpion Control Dubai | Scorpion Removal & Treatment | Prime Pest Control',
    description: 'Professional scorpion control and removal in Dubai. We treat Arabian Fat-tailed Scorpions, Deathstalkers and all UAE scorpion species. Same-day service. WhatsApp 055 304 5256.',
  },
  'camel-spider-control-dubai': {
    title: 'Camel Spider Removal Dubai | Solifugae Control | Prime Pest Control',
    description: 'Expert camel spider (sun spider) removal in Dubai. Professional treatment for camel spider sightings in homes and businesses across all Dubai communities. WhatsApp 055 304 5256.',
  },
  'drain-fly-control-dubai': {
    title: 'Drain Fly Control Dubai | Moth Fly Treatment | Prime Pest Control',
    description: 'Professional drain fly and moth fly control in Dubai. We eliminate drain fly infestations at the source for apartments, restaurants and hotels. WhatsApp for a free quote.',
  },
  'silverfish-control-dubai': {
    title: 'Silverfish Control Dubai | Silverfish Exterminator | Prime Pest Control',
    description: 'Expert silverfish control and extermination in Dubai. Protect books, clothing and stored items from silverfish damage. Same-day service available. WhatsApp 055 304 5256.',
  },
  'commercial-pest-control-dubai': {
    title: 'Commercial Pest Control Dubai | Restaurants, Hotels & Offices | Prime Pest Control',
    description: 'Dubai Municipality-compliant commercial pest control for restaurants, hotels, warehouses and offices in Dubai. AMC contracts available. WhatsApp for a free commercial quote.',
  },
  'crow-control-dubai': {
    title: 'Crow Control Dubai | House Crow Removal & Deterrents | Prime Pest Control',
    description: 'Professional house crow control and removal in Dubai. Effective, humane crow deterrents for villas, apartments and commercial properties. WhatsApp 055 304 5256.',
  },
  'sparrow-control-dubai': {
    title: 'Sparrow Control Dubai | AC Unit Bird Proofing | Prime Pest Control',
    description: 'House sparrow control and AC unit bird proofing in Dubai. Prevent sparrows nesting in your air conditioning units and building voids. WhatsApp for a free quote.',
  },
  'solar-panel-bird-proofing-dubai': {
    title: 'Solar Panel Bird Proofing Dubai | Pigeon Mesh Installation | Prime Pest Control',
    description: 'Professional solar panel bird proofing in Dubai. Discrete mesh kits that permanently exclude pigeons and sparrows from under your solar panels. WhatsApp 055 304 5256.',
  },
};

// All service slugs that use the HomePage layout
const SERVICE_SLUGS = Object.keys(SEO_META);

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = SEO_META[slug];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://www.primepestcontrol.ae/${slug}` },
  };
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!SERVICE_SLUGS.includes(slug)) {
    notFound();
  }

  const pathname = `/${slug}`;
  const pageContent = getPageContent(pathname);
  const heroTitle = pageContent?.hero.headline ?? 'Affordable Pest Control';
  const isOverlay = slug === 'professional-flea-control';

  return (
    <>
      <HomeHero
        title={heroTitle}
        desktopPestIcons={pageContent?.hero.pestIcons}
      />
      <UrgencySection variant={isOverlay ? 'overlay' : 'default'} utahOnlyCoupon={!isOverlay} />
      <WhatWeDoSection content={pageContent?.expertise} />
      <ServiceAreaSection />
      <WhyCallUsSection />
      <TrustedByCustomersSection />
      <WhyChooseUsSection />
      <FreeQuoteSection />
      <SatisfactionGuaranteeSection />
      <FaqSection faqs={pageContent?.faqs} faqTitle={pageContent?.faqTitle} />
    </>
  );
}
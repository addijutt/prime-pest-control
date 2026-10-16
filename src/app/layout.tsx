import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import FooterCall from '../components/FooterCall';

export const metadata: Metadata = {
  title: 'Pest & Bird Control Dubai | Prime Pest Control | 055 304 5256',
  description:
    'Expert pest and bird control across all Dubai communities. Cockroaches, bed bugs, termites, pigeons, mynahs & 50+ more. Same-day service, 100% guaranteed. WhatsApp 055 304 5256.',
  metadataBase: new URL('https://www.primepestcontrol.ae'),
  alternates: { canonical: 'https://www.primepestcontrol.ae/' },
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://www.primepestcontrol.ae/',
    title: 'Pest & Bird Control Dubai | Prime Pest Control',
    description:
      'Expert pest and bird control in Dubai. Cockroaches, bed bugs, termites, pigeons, mynahs & 50+ more. Same-day service available. WhatsApp for a free quote.',
    images: [
      {
        url: 'https://www.primepestcontrol.ae/assets/img/prime-brand-kit/prime-brand-kit/social/prime-profile-1080.png',
      },
    ],
    siteName: 'Prime Pest Control Dubai',
    locale: 'en_AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pest & Bird Control Dubai | Prime Pest Control',
    description:
      'Expert pest and bird control in Dubai. Same-day service. WhatsApp for a free quote.',
    images: [
      'https://www.primepestcontrol.ae/assets/img/prime-brand-kit/prime-brand-kit/social/prime-profile-1080.png',
    ],
  },
  icons: {
    icon: '/assets/img/prime-brand-kit/prime-brand-kit/web/favicon.ico',
    apple: '/assets/img/prime-brand-kit/prime-brand-kit/web/web-apple-icon.png',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.primepestcontrol.ae/#business',
  name: 'Prime Pest Control Dubai',
  image:
    'https://www.primepestcontrol.ae/assets/img/prime-brand-kit/prime-brand-kit/web/web-schema-logo.png',
  description:
    'Professional pest and bird control services across all Dubai communities. We handle cockroaches, bed bugs, termites, rodents, pigeons, mynahs and 50+ more pest problems.',
  url: 'https://www.primepestcontrol.ae',
  telephone: '+971553045256',
  priceRange: 'AED 299 - AED 2000',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '25.2048',
    longitude: '55.2708',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Dubai' },
    { '@type': 'Place', name: 'Dubai Marina' },
    { '@type': 'Place', name: 'Downtown Dubai' },
    { '@type': 'Place', name: 'JBR' },
    { '@type': 'Place', name: 'Business Bay' },
    { '@type': 'Place', name: 'Jumeirah' },
    { '@type': 'Place', name: 'Deira' },
    { '@type': 'Place', name: 'Bur Dubai' },
    { '@type': 'Place', name: 'DIFC' },
    { '@type': 'Place', name: 'Palm Jumeirah' },
    { '@type': 'Place', name: 'Al Barsha' },
    { '@type': 'Place', name: 'Mirdif' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Pest & Bird Control Services Dubai',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cockroach Control Dubai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bed Bug Treatment Dubai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Termite Control Dubai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rodent Control Dubai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pigeon Control Dubai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mynah Bird Control Dubai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bird Netting Dubai' } },
    ],
  },
  sameAs: [],
};

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: 'Prime Pest Control Dubai',
  },
  ratingValue: '4.9',
  bestRating: '5',
  ratingCount: '127',
};

const CRITICAL_CSS = `.call-company{font-size:1.2rem}.call-us a{color:#fff}#hero.home-hero{background:none;padding-top:0;margin-top:188px}#hero:not(.home-hero){background:url(/assets/img/hero-bg-v2.webp) no-repeat center top/1440px auto;padding-top:10px;margin-top:0}#hero:not(.home-hero) h1{text-align:center;display:block}.no-bm{margin-bottom:0}.family-roboto{font-family:'Nunito Sans',Arial,sans-serif}.text-center{text-align:center}.panel p span{font-size:1.3125rem;line-height:1.5rem;display:inline-block}.color-dark-grey{color:#504c4c}.visible-lg,.visible-md,.visible-sm,.visible-xs{display:none!important}.panel .img-responsive{text-align:center;display:inline-block;margin:0 auto}.nopad{padding:0}.special-list{padding-left:0;list-style:none;width:100%;max-width:100%;margin:0 auto 20px}.text-left{text-align:left}.special-list li{font-family:'Nunito Sans';padding:5px 0;font-size:1rem;color:#505050}@media (max-width:75rem){#hero.home-hero{margin-top:188px}#hero:not(.home-hero){margin-top:121px}.special-list li{font-size:.75rem;line-height:1.5rem}}@media (max-width:47.9375rem){.visible-xs{display:block!important}.hidden-xs{display:none!important}}@media (max-width:48rem){.special-list li{font-size:1rem}}@media (max-width:30rem){.block-in-mobile{display:block;clear:both;margin:10px 0}.call-us .block-in-mobile{margin:0}#hero:not(.home-hero)>.container{padding:0 5px}.home h1{font-size:1.75rem;line-height:2.25rem}.home .panel p.size-22{line-height:1.5rem;font-size:1.125rem}.panel p,.special-list li{text-align:center}.online-only{font-size:1rem!important}}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Fonts — loaded directly so names resolve in CSS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Oswald:wght@200;700&family=Roboto:wght@700&display=swap"
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Preload hero image */}
        <link rel="preload" href="/assets/img/pest_control_near_me.webp" as="image" />

        {/* Inline critical CSS */}
        <style dangerouslySetInnerHTML={{ __html: CRITICAL_CSS }} />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="beforeInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MND7JS6X');
        `}</Script>
        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17105539352"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'AW-17105539352');
        `}</Script>

        {/* LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* AggregateRating JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
        />

        {/* Google Ads phone click conversion */}
        <Script id="gtag-phone-conversion" strategy="afterInteractive">{`
          function gtag_report_conversion() {
            gtag('event', 'conversion', {
              'send_to': 'AW-17105539352/Ec_9CJLs87AbEJiix9w_'
            });
          }
          document.addEventListener('click', function(e) {
            var target = e.target.closest('a');
            if (target && target.getAttribute('href') && target.getAttribute('href').startsWith('tel:')) {
              gtag_report_conversion();
            }
          });
        `}</Script>
      </head>
      <body className="home">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MND7JS6X"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <FooterCall />
      </body>
    </html>
  );
}
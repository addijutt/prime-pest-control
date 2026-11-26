import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

// Web app manifest: name and icons when the site is added to a phone's home screen
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Prime Pest Control Dubai',
    short_name: 'Prime Pest',
    description: 'Pest and bird control across Dubai. Open 24/7. Free quote on WhatsApp.',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#0E1A35',
    icons: [
      { src: '/assets/img/brand/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/assets/img/brand/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/assets/img/brand/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}

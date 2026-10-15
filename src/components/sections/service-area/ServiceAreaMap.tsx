'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

type ServiceAreaMapProps = {
  city: string;
  state: string;
  lat?: number;
  lng?: number;
  className?: string;
};

type CachedCenter = { lat: number; lng: number };

const centerCache = new Map<string, CachedCenter>();

async function fetchCityCenter(city: string, state: string): Promise<CachedCenter> {
  const key = `${city.toLowerCase()},${state.toLowerCase()}`;
  const cached = centerCache.get(key);
  if (cached) return cached;

  const q = encodeURIComponent(`${city}, ${state}`);
  const url = `https://nominatim.openstreetmap.org/search?q=${q}&format=json&limit=1`;

  const res = await fetch(url, {
    headers: { 'Accept-Language': 'en', 'User-Agent': 'PrimePestControl/1.0' },
  });
  if (!res.ok) throw new Error(`Nominatim error: ${res.status}`);

  const data = await res.json() as Array<{ lat: string; lon: string }>;
  if (!data.length) throw new Error('No Nominatim results');

  const result: CachedCenter = { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
  centerCache.set(key, result);
  return result;
}

function safeRemoveMap(map: import('leaflet').Map | null) {
  if (!map) return;
  try {
    map.off();
    if (map.getContainer()?.isConnected) map.remove();
  } catch { /* ignore */ }
}

export function ServiceAreaMap({ city, state, lat, lng, className = '' }: ServiceAreaMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import('leaflet').Map | null>(null);

  useEffect(() => {
    if (!city && lat == null) return;
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let resizeObserver: ResizeObserver | null = null;
    container.removeAttribute('data-map-error');

    (async () => {
      const centerPromise =
        lat != null && lng != null
          ? Promise.resolve({ lat, lng })
          : fetchCityCenter(city, state);

      const [L, center] = await Promise.all([import('leaflet'), centerPromise]);
      if (cancelled) return;

      const map = L.map(container, { scrollWheelZoom: false, zoomControl: false, attributionControl: true });

      if (cancelled) { safeRemoveMap(map); return; }

      mapRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      map.attributionControl.setPrefix(false);
      map.setView([center.lat, center.lng], 9);

      resizeObserver = new ResizeObserver(() => map.invalidateSize());
      resizeObserver.observe(container);
    })().catch(() => {
      if (!cancelled && container) container.dataset.mapError = 'true';
    });

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      safeRemoveMap(mapRef.current);
      mapRef.current = null;
    };
  }, [city, state, lat, lng]);

  return (
    <div
      ref={containerRef}
      className={`service-area-map ${className}`.trim()}
      aria-label={`Map of ${city}, ${state} service area`}
    />
  );
}

export default ServiceAreaMap;
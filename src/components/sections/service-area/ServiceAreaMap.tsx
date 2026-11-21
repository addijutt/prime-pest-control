'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

// Fixed coordinates: the business only serves Dubai, so the map no longer geocodes a city at runtime
// (the old Nominatim lookup failed in the browser and centred the map on the visitor's own IP city).
type ServiceAreaMapProps = {
  label: string;
  lat: number;
  lng: number;
  zoom?: number;
  className?: string;
};

function safeRemoveMap(map: import('leaflet').Map | null) {
  if (!map) return;
  try {
    map.off();
    if (map.getContainer()?.isConnected) map.remove();
  } catch { /* ignore */ }
}

export function ServiceAreaMap({ label, lat, lng, zoom = 10, className = '' }: ServiceAreaMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import('leaflet').Map | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let resizeObserver: ResizeObserver | null = null;
    container.removeAttribute('data-map-error');

    import('leaflet')
      .then((L) => {
        if (cancelled) return;

        const map = L.map(container, { scrollWheelZoom: false, zoomControl: false, attributionControl: true });
        mapRef.current = map;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        map.attributionControl.setPrefix(false);
        map.setView([lat, lng], zoom);

        resizeObserver = new ResizeObserver(() => map.invalidateSize());
        resizeObserver.observe(container);
      })
      .catch(() => {
        if (!cancelled && container) container.dataset.mapError = 'true';
      });

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      safeRemoveMap(mapRef.current);
      mapRef.current = null;
    };
  }, [lat, lng, zoom]);

  return (
    <div
      ref={containerRef}
      className={`service-area-map ${className}`.trim()}
      aria-label={`Map of the ${label} service area`}
    />
  );
}

export default ServiceAreaMap;

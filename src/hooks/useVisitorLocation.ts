'use client';

import { useState, useEffect } from 'react';

export interface VisitorLocation {
  city: string;
  region: string;
}

const DEFAULT: VisitorLocation = { city: 'Dallas', region: 'Texas' };
const CACHE_KEY = 'gn_ip_loc_v2';

function getCache(): VisitorLocation | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.city === 'string' && parsed.city) return parsed;
    }
  } catch { /* ignore */ }
  return null;
}

function setCache(loc: VisitorLocation) {
  try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(loc)); } catch { /* ignore */ }
}

async function ipGeolocate(): Promise<VisitorLocation> {
  for (const url of ['https://ipapi.co/json/', 'https://ipinfo.io/json']) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
      if (res.ok) {
        const d = await res.json() as { city?: string; region?: string };
        if (d.city && d.region) return { city: d.city, region: d.region };
      }
    } catch { /* try next */ }
  }
  return DEFAULT;
}

export function useVisitorLocation(): VisitorLocation {
  const [loc, setLoc] = useState<VisitorLocation>(DEFAULT);

  useEffect(() => {
    const cached = getCache();
    if (cached) { setLoc(cached); return; }

    let cancelled = false;
    ipGeolocate().then((result) => {
      if (!cancelled) { setCache(result); setLoc(result); }
    });
    return () => { cancelled = true; };
  }, []);

  return loc;
}
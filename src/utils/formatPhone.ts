export const PHONE_DISPLAY = '055 304 5256';
export const PHONE_RAW = '+971553045256';
export const WHATSAPP_URL = 'https://wa.me/971553045256';
export const PHONE_TEL = 'tel:+971553045256';

/** Standard primary CTA label used in the Our Expertise section. */
export const PRIMARY_CTA_LABEL = 'WhatsApp for Free Quote:';

/**
 * Format a phone number for display.
 */
export function formatPhoneForDisplay(phone: string): string {
  if (phone === PHONE_DISPLAY || phone.startsWith('055') || phone.startsWith('+971')) {
    return phone;
  }

  const cleaned = phone.replace(/\D/g, '');
  const digits =
    cleaned.length === 11 && cleaned.startsWith('1') ? cleaned.slice(1) : cleaned;

  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  return phone || PHONE_DISPLAY;
}

/**
 * Prevents a phone number from ever breaking mid-way.
 */
export function noBreakPhone(phone: string): string {
  return formatPhoneForDisplay(phone)
    .replace(/ /g, ' ')
    .replace(/-/g, '‑');
}
// WhatsApp configuration — change the number here to update sitewide.
// IMPORTANT: Only digits, no +, spaces, hyphens, or other characters
export const WHATSAPP_NUMBER = "918179967999"; // country code (91) + number (8179967999)
export const WHATSAPP_DISPLAY = "+91 8179967999"; // formatted for display only

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello Annapurna Foods, I would like to know more about your homemade products.";

/**
 * Validates WhatsApp number format
 * @param number - Phone number to validate
 * @returns true if valid, false otherwise
 */
function validateWhatsAppNumber(number: string): boolean {
  // Should be only digits, starts with 91 (India), and be 12 digits total
  const isValid = /^91\d{10}$/.test(number);
  if (!isValid) {
    console.warn(
      `[WhatsApp] Invalid number format: "${number}". Expected format: 918179967999 (country code + 10 digits)`
    );
  }
  return isValid;
}

/**
 * Generates WhatsApp Web Click-to-Chat URL
 * @param message - Optional pre-filled message
 * @returns WhatsApp URL
 */
export function waLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  // Validate number format
  if (!validateWhatsAppNumber(WHATSAPP_NUMBER)) {
    console.error(
      `[WhatsApp] Number validation failed: ${WHATSAPP_NUMBER}. Using default anyway.`
    );
  }

  // Generate URL using only the phone number (digits only, no +)
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  // Log for debugging
  if (process.env.NODE_ENV === "development") {
    console.log(
      `[WhatsApp] Generated URL: ${url.substring(0, 50)}... (message: "${message.substring(0, 50)}...")`
    );
  }

  return url;
}

/**
 * Generates product-specific WhatsApp message
 * @param productName - Name of the product
 * @returns Formatted message for product order
 */
export function waProductMessage(productName: string): string {
  return `Hello Annapurna Foods, I would like to order ${productName}. Please share the details.`;
}

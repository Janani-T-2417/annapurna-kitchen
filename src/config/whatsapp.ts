// WhatsApp configuration — change the number here to update sitewide.
export const WHATSAPP_NUMBER = "919800012345"; // country code + number, no + or spaces
export const WHATSAPP_DISPLAY = "+91 98000 12345";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello Annapurna Foods, I would like to know more about your homemade products.";

export function waLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function waProductMessage(productName: string) {
  return `Hello Annapurna Foods, I would like to order ${productName}. Please share the details.`;
}

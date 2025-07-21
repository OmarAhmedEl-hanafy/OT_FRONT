// CardTypeDetector.tsx
export const getCardType = (cardNumber: string) => {
  const number = cardNumber.replace(/\s+/g, ""); // Remove spaces
  // const firstDigit = number[0];

  // Visa
  if (/^4[0-9]{6,}$/.test(number)) {
    return "visa";
  }
  // Mastercard
  if (/^5[1-5][0-9]{5,}$/.test(number)) {
    return "mastercard";
  }
  // American Express
  if (/^3[47][0-9]{5,}$/.test(number)) {
    return "amex";
  }
  // Discover
  if (/^6(?:011|5[0-9]{2})[0-9]{3,}$/.test(number)) {
    return "discover";
  }
  // Meza (this would need to be based on your country's specifics)
  if (/^507[0-9]{3,}$/.test(number)) {
    return "meza";
  }

  return "unknown"; // Return 'unknown' if not detected
};

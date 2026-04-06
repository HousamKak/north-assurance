/**
 * Format phone number
 */
export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/(\+\d{3})(\d)(\d{3})(\d{3})/, '$1 $2 $3 $4');
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Format number with commas
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

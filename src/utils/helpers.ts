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

/**
 * Resolve files from Vite's public directory against the configured app base.
 * This keeps GitHub Pages deployments under /north-assurance/ from requesting
 * assets from the domain root.
 */
export const publicAsset = (path: string): string => {
  if (!path) return path;

  if (/^(?:[a-z][a-z\d+\-.]*:)?\/\//i.test(path) || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.replace(/^\/+/, '');

  return `${normalizedBase}${normalizedPath}`;
};

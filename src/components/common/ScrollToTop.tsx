import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If the URL has an anchor (e.g. /products/medical#quote), scroll to that
    // element instead of the top. Pages are lazy-loaded and animated, so retry
    // briefly until the target has mounted.
    if (hash) {
      const id = hash.replace('#', '');
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempts < 15) {
          attempts += 1;
          window.setTimeout(tryScroll, 100);
        }
      };
      tryScroll();
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname, hash]);

  return null;
};

// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // force scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // or 'smooth'
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;

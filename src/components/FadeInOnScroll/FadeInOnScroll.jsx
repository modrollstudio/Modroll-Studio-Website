import { useEffect, useRef, useState } from 'react';
import styles from './FadeInOnScroll.module.scss';

export default function FadeInOnScroll({ children, delay = 0, className }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const classes = [styles.reveal, shown && styles.shown, className].filter(Boolean).join(' ');

  return (
    <div ref={ref} className={classes} style={delay ? { '--delay': `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}

import { useEffect, useState } from 'react';

export function useScrollProgress(elementId: string) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate progress based on element position in viewport
      // 0 when element is below viewport, 100 when element is above viewport
      const elementTop = rect.top;
      const scrollProgress = Math.max(0, Math.min(100, 
        ((windowHeight - elementTop) / (windowHeight + elementHeight)) * 100
      ));

      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementId]);

  return progress;
}

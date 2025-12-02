import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TypingAnimation({ text, className = '', speed = 100 }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting && currentIndex < text.length) {
      // Typing forward
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === text.length) {
      // Pause at end before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      }, speed / 2);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex === 0) {
      // Start typing again
      const timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, isDeleting]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

import { useState, useEffect } from 'react';

interface UseCounterOptions {
  end: number;
  duration?: number;
  start?: number;
  enabled?: boolean;
}

export const useCounter = ({ end, duration = 2000, start = 0, enabled = true }: UseCounterOptions) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!enabled) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        const percentage = progress / duration;
        const currentCount = Math.floor(start + (end - start) * percentage);
        setCount(currentCount);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, start, enabled]);

  return count;
};

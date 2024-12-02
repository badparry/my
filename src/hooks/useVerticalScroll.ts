import { useRef, useState, MouseEvent } from 'react';

interface ScrollOptions {
  speedMultiplier?: number;
}

export const useVerticalScroll = ({ speedMultiplier = 1 }: ScrollOptions = {}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const onMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartY(e.pageY - (scrollRef.current?.offsetTop || 0));
    setScrollTop(scrollRef.current?.scrollTop || 0);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const y = e.pageY - (scrollRef.current?.offsetTop || 0);
    const walk = (startY - y) * speedMultiplier;
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollTop + walk;
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  return {
    scrollRef,
    isDragging,
    handlers: {
      onMouseDown,
      onMouseMove,
      onMouseUp,
      onMouseLeave
    }
  };
};
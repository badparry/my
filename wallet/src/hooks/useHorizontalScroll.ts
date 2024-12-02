import { useRef, useState, MouseEvent } from 'react';

interface ScrollOptions {
  speedMultiplier?: number;
}

export const useHorizontalScroll = ({ speedMultiplier = 1 }: ScrollOptions = {}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (startX - x) * speedMultiplier;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft + walk;
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
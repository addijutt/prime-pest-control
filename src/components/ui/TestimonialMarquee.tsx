'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReviewCard from './ReviewCard';

export interface TestimonialItem {
  quote: string;
  author: string;
}

interface TestimonialMarqueeProps {
  items: readonly TestimonialItem[];
}

const TestimonialMarquee: React.FC<TestimonialMarqueeProps> = ({ items }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    const marquee = marqueeRef.current;
    if (!marquee) return;
    dragState.current = { startX: event.pageX, scrollLeft: marquee.scrollLeft };
    setIsDragging(true);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const marquee = marqueeRef.current;
    if (!marquee) return;
    const handleMouseMove = (event: MouseEvent) => {
      event.preventDefault();
      const walk = event.pageX - dragState.current.startX;
      marquee.scrollLeft = dragState.current.scrollLeft - walk;
    };
    const handleMouseUp = () => setIsDragging(false);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={marqueeRef}
      className={`customer-reviews-section__marquee${isDragging ? ' is-dragging' : ''}`}
      onMouseDown={handleMouseDown}
    >
      <div className="customer-reviews-section__marquee-track">
        {items.map((item) => (
          <ReviewCard key={item.author} quote={item.quote} author={item.author} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialMarquee;
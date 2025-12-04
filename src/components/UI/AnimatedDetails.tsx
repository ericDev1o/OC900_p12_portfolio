import React, { useRef, useState, useEffect } from 'react';

export default function AccessibleAnimatedDetails(
  { summary, children }: { summary: string; children: React.ReactNode }
) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');
  const [shouldRender, setShouldRender] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [ariaMessage, setAriaMessage] = useState('');
  const contentId = React.useId();

  const toggle = () => setIsOpen(open => !open);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsTransitioning(true);
    } else {
      if (contentRef.current) {
        setMaxHeight('0px');
        setIsTransitioning(true);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (shouldRender && isOpen && contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setMaxHeight(`${height}px`);
    }
  }, [shouldRender, isOpen]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName === 'max-height' && !isOpen) {
        setShouldRender(false);
        setIsTransitioning(false);
        setMaxHeight('0px'); // reset
      }
      if (event.propertyName === 'max-height' && isOpen) {
        setIsTransitioning(false);
      }
    };

    content.addEventListener('transitionend', onTransitionEnd);
    return () => {
      content.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [isOpen]);

  useEffect(() => {
    setAriaMessage(isOpen ? 'Section ouverte' : 'Section fermée');
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && shouldRender && contentRef.current) {
      contentRef.current.focus();
    }
  }, [isOpen, shouldRender]);

  return (
    <div className="
    max-w-md 
    rounded 
    shadow 
    overflow-hidden 
    w-full">
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={toggle}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
          }
        }}
        className="
        cursor-pointer 
        flex 
        justify-between 
        items-center 
        px-4 
        py-3 
        font-semibold 
        text-blue-500 
        hover:bg-gray-700 
        select-none"
      >
        {summary}
        <span
          aria-hidden="true"
          className={`
            inline-block 
            transition-transform 
            duration-600 
            motion-reduce:duration-3000
            ease-in-out 
            transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </div>
      <div
        id={contentId}
        ref={contentRef}
        tabIndex={-1}
        style={{ maxHeight }}
        className="
          relative
          overflow-hidden
          transition-[max-height]
          duration-600
          motion-reduce:duration-3000
          ease-in-out"
      >
        {shouldRender && <div className="px-4 py-3">{children}</div>}
      </div>
      <div aria-live="polite" className="sr-only" aria-atomic="true">
        {ariaMessage}
      </div>
    </div>
  );
}
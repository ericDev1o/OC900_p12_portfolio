import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * This is a custom HTML accordion.
 * It was done due to realization difficulties 
 * to customize my animation using Flowbite's 4.0 Accordion.
 *  
 * Browser retro-compatibility:
 *  'onwebkittransitionend' 
 * is on old Safari and Chrome browsers.
 * 
 * @param {string} summary is the label of hidden content
 * @returns {ReactNode} label of hidden content, arrow to open/close and content.
 */
export default function AnimatedDetails(
  { summary, children }: { summary: string; children: ReactNode }
) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');
  const [shouldRender, setShouldRender] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const contentId = React.useId();

  const toggle = () => setIsOpen(open => !open);

  const setIsTransitioningCheck = (on: boolean) => {
    if(isTransitioning !== on)
      setIsTransitioning(on);
  };

  const setMaxHeightCheck = (height: string) => {
    if(maxHeight !== height)
      setMaxHeight(height);
  };

  const setShouldRenderCheck = (on: boolean) => {
    if(shouldRender !== on)
      setShouldRender(on);
  };

  const { t } = useTranslation();

  useEffect(() => {
    setIsTransitioningCheck(true);
    if (isOpen) {
      setShouldRenderCheck(true);
    } else {
      if (contentRef.current) {
        setMaxHeightCheck('0px');
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (shouldRender && isOpen && contentRef.current) {
      const height = contentRef.current.scrollHeight;
      const heightPxStr = `${height}px`;
      setMaxHeightCheck(heightPxStr);
    }
  }, [shouldRender, isOpen]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName === 'max-height' && !isOpen) {
        setShouldRenderCheck(false);
        setIsTransitioningCheck(false);
        setMaxHeightCheck('0px');
      }
      if (event.propertyName === 'max-height' && isOpen) {
        setIsTransitioningCheck(false);
      }
    };

    const isTransitionEndSupported = 
      'ontransitionend' in window 
      ||
      'onwebkittransitionend' in window; // old Safari and Chrome browsers
    if(isTransitionEndSupported) {
      content.addEventListener('transitionend', onTransitionEnd);
      return () => {
        content.removeEventListener('transitionend', onTransitionEnd);
      };
    }
    else {
      const transitionDuration = 600;

      if(! isTransitionEndSupported) {
        const timeoutId = setTimeout(() => {
          onTransitionEnd({
            propertyName: 'max-height',
            elapsedTime: 0,
            pseudoElement: '',
            bubbles: false,
            cancelBubble: false,
            cancelable: false,
            composed: false,
            currentTarget: null,
            defaultPrevented: false,
            eventPhase: 0,
            isTrusted: false,
            returnValue: false,
            srcElement: null,
            target: null,
            timeStamp: 0,
            type: '',
            composedPath: function (): EventTarget[] {
              throw new Error('Function not implemented.');
            },
            initEvent: function (type: string, bubbles?: boolean, cancelable?: boolean): void {
              throw new Error('Function not implemented.');
            },
            preventDefault: function (): void {
              throw new Error('Function not implemented.');
            },
            stopImmediatePropagation: function (): void {
              throw new Error('Function not implemented.');
            },
            stopPropagation: function (): void {
              throw new Error('Function not implemented.');
            },
            NONE: 0,
            CAPTURING_PHASE: 1,
            AT_TARGET: 2,
            BUBBLING_PHASE: 3
          });
        }, transitionDuration);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && shouldRender && contentRef.current) {
      contentRef.current.focus();
    }
  }, [isOpen, shouldRender]);

  return (
    <div className='
      w-full 
      overflow-hidden 
      rounded 
      shadow '
    >
      <div
        role='button'
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
        className='
        cursor-pointer 
        flex 
        justify-between 
        items-center 
        px-4 
        py-3 
        font-semibold 
        text-blue-500 
        hover:bg-gray-700 
        select-none'
      >
        {summary}
        <span
          aria-hidden='true'
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
        className='
          relative
          overflow-hidden
          transition-[max-height]
          duration-600
          motion-reduce:duration-3000
          ease-in-out'
      >
        {shouldRender && <div className='px-4 py-3'>{children}</div>}
      </div>
      <div aria-live='polite' className='sr-only' aria-atomic='true'>
        {isOpen ? t('section.opened') : t('section.closed')}
      </div>
    </div>
  );
}
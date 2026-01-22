import { 
  useRef, 
  useState, 
  useEffect, 
  ReactNode, 
  useId } 
  from 'react';
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

  const contentId = useId();

  const toggle = () => {
    if(! isOpen){
      setShouldRender(true);
      setIsOpen(true);
    }
    else {
      setMaxHeight('0px');
      setIsOpen(false);
    }
  };

  const { t } = useTranslation();

  useEffect(() => {
    if (shouldRender && isOpen && contentRef.current) {
      requestAnimationFrame(() => {
        const height = contentRef.current?.scrollHeight;
        setMaxHeight(`${height}px`);
      });
    }
  }, [shouldRender, isOpen]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.propertyName !== 'max-height') return;
        
      if(! isOpen) 
      {
        setShouldRender(false);
        setMaxHeight('0px');
      }
    };

    const supportsTransitionEnd = 
      'ontransitionend' in window 
      ||
      'onwebkittransitionend' in window; // old Safari and Chrome browsers
      
    if(supportsTransitionEnd) {
      content.addEventListener('transitionend', onTransitionEnd);

      return () => {
        content.removeEventListener('transitionend', onTransitionEnd);
      };
    }

    const TRANSITION_DURATION_MS = 600;

    const timeoutId = setTimeout(() => {
      onTransitionEnd({ propertyName: 'max-height' } as TransitionEvent);
        }, TRANSITION_DURATION_MS);

    return () => clearTimeout(timeoutId);
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
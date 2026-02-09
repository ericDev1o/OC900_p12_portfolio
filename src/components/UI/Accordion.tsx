import {
  type ReactNode, 
  useEffect, 
  useRef, 
  useState 
} from 'react';
  
/** 
 * This is an accordion that slides down and up in 0.6 second. 
 * <details><summary> isn't used because I found it impossible to animate
 * the accordion closing.
 * 
 * @param summary is the label of hidden content
 * @returns label of hidden content, arrow to open/close and content.
 */
export default function Accordion(
  { 
    summary, 
    children 
  }: { 
    summary: string; 
    children: ReactNode 
  }
) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const content = contentRef.current;
    if( ! content) return;   

    content.style.maxHeight = isOpen 
    ? `${content.scrollHeight}px`
    : '0px';
    }, [isOpen]
  );

  return (
    <div 
      className=' 
        w-full 
        rounded 
        shadow'
    >
      <button
        type='button' 
        aria-expanded={isOpen} 
        onClick={() => setIsOpen((prev) => !prev)} 
        className='
          w-full 
          cursor-pointer 
          list-none 
          flex 
          justify-between 
          items-center 
          px-4 
          py-3 
          font-semibold 
          text-blue-500 
          hover:bg-gray-700 
          focus-visible:bg-gray-700 
          focus-visible:outline-2 
          focus-visible:outline-blue-500
          select-none'
      >
        {summary}
        <span className='sr-only'>
          (isOpen 
            ? 'section ouverte'
            : 'section fermée'
          )
        </span>
        <span
          aria-hidden='true'
          className={`
            inline-block 
            motion-safe:transition-transform 
            motion-safe:duration-600 
            motion-safe:ease-in-out 
            ${ isOpen 
              ? 'rotate-180'
              : 'rotate-0'
            }
          `}
        >
          ▼
        </span>
      </button>
      <div
        ref={contentRef} 
        style={{ maxHeight: '0px' }}
        className='
          overflow-hidden 
          motion-safe:transition-[max-height] 
          motion-safe:duration-600 
          motion-safe:ease-in-out'
      >
        <div 
          className='
            px-4 
            py-3'
        >
          {children}
        </div>
      </div>
    </div>
  );
}
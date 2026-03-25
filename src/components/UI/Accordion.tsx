import {
  type JSX,
  type ReactNode, 
  useEffect, 
  useRef, 
  useState 
} from 'react';
  
/** 
 * Accordion component that animates open / close in 0.6s. 
 * 
 * Note: <details><summary> isn't used because its closing animation cannot be customized.
 * 
 * @param {string} summary is the label of hidden content.
 * @param {ReactNode} children is the content inside the accordion.
 * @returns {JSX.Element} A div containing the summary button, arrow and hidden content.
 */
export default function Accordion(
  { 
    summary, 
    children 
  }: { 
    summary: string; 
    children: ReactNode 
  }): JSX.Element {
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
          select-none
          focus-visible:ring-4 
          focus-visible:ring-blue-300 
          focus-visible:ring-offset-2'
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
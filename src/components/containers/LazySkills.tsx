import {
  JSX,
  lazy,
  Suspense,
  useRef
} from 'react';

import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Skills = lazy(() => import('./Skills'));

/**
 * Lazily mounts the Skills component when it enters the viewport.
 * 
 * Uses useIntersectionObserver to detect visibility, and
 * React.lazy + Suspense for code-splitting.
 * 
 * @returns {JSX.Element} A div that wraps the Skills component when visible.
 */  
export default function LazySkills(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);

  return <div
    ref={ref}
    >
      {isVisible && (
        <Suspense fallback={null}>
          <Skills />
        </Suspense>
      )}
    </div>
}
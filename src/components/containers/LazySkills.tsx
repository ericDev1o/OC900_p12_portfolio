import {
  lazy,
  Suspense,
  useRef
} from 'react';

import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Skills = lazy(() => import('./Skills'));

/**
 * Skills lazy mount
 *  */  
export default function LazySkills() {
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
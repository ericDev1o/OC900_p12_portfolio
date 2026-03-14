import { 
    RefObject,
    useCallback,
    useEffect, 
    useMemo, 
    useRef, 
    useState 
} from 'react';

import debounceOneArg from '../../custom/helpers/debounce';

type DebouncedFunction = ((visible: boolean) => void) & { cancel: () => void};

/**
 * All LazyLoadWrapper side effects are handled in this impure, non-render-focused hook.
 * 
 * @param {RefObject<HTMLDivElement | null>} ref holds the targeted DOM element in .current
 * @param {IntersectionObserverInit} [options] holds the observer settings: root, rootMargin, threshold
 * @returns {boolean} True when the observed element becomes visible in the viewport.
 */
export default function useIntersectionObserver(
    ref: RefObject<HTMLDivElement | null>, 
    options?: IntersectionObserverInit 
): boolean
{
    const [isIntersecting, setIsIntersecting] = useState(false);
    const debouncedSetIntersecting = useRef<DebouncedFunction | null>(null);
    const lastValue = useRef(false);
    const memoizedOptions = useMemo(() => options ?? {}, [options]);

    const handleIntersect = useCallback((visible: boolean) => {
            if(lastValue.current !== visible) {
                lastValue.current = visible;
                setIsIntersecting(visible);
            }
        }, []);

    useEffect(() => {
        const target = ref.current;
        if( ! target || typeof IntersectionObserver === 'undefined') return;

        const debounced = debounceOneArg(handleIntersect, 150);

        debouncedSetIntersecting.current = debounced;

        const observer = new IntersectionObserver(
            ([entry]) => debounced(entry.isIntersecting)
            , memoizedOptions
        );

        observer.observe(target);

        return () => {
            observer.disconnect();
            debounced.cancel();
        };
    }, [ref, memoizedOptions, handleIntersect]);

    return isIntersecting;
}
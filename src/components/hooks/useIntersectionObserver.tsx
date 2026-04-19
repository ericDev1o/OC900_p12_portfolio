import { 
    type RefObject,
    useEffect,
    useState 
} from 'react';

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

    useEffect(() => {
        const target = ref.current;
        if( ! target || typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsIntersecting(entry.isIntersecting)
            , options
        );

        observer.observe(target);

        return () => observer.disconnect();
    }, [ref, options]);

    return isIntersecting;
}
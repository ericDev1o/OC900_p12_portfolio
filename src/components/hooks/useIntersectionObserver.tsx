import { 
    RefObject,
    useEffect, 
    useRef, 
    useState 
} from 'react';

import debounce from '../../custom/helpers/debounce';

type DebouncedFunction = ((visible: boolean) => void) & { cancel: () => void};

/**
 * All LazyLoadWrapper side effect is in this impure non render focused component.
 * @param {RefObject<HTMLDivElement>} ref holds the targeted DOM element in .current
 * @param {IntersectionObserverInit} options holds the observer setting: root, rootMargin, threshold
 * @returns {boolean} true when user scroll's viewport reaches the rendered component instance.
 */
export default function useIntersectionObserver(
    ref: RefObject<HTMLDivElement>, 
    options?: IntersectionObserverInit 
): boolean
{
    const [isIntersecting, setIsIntersecting] = useState(false);
    const debouncedSetIntersecting = useRef<DebouncedFunction>(null);

    useEffect(() => {
        const target = ref.current;
        if( ! target || typeof IntersectionObserver === 'undefined') return;

        const debounced = debounce(setIsIntersecting, 150);
        debouncedSetIntersecting.current = debounced;

        const observer = new IntersectionObserver(
            ([entry]) => debounced(entry.isIntersecting)
            , options);

        observer.observe(target);

        return () => {
            observer.disconnect();
            debounced.cancel();
        };
    }, [ref, options]);

    return isIntersecting;
}
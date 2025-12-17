import { 
    RefObject,
    useEffect, 
    useRef, 
    useState 
} from "react";
import debounce from "@/helpers/debounce";

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
        if( ! ref?.current) return;

        debouncedSetIntersecting.current = debounce(setIsIntersecting, 150);

        const observer = new IntersectionObserver(
            ([entry]) => {
                debouncedSetIntersecting.current && 
                debouncedSetIntersecting.current(entry.isIntersecting);
            }, options);

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
            debouncedSetIntersecting.current && 
            debouncedSetIntersecting.current.cancel();
        };
    }, [ref, options]);

    return isIntersecting;
}
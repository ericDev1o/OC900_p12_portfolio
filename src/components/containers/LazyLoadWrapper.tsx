import { 
    ReactNode, 
    useMemo, 
    useRef
} from "react";

import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function LazyLoadWrapper({
    children, 
    options}: 
    {
        children: ReactNode,
        options?: IntersectionObserverInit
    }) {
    const ref = useRef<HTMLDivElement>(null);

    const memoizedOptions = useMemo(
        () => options || 
            { 
                root: null,
                rootMargin: '0px',
                threshold: 0
            }, [options]
    );

    const isVisible: boolean = useIntersectionObserver(ref, memoizedOptions);

    return <div
            ref={ref}
            className='
                relative'
            tabIndex={0}>
                <div
                    className={`
                        transition-opacity 
                        duration-500 
                        ease-in-out
                        ${isVisible 
                            ? 
                            "opacity-100 pointer-events-auto" 
                            : 
                            "opacity-0 pointer-events-none"}
                    `}
                >
                    {children}
                </div>
        </div>
}
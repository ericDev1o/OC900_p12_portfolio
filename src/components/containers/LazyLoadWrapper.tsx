import { 
    ReactNode, 
    useMemo, 
    useRef
} from "react";

import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { defaultOptions } from "../../config/intersectionObserverConfig";

/**
 * This component is a wrapper for heavy media elements beneath the Hero section.
 * They're displayed only on-demand when user's scroll reahces them, after FirstContentFulPaint.
 * It is used to reduce 
 *     1) Speed Index: time to display content. The user sees hydrated content.
 *     2) TotalBlockingTime: Time ToInteractive. The user can interact sooner with the page.
 * 
 * @param {ReactNode} children are images to lazy load only when viewport focus reaches them.
 * @param {IntersectionObserverInit} options configure Intersection Observation:
 *     root: is the whole page viewport or a specific component
 *         for example in the Portfolio each ProjctCard is lazyloaded due to significant height.
 *         In this case root must be the ProjectCard.
 *     roootMargin: specifying a positive margin anticipates the loading before focus reaches it.
 *         It is smoother for the user.
 *     threshold: the lower it is the fastest it is detected and displayed.
 *         For example 0.5 means it is detected as soon as 50% of the element is visible.
 *         It can cause large elements to stay hidden. 
 * @returns {ReactNode} child image, visible if viewport has reached it.
 */
export default function LazyLoadWrapper({
    children, 
    options}: 
    {
        children: ReactNode,
        options?: IntersectionObserverInit
    }) {
    const ref = useRef<HTMLDivElement>(null);

    const memoizedOptions = useMemo(
        () => 
            options ?? defaultOptions , [options]
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
import { 
    type JSX,
    type ReactNode, 
    useMemo, 
    useRef
} from 'react';

import useIntersectionObserver from '../hooks/useIntersectionObserver';

import { defaultOptions } from '../../config/intersectionObserverConfig';

/**
 * Wrapper for heavy media elements that should be lazy-loaded when they enter the viewport.
 * 
 * It's used to improve performance metrics such as: 
 *     1) Speed Index: content is displayed faster.
 *     2) Total Blocking Time: Time To Interactive. The page is interactive sooner.
 * 
 * @param {ReactNode} children are images to lazy-load.
 * @param {IntersectionObserverInit} [options] optional Intersection Observer settings:
 *     root: viewport or specific parent element for observation
 *         for example in the Portfolio each ProjectCard is lazy-loaded due to significant height.
 *         In this case root must be the ProjectCard.
 *     rootMargin: positive margin loads content slightly before it enters viewport.
 *         It is smoother for the user.
 *     threshold: fraction of element visibility to trigger load
 *         For example 0.5 means it is detected as soon as 50% of the element is visible.
 *         It can cause large elements to stay hidden. 
 * @returns {JSX.Element} child image, visible if viewport has reached it.
 */
export default function LazyLoadWrapper({
    children, 
    options}: 
    {
        children: ReactNode,
        options?: IntersectionObserverInit
    }): JSX.Element {
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
                        'opacity-100 pointer-events-auto' 
                        : 
                        'opacity-0 pointer-events-none'}
                `}
            >
                {children}
            </div>
    </div>
}
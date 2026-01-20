import { act, renderHook } from '@testing-library/react';

import { vi, beforeEach, afterEach, describe, it, expect } from 'vitest';

import useIntersectionObserver from '../../src/components/hooks/useIntersectionObserver';

vi.useFakeTimers();

type ObserveFn = (_target: Element) => void;
type UnobserveFn = (_target: Element) => void;
type DisconnectFn = () => void;

const observeMock = vi.fn<ObserveFn>();
const unobserveMock = vi.fn<UnobserveFn>();
const disconnectMock = vi.fn<DisconnectFn>();

const observe: ObserveFn = (target) => observeMock(target);
const unobserve: UnobserveFn = (target) => unobserveMock(target);
const disconnect: DisconnectFn = () => disconnectMock();


type IntersectionObserverMock = {
    observeMock: typeof observeMock;
    unobserveMock: typeof unobserveMock;
    disconnectMock: typeof disconnectMock;
    trigger: (_entries: Partial<IntersectionObserverEntry>[]) => void;
};

/**
 * Why must there be a test?
 * Under the hood useIntersectionObserver is a useEffect.
 * Clean up is critical to avoid memory leaks, 
 * in other words
 *     1) safety and 
 *     2) performance 
 * issues.
 * 
 * Despite 
 *     1) the will to focus on end-to-end and integration tests
 *     2) it's complexity in number of lines 
 *     3) the long run time
 * it's in unit because it's not a headless browser test.
 * This includes
 *     -> mocking IntersectionObserver
 *     -> testing the hook in isolation
 *     -> no real browser APIs are used
 *     -> tests simulated DOM interactions
 * 
 * The must could vanish by wrapping this project in an astro one.
 */
describe('useIntersectionObserver', () => {
    let ioMock: IntersectionObserverMock;
    let observer: IntersectionObserver;

    beforeEach(() => {
        let callback: IntersectionObserverCallback;
        
        ioMock = {
            observeMock,
            unobserveMock,
            disconnectMock,
            trigger: (entries) => {
                callback (
                    entries as IntersectionObserverEntry[],
                    observer
                );
            }
        };

        function MockIntersectionObserver
        (
            cb: IntersectionObserverCallback
        ): IntersectionObserver
        {
            callback = cb;

            observer = {
                observe,
                unobserve,
                disconnect: vi.fn(() => 
                {
                   disconnect();
                }),
                takeRecords: () => [],
                root: null,
                rootMargin: '0px',
                thresholds: []
            };

            return observer;
        }

        vi.stubGlobal(
            'IntersectionObserver',
            MockIntersectionObserver
        );
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    /**
     * Tests the main feature including
     *     -> state update
     *     -> hook re-render
     */
    it('must set isIntersecting to true and rerender once on intersection', async () => {
        const element = document.createElement('div')
        const ref = { current: element };

        const { result } = renderHook(() => 
            useIntersectionObserver(ref,{})
        );

        expect(result.current).toBe(false);

        act(() => {
            ioMock.trigger([
                {
                    isIntersecting: true,
                    target: element,
                    intersectionRatio: 1
                }
            ]);                 

            vi.advanceTimersByTime(150);
        })
        
        expect(result.current).toBe(true);
    });

    /**
     * Tests
     *     -> useEffect cleanup
     *     -> memory leak prevention
     *     -> DOM API good practices
     */
    it('must disconnect observer on unmount to avoid memory leak', () => {
        const ref = { current: document.createElement('div') };

        const { unmount } = renderHook(() => useIntersectionObserver(ref, {}));
        
        unmount();

        expect(disconnectMock).toHaveBeenCalled();
    });


    /**
     * 1) strengths:
     *     a) robustness to 
     *         i) async
     *         ii) late callback
     *     b) 0 error after unmount
     * 2) weaknesses:
     *     a) technical not customer visible feature oriented
     *     b) doesn't ensure setState() isn't called
     *     c) depends on mock implementation
     */
    it('should not do state update after unmount', () => {
        const ref = { current: document.createElement('div') };

        const { unmount } = renderHook(() =>
            useIntersectionObserver(ref, {})
        );

        unmount();

        expect(() => {
            ioMock.trigger([{ isIntersecting: true, target: ref.current! }]);
        }).not.toThrow();
    });
});
import { act, renderHook } from '@testing-library/react';

import { Procedure } from '@vitest/spy';
import { Mock } from 'vitest';

import useIntersectionObserver from '../../src/components/hooks/useIntersectionObserver';

vi.useFakeTimers();

describe('useIntersectionObserver', () => {
    let disconnectMock: Mock<Procedure>;

    beforeEach(() => {
        disconnectMock = vi.fn();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('must set isIntersecting to true on intersection', () => {
        const ref = { current: document.createElement('div') };
        let renderCount = 0;

        const { result } = renderHook(() => {
            renderCount++;
            return useIntersectionObserver(ref,{})
        });

        expect(result.current).toBe(false);
        expect(renderCount).toBe(1);

        act(() => {
            const observer = (global.IntersectionObserver as any).mock?.instances?.[0];
            if(observer) observer.trigger(true);

            vi.advanceTimersByTime(150);
        })
        
        expect(result.current).toBe(true);
        expect(renderCount).toBe(2);
    });

    it('must clean up observer on unmount to prevent memory leaks', () => {
        const ref = { current: document.createElement('div') };

        const { unmount } = renderHook(() => useIntersectionObserver(ref, {}));

        const observer = (global.IntersectionObserver as any).mock?.instances?.[0];
        if (! observer) throw new Error('Observer not created');
        
        act(() => unmount());

        expect(observer.disconnect).toHaveBeenCalledTimes(1);
    })
});
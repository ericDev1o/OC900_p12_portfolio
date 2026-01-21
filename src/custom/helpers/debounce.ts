/**
 * Delay fn function execution.
 * It is used to avoid avoid flickering around the root observed element. 
 * Flickering is alternate display / hide of the wrapped image.
 * This file avoids another dependency such as lodash.debounce, just-debounce or debounce-fn.
 * It is simple enough to embed it in the app, reducing network load and load time.
 * 
 * @param {T} fn function to run with debounce 
 * @param {number} delay time to wait in milliseconds before fn runs 
 * @returns {((...args: Parameters<T>) => void) & { cancel: () => void}}
 * debounce timer function with cancel function
 */
export default function debounce
    <
        T extends (...args: unknown[]) => void
    >
    (
        fn: T, 
        delay: number
    ):
    ((...args: Parameters<T>) => void) & { cancel: () => void}
{
    let timer: ReturnType<typeof setTimeout> | null = null;

    const debounced = (...args: Parameters<T>) => {
        if(timer !== null)
            clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };

    debounced.cancel = () => {
        if(timer !== null)
            clearTimeout(timer);
        timer = null;
    };

    return debounced;
}
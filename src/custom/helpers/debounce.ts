/**
 * Delay fn function execution.
 * It is used to avoid flickering around the root observed element. 
 * Flickering is alternate display / hide of the wrapped image.
 * This file avoids another dependency such as lodash.debounce, just-debounce or debounce-fn.
 * It is simple enough to embed it in the app, reducing network load and load time.
 * 
 * @template {T} function type to debounce 
 * @param {number} delay time to wait in milliseconds before fn runs 
 * @returns {((...args: Parameters<T>) => void) & { cancel: () => void}}
 * The debounced timer function with a cancel method.
 */
export default function debounceOneArg<T>
    (
        fn: (arg: T) => void, 
        delay: number
    ):
    ((arg: T) => void) & { cancel: () => void}
{
    let timer: ReturnType<typeof setTimeout> | null = null;

    const debounced = (arg: T) => {
        if(timer !== null)
            clearTimeout(timer);
        timer = setTimeout(() => fn(arg), delay);
    };

    debounced.cancel = () => {
        if(timer !== null)
            clearTimeout(timer);
        timer = null;
    };

    return debounced;
}
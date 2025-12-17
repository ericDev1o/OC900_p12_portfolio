/**
 * Delay fn function execution
 * @param {T} fn function to run with debounce 
 * @param {number} delay time to wait in milliseconds before fn runs 
 * @returns {((...args: Parameters<T>) => void) & { cancel: () => void}}
 * debounce timer function with cancel function
 */
export default function debounce<T extends (...args: any[]) => void>(fn: T, delay: number):
 ((...args: Parameters<T>) => void) & { cancel: () => void}
 {
    let timer: ReturnType<typeof setTimeout> | null = null;

    const debounced = (...args: Parameters<T>) => {
        timer && clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };

    debounced.cancel = () => {
        timer && clearTimeout(timer);
        timer = null;
    };

    return debounced;
}
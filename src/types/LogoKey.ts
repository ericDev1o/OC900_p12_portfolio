/**
 * // This is a less mutable reusable static type.
 * // A recommended practice for dynamic keys should be
 * 
 * import {logos} from '../config/logosPaths'
 * 
 * type LogoKey = keyof typeof logos;
 */
export type LogoKey = 
    'HTML' |
    'CSS' |
    'vite' |
    'JS' |
    'TS' |
    'react' |
    'linkedIn' |
    'gitHub' |
    'E'
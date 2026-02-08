import { expect } from 'vitest';
import * as matchers from 'vitest-axe/matchers';

expect.extend(matchers);

HTMLCanvasElement.prototype.getContext = function ()
: CanvasRenderingContext2D | WebGLRenderingContext | null 
{
    return null;
}
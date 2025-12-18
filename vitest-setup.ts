import './src/config/i18next';
import 'html-validate/vitest';
import { expect } from 'vitest';
import * as matchers from 'vitest-axe/matchers';

expect.extend(matchers);

HTMLCanvasElement.prototype.getContext = () => null as any;   
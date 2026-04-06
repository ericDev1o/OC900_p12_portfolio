import type { ReactElement } from 'react';

import { 
     type RenderResult, 
    render
} from '@testing-library/react';

import { TestProviders } from './TestProviders';

/**
 * Wrapper around Testing Library render with providers.
 * 
 * @param {ReactElement} ui React component to render
 * @returns {RenderResult} Render result with providers applied.
 * For example it wraps <LogoProvider> around ui 
 * to avoid "useLogo must be used within a LogoProvider" error.
 */
const customRender = (ui: ReactElement): RenderResult => 
    render(ui, { wrapper: TestProviders });

export * from '@testing-library/react';
export { customRender as render };
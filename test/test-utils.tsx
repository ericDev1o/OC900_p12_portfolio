import { ReactElement } from 'react';

import { render } from '@testing-library/react';

import { TestProviders } from './TestProviders';

/**
 * Provider wrapping render
 * @param ui React component to render
 * @returns render that wraps with hook providers.
 * For example it wraps <LogoProvider> around ui 
 * to avoid useLogo must be used within a LogoProvider error.
 */
const customRender = (ui: ReactElement) => render(
    ui, { 
        wrapper: TestProviders
    });

export * from '@testing-library/react';
export { customRender as render };
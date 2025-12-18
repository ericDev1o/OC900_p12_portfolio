import { ReactElement } from "react";
import { render, RenderOptions } from '@testing-library/react';

import { TestProviders } from "./TestProviders";

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: TestProviders, ...options});

export * from '@testing-library/react';
export { customRender as render };
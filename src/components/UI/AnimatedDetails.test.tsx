import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';

import AnimatedDetails from './AnimatedDetails';
import { toHaveNoViolations } from 'vitest-axe/matchers';

describe('AnimatedDetails custom accordion component', () => {
    it('should have no axe accessibility violations', async () => {
        const { container } = render(
        <AnimatedDetails summary='Découvrez ce projet'>
            <h6>test title</h6>
            <p> test paragraph</p>
        </AnimatedDetails> );
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    })
});
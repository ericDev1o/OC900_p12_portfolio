import { render } from '../../test/test-utils';
import { axe } from 'vitest-axe';

import Home from './Home';

describe('Home page', () => {
    it('should have no axe accessibility violations', async () => {
        const { container } = render(<Home />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    })
});
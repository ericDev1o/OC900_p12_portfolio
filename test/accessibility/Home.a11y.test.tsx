import { describe, it, expect } from 'vitest';
import { axe } from 'vitest-axe';

import { render } from '../test-utils';

import Home from '../../src/pages/Home';

describe('Home page', () => {
    it('should have no axe accessibility violations', async () => {
        // Arrange
        const { container } = render(<Home />);
        // Act
        const results = await axe(container);
        // Assert
        expect(results).toHaveNoViolations();
    })
});
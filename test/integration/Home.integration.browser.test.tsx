import { screen } from '@testing-library/react';

import { render } from '../test-utils';

import Home from '../../src/pages/Home';

/**
 * Main titles are all asserted in the same test because 
 *     1. it's the same logical behavior
 *     2. the render is expensive in the browser
 *     3. the fact that if one assertion fails the following don't run is not an issue
 *        because each text is critical and must be displayed
 */
describe('Home page', () => {
    it('must render most important content', async () => {
        // Arrange
        render(<Home />);
        // Act
        const h1 = await screen.findByRole
        (
            'heading',
            {
                name: 'Bonjour, je suis Eric',
                level: 1
            }
        );
        const h2SubTitle = await screen.findByRole
        (
            'heading',
            {
                name: 'votre intégrateur "web" react en Île-de-France',
                level: 2
            }
        );
        const about = await screen.findByRole
        (
            'heading',
            {
                name: 'À propos de moi',
                level: 3
            }
        );
        const skills = await screen.findByRole
        (
            'heading',
            {
                name: 'compétences',
                level: 3
            }
        );
        const projects = await screen.findByRole
        (
            'heading',
            {
                name: 'projets',
                level: 3
            }
        );
        const experience = await screen.findByRole
        (
            'heading',
            {
                name: 'parcours',
                level: 3
            }
        );
        const contact = await screen.findByRole
        (
            'heading',
            {
                name: 'contact',
                level: 3
            }
        );
        // Assert
        expect(h1).toBeInTheDocument();
        expect(h2SubTitle).toBeInTheDocument();
        expect(about).toBeInTheDocument();
        expect(skills).toBeInTheDocument();
        expect(projects).toBeInTheDocument();
        expect(experience).toBeInTheDocument();
        expect(contact).toBeInTheDocument();
    });
});
import { screen } from '@testing-library/react';

import { render } from '../test-utils';

import Home from '../../src/pages/Home';

describe('Home page', () => {
    it('must render most important content', async () => {
        // Arrange
        render(<Home />);
        
        const headings = [
            {
                name: 'Bonjour, je suis Eric',
                level: 1
            },
            {
                name: 'votre intégrateur web react en Île-de-France',
                level: 2
            },
            {
                name: 'À propos de moi',
                level: 3
            },
             {
                name: 'compétences',
                level: 3
            },
            {
                name: 'projets',
                level: 3
            },
            {
                name: 'parcours',
                level: 3
            },
            {
                name: 'contact',
                level: 3
            }
        ];
        // Act Assert
        for(const { name, level } of headings) {
            const heading = await screen.findByRole('heading', { name, level });

            expect(heading).toBeInTheDocument();
        }
    });
});
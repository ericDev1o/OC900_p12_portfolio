import { screen } from '@testing-library/react';

import { render } from '../test-utils';

import Home from '../../src/pages/Home';

type HeadingSpec = {
    name: string,
    level: number
};

describe('Home page', () => {
    it('must render most important content', async () => {
        // Arrange
        render(<Home />);
        
        const headings: HeadingSpec[] = [
            {
                name: 'Bonjour, je suis Eric',
                level: 1
            },
            {
                name: 'À propos de moi',
                level: 3
            },
             {
                name: 'Compétences',
                level: 3
            },
            {
                name: 'Projets',
                level: 3
            },
            {
                name: 'Parcours',
                level: 3
            },
            {
                name: 'Contact',
                level: 3
            }
        ];
        // Act Assert
        for(const { 
            name, 
            level 
        } of headings) {
            expect(
                screen.getByRole('heading', { name, level })
            ).toBeVisible();
        }
    });
});
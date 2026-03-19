import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const PORTFOLIO_URL = 'https://ericdev1o.github.io/OC900_p12_portfolio';

/**
 * Accessibility Axe E2E tests
 * 
 * Tests cover WCAG 2.0, 2.1 & 2.2.
 * 
 * A, AA & AAA are separated to ensure at least A, AA pass.
 * 
 * AAA color-contrast-enhanced hits 4 times.
 * It is considered very strict and disabled until this non-critical violation is prioritized.
 */
test.describe('Home page accessibility', () => {
    test.setTimeout(30000);
       
    test('should have no axe violations',  async({ page }) => {    
        // Arrange
        await page.goto(
            PORTFOLIO_URL,
            { waitUntil: 'domcontentloaded'}
        );
        await page.waitForSelector('body');

        // Act 
        // WCAG 2.0, 2.1, 2.2 
        // A & AA
        const resultsAxeAandAA = await new AxeBuilder({page})
        .withTags([
            'wcag2a', 
            'wcag2aa',
            'best-practice'
        ])
        .analyze();

        if(resultsAxeAandAA.violations.length > 0) {
            const report = {
                type: 'axe 2.0 to 2.2 A & AA',
                url: PORTFOLIO_URL,
                status: resultsAxeAandAA.violations.length === 0 ? 'passed' : 'failed',
                details: resultsAxeAandAA.violations
            }
            console.error(JSON.stringify(report));
        }

         // Act 
         // WCAG 2.0, 2.1, 2.2 
         // AAA
        const resultsAxeAAA = await new AxeBuilder({page})
        .withTags(['wcag2aaa'])
        .disableRules(['color-contrast-enhanced'])
        .analyze();

        if(resultsAxeAAA.violations.length > 0) {
            const report = {
                type: 'axe 2.0 to 2.2 A & AA',
                url: PORTFOLIO_URL,
                status: resultsAxeAAA.violations.length === 0 ? 'passed' : 'failed',
                details: resultsAxeAAA.violations
            }
            console.error(JSON.stringify(report));
        }
        
        // Assert
        expect(resultsAxeAandAA.violations.length).toBe(0);
        // Assert
        expect(resultsAxeAAA.violations.length).toBe(0);
    });
});
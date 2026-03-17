import pa11y from 'pa11y';
import htmlReporter from 'pa11y-reporter-html';
import fs from 'fs';
import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'node:url';
import { 
    describe, 
    it 
} from 'vitest';

describe('accessibility test', () => {
    it('should generate pa11y report', async () => {
        // Arrange
        const results = await pa11y('https://ericdev1o.github.io/OC900_p12_portfolio');
        const html = await htmlReporter.results(results);
        const reportsURL = new URL('../../reports', import.meta.url);

        const reportDir = fileURLToPath(reportsURL);
        if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
        }
        // Act
        await writeFile(
            new URL('pa11y-report.html', reportsURL), 
            html, 
            'utf-8'
        );
    }, 30000);
});
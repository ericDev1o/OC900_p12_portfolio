import pa11y from 'pa11y';
import htmlReporter from 'pa11y-reporter-html';
import fs from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';
import { describe, it } from 'vitest';

describe('accessibility test', () => {
    it('should generate pa11y report', async () => {
        const results = await pa11y('https://ericdev1o.github.io/OC900_p12_portfolio');
        const html = await htmlReporter.results(results);

        const reportDir = path.resolve(__dirname, '../../reports');
        if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
        }

        await writeFile(path.resolve(reportDir, 'pa11y-report.html'), html, 'utf-8');
    }, 30000);
});
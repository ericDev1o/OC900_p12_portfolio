import pa11y from 'pa11y';
import fs from 'fs/promises';

const results = pa11y('https://ericdev1o.github.io/OC900_p12_portfolio', {
    reporter: 'html'
});
await fs.writeFile('../../reports/pa11y-report.html', results, 'utf-8');

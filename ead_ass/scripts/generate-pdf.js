// Simple Puppeteer script to generate a PDF from Report_Template.html
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const projectRoot = path.resolve(__dirname, '..');
  const htmlPath = path.resolve(projectRoot, 'Report_Template.html');
  const outPath = path.resolve(projectRoot, 'Cricket_Scoreboard_Report.pdf');

  if (!fs.existsSync(htmlPath)) {
    console.error('Report_Template.html not found at', htmlPath);
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('file://' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0' });

  await page.pdf({
    path: outPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', bottom: '20mm', left: '20mm', right: '20mm' }
  });

  await browser.close();
  console.log('PDF generated at', outPath);
}

run().catch((err) => { console.error(err); process.exit(1); });

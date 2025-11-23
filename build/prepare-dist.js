const fs = require('fs');
const path = require('path');

const rootIndex = path.join(__dirname, '..', 'index.html');
const outDir = path.join(__dirname, '..', 'dist');
const outIndex = path.join(outDir, 'index.html');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

let html = fs.readFileSync(rootIndex, 'utf8');

// Replace links that point to dist/ when index.html will live inside dist
html = html.replace(/href="dist\/output\.css"/g, 'href="output.css"');
html = html.replace(/src="dist\/vendor\/cdn\.min\.js"/g, 'src="vendor/cdn.min.js"');

// write to dist/index.html
fs.writeFileSync(outIndex, html, 'utf8');
console.log('Prepared dist/index.html with corrected asset paths.');
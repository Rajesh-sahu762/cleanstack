const fs = require('fs');
const path = require('path');

function setupGlobalCss(rootPath) {

    const cssPath = path.join(
        rootPath,
        'src',
        'index.css'
    );

    const cssContent = `
@import "tailwindcss";

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family:sans-serif;
}
`;

    fs.writeFileSync(
        cssPath,
        cssContent
    );
}

module.exports = {
    setupGlobalCss
};
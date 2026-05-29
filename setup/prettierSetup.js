const fs = require('fs');
const path = require('path');

const {
    execSync
} = require('child_process');

function setupPrettier(rootPath) {

    console.log(
        '📦 Installing Prettier...\n'
    );

    execSync(
        'npm install -D prettier@3 eslint-config-prettier@9',
        {
            cwd: rootPath,
            stdio: 'inherit'
        }
    );

    // prettier config
    const prettierConfig = `
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
`;

    const prettierPath = path.join(
        rootPath,
        '.prettierrc'
    );

    fs.writeFileSync(
        prettierPath,
        prettierConfig
    );

    // prettier ignore
    const ignoreContent = `
node_modules
dist
`;

    const ignorePath = path.join(
        rootPath,
        '.prettierignore'
    );

    fs.writeFileSync(
        ignorePath,
        ignoreContent
    );
}

module.exports = {
    setupPrettier
};
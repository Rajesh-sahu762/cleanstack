const fs = require('fs');
const path = require('path');

const {
    execSync
} = require('child_process');

function setupESLint(rootPath) {

    console.log(
        '📦 Installing ESLint...\n'
    );

    execSync(
        'npm install -D eslint@9 eslint-plugin-react@7 eslint-plugin-react-hooks@5 eslint-plugin-react-refresh@0.4',
        {
            cwd: rootPath,
            stdio: 'inherit'
        }
    );

    const eslintConfig = `
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
  ],
  rules: {},
};
`;

    const eslintPath = path.join(
        rootPath,
        '.eslintrc.cjs'
    );

    fs.writeFileSync(
        eslintPath,
        eslintConfig
    );
}

module.exports = {
    setupESLint
};
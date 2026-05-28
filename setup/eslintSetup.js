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
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'

export default defineConfig([
{
    files: ['**/*.{js,jsx}'],
    plugins: {
        js,
        react,
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
    },
    extends: [
        'js/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    languageOptions: {
        globals: globals.browser,
        parserOptions: {
            ecmaVersion: 'latest',
            ecmaFeatures: {
                jsx: true,
            },
            sourceType: 'module',
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
},
])
`;

    const eslintPath = path.join(
        rootPath,
        'eslint.config.js'
    );

    fs.writeFileSync(
        eslintPath,
        eslintConfig
    );
}

module.exports = {
    setupESLint
};
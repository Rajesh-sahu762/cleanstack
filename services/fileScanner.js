const fs = require('fs');
const path = require('path');

function scanReactFiles(rootPath) {

    const files = {

        modify: [],
        delete: []

    };

    // App.jsx
    const appPath = path.join(
        rootPath,
        'src',
        'App.jsx'
    );

    if (fs.existsSync(appPath)) {

        files.modify.push(
            'src/App.jsx'
        );
    }

    // index.css
    const cssPath = path.join(
        rootPath,
        'src',
        'index.css'
    );

    if (fs.existsSync(cssPath)) {

        files.modify.push(
            'src/index.css'
        );
    }

    // App.css
    const appCssPath = path.join(
        rootPath,
        'src',
        'App.css'
    );

    if (fs.existsSync(appCssPath)) {

        files.delete.push(
            'src/App.css'
        );
    }

    // react.svg
    const reactLogo = path.join(
        rootPath,
        'src',
        'assets',
        'react.svg'
    );

    if (fs.existsSync(reactLogo)) {

        files.delete.push(
            'src/assets/react.svg'
        );
    }

    // vite.svg
    const viteLogo = path.join(
        rootPath,
        'src',
        'assets',
        'vite.svg'
    );

    if (fs.existsSync(viteLogo)) {

        files.delete.push(
            'src/assets/vite.svg'
        );
    }

    return files;
}

module.exports = {
    scanReactFiles
};
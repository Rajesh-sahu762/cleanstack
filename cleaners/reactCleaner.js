console.log("REACT CLEANER LOADED");

const fs = require('fs');
const path = require('path');

/** @param {string} rootPath */
function cleanReactProject(rootPath) {

    console.log("CLEAN FUNCTION STARTED");

    // App.jsx
    const appPath = path.join(
        rootPath,
        'src',
        'App.jsx'
    );

    if (fs.existsSync(appPath)) {

        fs.writeFileSync(
    appPath,
`function App() {
  return (
    <h1>Hello World! 🚀</h1>
    <p>CleanStack Working 🚀</p>
  )
}

export default App;
`,
'utf8'
);

console.log("APP FILE WRITTEN");
    }

    const content = fs.readFileSync(appPath, 'utf8');

console.log("UPDATED CONTENT:");
console.log(content);

    // index.css
    const cssPath = path.join(
        rootPath,
        'src',
        'index.css'
    );

    if (fs.existsSync(cssPath)) {
        fs.writeFileSync(cssPath, '');
    }

    // App.css
    const appCssPath = path.join(
        rootPath,
        'src',
        'App.css'
    );

    if (fs.existsSync(appCssPath)) {
        fs.unlinkSync(appCssPath);
    }

    // react.svg
    const reactLogo = path.join(
        rootPath,
        'src',
        'assets',
        'react.svg'
    );

    if (fs.existsSync(reactLogo)) {
        fs.unlinkSync(reactLogo);
    }

    // vite.svg
    const viteLogo = path.join(
        rootPath,
        'src',
        'assets',
        'vite.svg'
    );

    if (fs.existsSync(viteLogo)) {
        fs.unlinkSync(viteLogo);
    }
}

module.exports = {
    cleanReactProject
};
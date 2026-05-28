const { execSync } = require('child_process');

function setupTailwind(rootPath) {

    execSync(
        'npm install -D tailwindcss @tailwindcss/vite',
        {
            cwd: rootPath,
            stdio: 'inherit'
        }
    );
}

module.exports = {
    setupTailwind
};
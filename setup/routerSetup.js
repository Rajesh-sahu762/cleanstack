const { execSync } = require('child_process');

function setupReactRouter(rootPath) {

    execSync(
        'npm install react-router-dom',
        {
            cwd: rootPath,
            stdio: 'inherit'
        }
    );
}

module.exports = {
    setupReactRouter
};
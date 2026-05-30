const fs = require('fs');
const path = require('path');


function findReactProjectRoot(rootPath) {

    const items = fs.readdirSync(rootPath);

    // Check current folder
    const hasSrc = fs.existsSync(
        path.join(rootPath, 'src')
    );

    const hasApp =

    fs.existsSync(
        path.join(rootPath, 'src', 'App.jsx')
    ) ||

    fs.existsSync(
        path.join(rootPath, 'src', 'App.tsx')
    );

    if (hasSrc && hasApp) {
        return rootPath;
    }

    // Search subfolders
    for (const item of items) {

        const fullPath = path.join(rootPath, item);

        if (
            fs.statSync(fullPath).isDirectory()
        ) {

            try {

                const result =
                    findReactProjectRoot(fullPath);

                if (result) {
                    return result;
                }

            } catch (err) {}
        }
    }

    return null;
}

module.exports = {
    findReactProjectRoot
};
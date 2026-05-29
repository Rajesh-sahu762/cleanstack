const fs = require('fs');
const path = require('path');


function findReactProjectRoot(startPath) {

    const items = fs.readdirSync(startPath);

    // Check current folder
    const hasSrc = fs.existsSync(
        path.join(startPath, 'src')
    );

    const hasApp =

    fs.existsSync(
        path.join(startPath, 'src', 'App.jsx')
    ) ||

    fs.existsSync(
        path.join(startPath, 'src', 'App.tsx')
    );

    if (hasSrc && hasApp) {
        return startPath;
    }

    // Search subfolders
    for (const item of items) {

        const fullPath = path.join(startPath, item);

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
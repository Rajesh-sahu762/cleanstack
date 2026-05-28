const fs = require('fs');
const path = require('path');

function setupFolders(rootPath) {

    const folders = [

        'src/components',
        'src/pages',
        'src/layouts',
        'src/routes',
        'src/hooks',
        'src/utils',
        'src/assets'

    ];

    folders.forEach(folder => {

        const fullPath =
            path.join(rootPath, folder);

        if (!fs.existsSync(fullPath)) {

            fs.mkdirSync(
                fullPath,
                { recursive: true }
            );
        }
    });
}

module.exports = {
    setupFolders
};
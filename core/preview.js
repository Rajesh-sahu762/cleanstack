const {
    findReactProjectRoot
} = require('../services/projectDetector');

const {
    scanReactFiles
} = require('../services/fileScanner');

async function runPreviewProcess(startPath) {

    console.log('\n🔍 Detecting project...\n');

    const rootPath =
        findReactProjectRoot(startPath);

    if (!rootPath) {

        console.log(
            '❌ No React project found.'
        );

        return;
    }

    console.log(
        '✅ React project found:\n'
    );

    console.log(rootPath);

    const files =
        scanReactFiles(rootPath);

    console.log('\n📋 Preview Mode\n');

    console.log('Files to modify:\n');

    if (files.modify.length === 0) {

        console.log('None');

    } else {

        files.modify.forEach(file => {
            console.log('- ' + file);
        });
    }

    console.log('\nFiles to delete:\n');

    if (files.delete.length === 0) {

        console.log('None');

    } else {

        files.delete.forEach(file => {
            console.log('- ' + file);
        });
    }

    console.log(
        '\n⚠️ No files were modified.\n'
    );
}

module.exports = {
    runPreviewProcess
};
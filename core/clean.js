const readline = require('readline-sync');

const {
    findReactProjectRoot
} = require('../services/projectDetector');

const {
    scanReactFiles
} = require('../services/fileScanner');

const {
    cleanReactProject
} = require('../cleaners/reactCleaner');

async function runCleanProcess(startPath) {

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

    // Preview
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

    // Confirmation
    const answer =
        readline.question(
            '\nProceed with cleanup? (y/n): '
        );

    if (
        answer.toLowerCase() !== 'y'
    ) {

        console.log(
            '\n❌ Cleanup cancelled.\n'
        );

        return;
    }

    // Cleanup
    console.log(
        '\n🧹 Cleaning project...\n'
    );

    cleanReactProject(rootPath);

    console.log(
        '\n🚀 CleanStack cleanup completed.\n'
    );
}

module.exports = {
    runCleanProcess
};
const fs = require('fs');
const path = require('path');

async function runRestoreProcess(
    startPath
) {

    const backupDir = path.join(
        startPath,
        '.cleanstack',
        'backup'
    );

    if (!fs.existsSync(backupDir)) {

        console.log(
            '\n❌ No backup found.\n'
        );

        return;
    }

    const files =
        fs.readdirSync(backupDir);

    files.forEach(file => {

        const backupPath =
            path.join(backupDir, file);

        const originalRelative =
            file
                .replace(/_/g, '/')
                .replace('.bak', '');

        const originalPath =
            path.join(
                startPath,
                originalRelative
            );

        const originalDir =
            path.dirname(originalPath);

        if (
            !fs.existsSync(originalDir)
        ) {

            fs.mkdirSync(
                originalDir,
                { recursive: true }
            );
        }

        fs.copyFileSync(
            backupPath,
            originalPath
        );

        console.log(
            '♻️ Restored:',
            originalRelative
        );
    });

    console.log(
        '\n✅ Backup restored.\n'
    );
}

module.exports = {
    runRestoreProcess
};
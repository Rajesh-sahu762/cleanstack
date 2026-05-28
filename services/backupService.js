const fs = require('fs');
const path = require('path');

function ensureBackupFolder(rootPath) {

    const backupDir = path.join(
        rootPath,
        '.cleanstack',
        'backup'
    );

    if (!fs.existsSync(backupDir)) {

        fs.mkdirSync(
            backupDir,
            { recursive: true }
        );
    }

    return backupDir;
}

function backupFile(
    rootPath,
    relativeFilePath
) {

    const originalPath = path.join(
        rootPath,
        relativeFilePath
    );

    if (!fs.existsSync(originalPath)) {
        return;
    }

    const backupDir =
        ensureBackupFolder(rootPath);

    const backupName =
        relativeFilePath
            .replace(/\//g, '_')
        + '.bak';

    const backupPath = path.join(
        backupDir,
        backupName
    );

    fs.copyFileSync(
        originalPath,
        backupPath
    );

    console.log(
        '📦 Backup created:',
        backupName
    );
}

module.exports = {
    backupFile
};
const fs = require('fs');
const path = require('path');

function detectFramework(rootPath) {

    const packageJsonPath = path.join(
        rootPath,
        'package.json'
    );

    if (!fs.existsSync(packageJsonPath)) {
        return null;
    }

    const packageJson = JSON.parse(
        fs.readFileSync(
            packageJsonPath,
            'utf8'
        )
    );

    const dependencies = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies
    };

    if (dependencies.react) {

        if (dependencies.next) {
            return 'next';
        }

        return 'react';
    }

    if (dependencies.vue) {
        return 'vue';
    }

    if (dependencies['@angular/core']) {
        return 'angular';
    }

    return 'unknown';
}

module.exports = {
    detectFramework
};
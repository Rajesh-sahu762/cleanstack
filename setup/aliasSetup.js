const fs = require('fs');
const path = require('path');

function setupAliases(rootPath) {

    // jsconfig.json
    const jsConfigPath = path.join(
        rootPath,
        'jsconfig.json'
    );

    const jsConfig = {
        compilerOptions: {
            baseUrl: ".",
            paths: {
                "@/*": ["src/*"]
            }
        }
    };

    fs.writeFileSync(
        jsConfigPath,
        JSON.stringify(jsConfig, null, 2)
    );

    // vite.config.js
  const viteJs = path.join(
    rootPath,
    'vite.config.js'
);

const viteTs = path.join(
    rootPath,
    'vite.config.ts'
);

const viteConfigPath =
    fs.existsSync(viteJs)
        ? viteJs
        : viteTs;

    let viteConfig =
        fs.readFileSync(
            viteConfigPath,
            'utf8'
        );

    if (
        !viteConfig.includes(
            "import path from 'path'"
        )
    ) {

        viteConfig =
            viteConfig.replace(
                "import { defineConfig } from 'vite'",
                `import { defineConfig } from 'vite'
import path from 'path'`
            );
    }

    if (
        !viteConfig.includes(
            "resolve:"
        )
    ) {

        viteConfig =
            viteConfig.replace(
                "})",
` 
  resolve: {
    alias: {
      '@': path.resolve(
        __dirname,
        './src'
      )
    }
  }
})`
            );
    }

    fs.writeFileSync(
        viteConfigPath,
        viteConfig
    );
}

module.exports = {
    setupAliases
};
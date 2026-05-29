const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');


function setupTailwind(rootPath) {

    execSync(
        'npm install -D tailwindcss @tailwindcss/vite',
        {
            cwd: rootPath,
            stdio: 'inherit'
        }
    );

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

let viteConfig = fs.readFileSync(
    viteConfigPath,
    'utf8'
);

if (
    !viteConfig.includes(
        "@tailwindcss/vite"
    )
) {
    viteConfig =
        viteConfig.replace(
            "import react from '@vitejs/plugin-react'",
            `import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'`
        );
}
viteConfig =
    viteConfig.replace(
        'plugins: [react()]',
`plugins: [
    react(),
    tailwindcss()
]`
    );

    fs.writeFileSync(
    viteConfigPath,
    viteConfig
);



}

module.exports = {
    setupTailwind
};
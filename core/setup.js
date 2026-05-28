const readline = require("readline-sync");

const { findReactProjectRoot } = require("../services/projectDetector");

const { cleanReactProject } = require("../cleaners/reactCleaner");

const { setupTailwind } = require("../setup/tailwindSetup");

const { setupReactRouter } = require("../setup/routerSetup");

const { setupFolders } = require("../setup/folderSetup");

const { setupGlobalCss } = require("../setup/globalCssSetup");

const { setupESLint } = require("../setup/eslintSetup");

const { setupPrettier } = require("../setup/prettierSetup");

async function runSetupProcess(startPath) {
  console.log("\n🚀 CleanStack Setup\n");

  const rootPath = findReactProjectRoot(startPath);

  if (!rootPath) {
    console.log("❌ No React project found.");

    return;
  }

  console.log("✅ React project found:\n");

  console.log(rootPath);

  // Preview
  console.log("\n📋 Setup Preview\n");

  console.log(
    `✔ Clean React boilerplate
✔ Install Tailwind CSS
✔ Install React Router
✔ Create production folders
✔ Setup global CSS
✔ Setup ESLint
✔ Setup Prettier
`,
  );

  const answer = readline.question("\nProceed with setup? (y/n): ");

  if (answer.toLowerCase() !== "y") {
    console.log("\n❌ Setup cancelled.\n");

    return;
  }

  console.log("\n🧹 Cleaning project...\n");

  cleanReactProject(rootPath);

  console.log("\n🎨 Setting up Tailwind...\n");

  setupTailwind(rootPath);

  console.log("\n🛣 Setting up Router...\n");

  setupReactRouter(rootPath);

  console.log("\n📁 Creating folders...\n");

  setupFolders(rootPath);

  console.log("\n🎨 Setting up Global CSS...\n");

  setupGlobalCss(rootPath);

  console.log(
    '\n🧹 Setting up ESLint...\n'
);

setupESLint(rootPath);

console.log(
    '\n✨ Setting up Prettier...\n'
);

setupPrettier(rootPath);

  console.log("\n🚀 Production setup completed.\n");
}

module.exports = {
  runSetupProcess,
};

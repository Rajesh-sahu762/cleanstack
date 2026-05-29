const { handleError } = require("../utils/handleError");

const readline = require("readline-sync");

const { findReactProjectRoot } = require("../services/projectDetector");

const { detectFramework } = require("../services/frameworkDetector");

const { cleanReactProject } = require("../cleaners/reactCleaner");

const { setupTailwind } = require("../setup/tailwindSetup");

const { setupReactRouter } = require("../setup/routerSetup");

const { setupFolders } = require("../setup/folderSetup");

const { setupGlobalCss } = require("../setup/globalCssSetup");

const { setupAliases } = require("../setup/aliasSetup");

// const { setupESLint } = require("../setup/eslintSetup");

const { setupPrettier } = require("../setup/prettierSetup");

async function runSetupProcess(startPath) {
  console.log("\n🚀 CleanStack Setup\n");

 const rootPath = findReactProjectRoot(startPath);

if (!rootPath) {

    console.log(
        '\n❌ No React project found.\n'
    );

    console.log(
        'CleanStack currently supports React + Vite projects only.\n'
    );

    return;
}

const framework =
    detectFramework(rootPath);

if (framework !== 'react') {

    console.log(
        '\n❌ Unsupported Framework\n'
    );

    console.log(
        `Detected: ${framework}`
    );

    console.log(
        '\nCleanStack currently supports React + Vite only.\n'
    );

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
✔ Setup Path Aliases
✔ Setup Prettier
`,
);

  const answer = readline.question("\nProceed with setup? (y/n): ");

  if (answer.toLowerCase() !== "y") {
    console.log("\n❌ Setup cancelled.\n");

    return;
  }

  try {
      console.log("\n[1/7] Cleaning Project...\n");
      cleanReactProject(rootPath);
    
  } catch (error) {
    handleError(error, 'Project Cleaning');
    
  }

  try {
      console.log("\n[2/7] Setting up Tailwind...\n");
      setupTailwind(rootPath);
    
  } catch (error) {
    handleError(error, 'Tailwind Setup');
    
  }

  try {
      
        console.log("\n[3/7] Setting up Router...\n");
        setupReactRouter(rootPath);
    
  } catch (error) {
    handleError(error, 'React Router Setup');
  }

  try {
      
        console.log("\n[4/7] Creating folders...\n");
      
        setupFolders(rootPath);
    
  } catch (error) {
    handleError(error, 'Folder Setup');
  }

  try {
      
        console.log("\n[5/7] Setting up Global CSS...\n");
      
        setupGlobalCss(rootPath);
    
  } catch (error) {
    handleError(error, 'Global CSS Setup');
  }

  try {
      
        console.log("\n[6/7] Setting up aliases...\n");
      
        setupAliases(rootPath);
    
  } catch (error) {
    handleError(error, 'Alias Setup');
  }

  try {
      
        console.log("\n[7/7] Setting up Prettier...\n");
      
        setupPrettier(rootPath);
    
  } catch (error) {
    handleError(error, 'Prettier Setup');
  }

  console.log("\n🚀 Production setup completed.\n");
}

module.exports = {
  runSetupProcess,
};

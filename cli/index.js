#!/usr/bin/env node


console.log("CLEANSTACK VERSION 2");

const path = require("path");

const { runCleanProcess } = require("../core/clean");

const { runPreviewProcess } = require("../core/preview");

const { runSetupProcess } = require("../core/setup");

const command = process.argv[2];

const currentPath = process.cwd();

async function main() {
  switch (command) {
    case "clean":
      await runCleanProcess(currentPath);

      break;

    case "preview":
      await runPreviewProcess(currentPath);

      break;

      case 'setup':

    await runSetupProcess(
        currentPath
    );

    break;

    default:
      console.log(`
CleanStack CLI

Commands:

cleanstack clean
cleanstack preview
cleanstack restore
`);
  }
}

main();

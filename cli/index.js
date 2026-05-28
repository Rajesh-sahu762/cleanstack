#!/usr/bin/env node

const path = require("path");

const { runCleanProcess } = require("../core/clean");

const { runPreviewProcess } = require("../core/preview");

const {
    runRestoreProcess
} = require('../core/restore');

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

      case 'restore':

    await runRestoreProcess(
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

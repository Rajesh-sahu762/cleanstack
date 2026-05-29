#!/usr/bin/env node



const path = require("path");

const { runCleanProcess } = require("../core/clean");

const { runPreviewProcess } = require("../core/preview");

const { runSetupProcess } = require("../core/setup");

const command = process.argv[2];

if (
    command === '--help' ||
    command === '-h'
) {

    showHelp();

    return;
}

function showUnknownCommand(command) {

    console.log(
`\n❌ Unknown command: ${command}

Commands:
  cleanstack setup
  cleanstack clean
  cleanstack preview

Run:
  cleanstack --help\n`
    );
}

if (
    command === '--version' ||
    command === '-v'
) {

    showVersion();

    return;
}

const currentPath = process.cwd();


function showHelp() {

    console.log(`
🚀 CleanStack CLI

Usage:

  cleanstack setup
  cleanstack clean
  cleanstack preview

Options:

  -h, --help
  -v, --version
`);
}

function showVersion() {

    console.log(
        '\nCleanStack v1.0.0\n'
    );
}

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
cleanstack setup
`);
  }
}

main();

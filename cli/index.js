#!/usr/bin/env node



const path = require("path");

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
  cleanstack
cleanstack setup

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

  cleanstack    
  cleanstack setup

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

    case undefined:

        await runSetupProcess(
            currentPath
        );

        break;

    case "setup":

        await runSetupProcess(
            currentPath
        );

        break;

    default:

        showUnknownCommand(
            command
        );
}
}

main();

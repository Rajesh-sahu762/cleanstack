console.log("EXTENSION FILE LOADED");

const vscode = require("vscode");

const { cleanReactProject } = require("./cleaners/reactCleaner");
const {
    findReactProjectRoot
} = require('./services/projectDetector');


/** @param {vscode.ExtensionContext} context */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "cleanstack.cleanReact",
    function () {
      const workspaceFolders = vscode.workspace.workspaceFolders;

      if (!workspaceFolders) {
        vscode.window.showErrorMessage("Open a React project first.");

        return;
      }

    const workspacePath =
    workspaceFolders[0].uri.fsPath;

const rootPath =
    findReactProjectRoot(workspacePath);

if (!rootPath) {

    vscode.window.showErrorMessage(
        'No React project found.'
    );

    return;
}

      try {
        console.log("RUNNING CLEANER");

        cleanReactProject(rootPath);

        vscode.window.showInformationMessage(
          "CleanStack: React project cleaned successfully.",
        );
      } catch (error) {
        vscode.window.showErrorMessage("CleanStack Error: " + error.message);
      }
    },
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};

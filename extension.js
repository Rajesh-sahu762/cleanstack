console.log("EXTENSION FILE LOADED");

const vscode = require("vscode");

const { runSetupProcess } = require("./core/setup");

const {
    findReactProjectRoot
} = require('./services/projectDetector');

/** @param {vscode.ExtensionContext} context */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "cleanstack.start",
    async function () {
      const workspaceFolders = vscode.workspace.workspaceFolders;

      if (!workspaceFolders) {
        vscode.window.showErrorMessage("Open a project folder first.");

        return;
      }

    const workspacePath =
    workspaceFolders[0].uri.fsPath;

const rootPath =
    findReactProjectRoot(workspacePath);

      try {
        runSetupProcess(rootPath);
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

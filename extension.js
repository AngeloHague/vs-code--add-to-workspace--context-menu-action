// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposable = vscode.commands.registerCommand('angelohague-add-to-workspace--context-menu-action.addFolderToWorkspace', function (uri) {
        if (uri && uri.fsPath) {
            const newFolderUri = vscode.Uri.file(uri.fsPath);
            const currentWorkspaceFolders = vscode.workspace.workspaceFolders;

            if (currentWorkspaceFolders) {
                vscode.workspace.updateWorkspaceFolders(currentWorkspaceFolders.length, null, { uri: newFolderUri });
            } else {
                vscode.commands.executeCommand('vscode.openFolder', newFolderUri, true);
            }
        } else {
            vscode.window.showErrorMessage('No folder selected to add to workspace');
        }
    });

    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}

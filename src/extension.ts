import * as vscode from 'vscode';
var breakpointtoggle = true;
export function activate(context: vscode.ExtensionContext) {
	// idea: hide the debug/toolbar ?

	let debugRestart	 	= vscode.commands.registerCommand(`debug-in-titlebar.debug-restart`, () => {
							  vscode.commands.executeCommand('workbench.action.debug.restart');
	});
	let debugPause	 	= vscode.commands.registerCommand(`debug-in-titlebar.debug-pause`, () => {
		vscode.commands.executeCommand('workbench.action.debug.pause');
	});
	let debugStart		 	= vscode.commands.registerCommand(`debug-in-titlebar.debug-start`, () => {
							  vscode.commands.executeCommand('workbench.action.debug.start');
	});
	let debugStop		 	= vscode.commands.registerCommand(`debug-in-titlebar.debug-stop`, () => {
							  vscode.commands.executeCommand('workbench.action.debug.stop');
	});
	let debugContinue	 	= vscode.commands.registerCommand(`debug-in-titlebar.debug-continue`, () => {
							  vscode.commands.executeCommand('workbench.action.debug.continue');
	});
	let debugStepInto	 	= vscode.commands.registerCommand(`debug-in-titlebar.debug-stepInto`, () => {
							  vscode.commands.executeCommand('workbench.action.debug.stepInto');
	});
	let debugStepOut	 	= vscode.commands.registerCommand(`debug-in-titlebar.debug-stepOut`, () => {
							vscode.commands.executeCommand('workbench.action.debug.stepOut');
	});
	let debugStepOver	 	= vscode.commands.registerCommand(`debug-in-titlebar.debug-stepOver`, () => {
							  vscode.commands.executeCommand('workbench.action.debug.stepOver');
	});
	let debugToggleBreakPoints	 	= vscode.commands.registerCommand(`debug-in-titlebar.debug-toggleBreakpoints`, () => {
		if (!breakpointtoggle) {
			vscode.commands.executeCommand('workbench.debug.viewlet.action.enableAllBreakpoints');
		}
		else {
			vscode.commands.executeCommand('workbench.debug.viewlet.action.disableAllBreakpoints');
		}
		breakpointtoggle = !breakpointtoggle;
	});

	context.subscriptions.push(debugRestart,debugStart,debugStop,debugContinue,debugStepInto,debugStepOut,debugStepOver,debugPause,debugToggleBreakPoints);
}

export function deactivate() {}

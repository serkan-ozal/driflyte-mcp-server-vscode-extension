import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    // Register Driflyte MCP Server
    context.subscriptions.push(vscode.lm.registerMcpServerDefinitionProvider('driflyte', {
        provideMcpServerDefinitions(): vscode.McpServerDefinition[] {
            return [
                new vscode.McpStdioServerDefinition(
                    'driflyte',
                    'node',
                    [
                        path.join(__dirname, '..', 'node_modules', '@driflyte', 'mcp-server', 'dist', 'index.cjs'),
                    ]
                )
            ];
        }
    }));
}

export function deactivate() { }

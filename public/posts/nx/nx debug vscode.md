# nx debug vscode

## launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch server",
      "request": "launch",
      "type": "node",
      "runtimeExecutable": "npx",
      "runtimeArgs": ["nx", "serve", "server"],
      "console": "integratedTerminal",
      "cwd": "${workspaceFolder}/apps/server"
    }
  ]
}
```

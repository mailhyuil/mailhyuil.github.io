# debug debugger nx

## launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Server",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "npx",
      "runtimeArgs": ["nx", "serve", "server"],
      "cwd": "${workspaceFolder}/apps/server",
      "console": "integratedTerminal"
    },
    {
      "name": "Debug Client",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:4200",
      "webRoot": "${workspaceFolder}",
      "sourceMapPathOverrides": {
        "webpack:/*": "${webRoot}/*",
        "/./*": "${webRoot}/*",
        "/src/*": "${webRoot}/src/*",
        "/*": "*",
        "/./~/*": "${workspaceFolder}/node_modules/*"
      }
    }
  ]
}
```

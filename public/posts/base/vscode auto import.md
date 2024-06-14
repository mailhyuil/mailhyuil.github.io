# vscode auto import all

## settings.json

```json
"editor.codeActionsOnSave": { "source.addMissingImports": "always" }
```

## keybindings.json

```json
{
  "key": "ctrl+shift+i",
  "command": "editor.action.sourceAction",
  "args": {
    "kind": "source.addMissingImports",
    "apply": "first"
  }
}
```

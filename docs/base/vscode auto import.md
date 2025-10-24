# vscode auto import

> 코드 베이스에 module이 최소 한번 import되어야 vscode의 auto suggestion이 작동한다.

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

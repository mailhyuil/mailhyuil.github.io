# vscode 자동 타입추론 안될 때 (autocompletion & autosuggestion & intellisense)

```sh
npm init
vscode -> Javascript: Reload Project
# 이래도 안되면

npm i -D @types/node
vscode -> Javascript: Reload Project

# 이래도 안되면 jsconfig.json 추가
```

## jsconfig.json

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ES6"
  },
  "exclude": ["node_modules", "**/node_modules/*"]
}
```

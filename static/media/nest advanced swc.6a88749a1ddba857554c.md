# nest advanced swc

## install

```sh
npm i -D @swc/cli
npm i -D @swc/core

# monorepo (nx) 사용 시
npm i -D swc-loader
npm i -D @nestjs/cli
```

## project.json

```json
{
  "compilerOptions": {
    "builder": "swc"
  }
}
```

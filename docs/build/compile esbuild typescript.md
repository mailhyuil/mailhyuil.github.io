# compile esbuild typescript

## install

```sh
npm i -D typescript
npm i -D @types/node
npm i -D esbuild
npm i -D esbuild-node-tsc # etsc 명령어 사용
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "allowJs": true,
    "removeComments": true,
    "resolveJsonModule": true,
    "typeRoots": ["./node_modules/@types"],
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "baseUrl": ".",
    "forceConsistentCasingInFileNames": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "moduleResolution": "Node",
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## package.json

```json
{
  "scripts": {
    "start": "etsc && node dist/server.js"
  }
}
```

# babel typescript

> babel은 컴파일 시 타입검사를 할 수 없고 index.d.ts를 생성할 수 없다.
>
> > 때문에 typescript 패키지를 함께 사용해서 typescript로 타입검사를 하고 index.d.ts를 생성 컴파일만 babel로

## tsconfig.json

```json
{
  "compilerOptions": {
    // Target latest version of ECMAScript.
    "target": "esnext",
    // Search under node_modules for non-relative imports.
    "moduleResolution": "node",
    // Process & infer types from .js files.
    "allowJs": true,
    // Don't emit; allow Babel to transform files.
    // "noEmit": true,
    "emitDeclarationOnly": true,
    // Enable strictest settings like strictNullChecks & noImplicitAny.
    "strict": true,
    // Import non-ES modules as default imports.
    "esModuleInterop": true,
    // Ensure that .d.ts files are created by tsc, but not .js files
    "declaration": true,
    // Ensure that Babel can safely transpile files in the TypeScript project
    "isolatedModules": true,
    "outDir": "dist"
  },
  "include": [
    "src" // <-- change this to where your source files are
  ]
}
```

## package.json

```json
"scripts": {
    "type-check": "tsc --noEmit",
    "type-check:watch": "npm run type-check -- --watch",
    "build:types": "tsc --emitDeclarationOnly", // tsc로 타입 체크
    "build:js": "babel src --out-dir lib --extensions \".ts,.tsx\" --source-maps inline", // babel로 build
    "build": "npm run build:types && npm run build:js"
}
```

# bundle esbuild typescript

## install

```sh
npm i -D esbuild
```

## esbuild.config.js

```js
const esbuild = require("esbuild");
const dependencies = require("./package.json").dependencies;
esbuild.build({
  entryPoints: ["./src/main.ts"],
  platform: "node",
  bundle: true,
  sourcemap: true,
  outfile: "dist/main.js",
  target: "node12",
  external: dependencies ? Object.keys(dependencies) : undefined,
});
```

## package.json

```json
{
  "scripts": {
    "start": "node esbuild.config.js && node dist/server.js"
  }
}
```

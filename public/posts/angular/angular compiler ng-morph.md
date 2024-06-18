# compile ng-morph

## install

```sh
npm i -D ng-morph
```

## usage

```ts
import * as ts from "ng-morph";

const project = new ts.Project({
  tsConfigFilePath: "./tsconfig.base.json",
});

const sourceFiles = project.getSourceFiles("apps/client/src/**/*.component.html");

sourceFiles.forEach((s: any) => {
  const text = s.getFullText();
  console.log(text);
});
```

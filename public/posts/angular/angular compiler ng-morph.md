# compile ng-morph

## install

```sh
npm i -D ng-morph
```

## usage

```ts
import { setActiveProject, createProject, getImports, NgMorphTree } from "ng-morph";

/**
 * set all ng-morph functions to work with the all TS and JSON files
 * of the current project
 * */
setActiveProject(createProject(new NgMorphTree(), "/", ["**/*.ts", "**/*.json"]));

/**
 * This simple migration gets all imports from the project TS files and
 * replaces 'old' substring with 'new'
 * */
const imports = getImports("some/path/**.ts", {
  moduleSpecifier: "@morph-old*",
});

editImports(imports, (importEntity) => ({
  moduleSpecifier: importEntity.moduleSpecifier.replace("old", "new"),
}));

/**
 * All changes are made in a virtual project.
 * You can save them when it is time
 * */
saveActiveProject();
```

# tsc AST ts-morph

## install

```sh
npm i -D ts-morph
```

## usage

```ts
import { Project, StructureKind } from "ts-morph";

// initialize
const project = new Project({
  // Optionally specify compiler options, tsconfig.json, in-memory file system, and more here.
  // If you initialize with a tsconfig.json, then it will automatically populate the project
  // with the associated source files.
  // Read more: https://ts-morph.com/setup/
});

// add source files
project.addSourceFilesAtPaths("src/**/*.ts");
const myClassFile = project.createSourceFile("src/MyClass.ts", "export class MyClass {}");
const myEnumFile = project.createSourceFile("src/MyEnum.ts", {
  statements: [
    {
      kind: StructureKind.Enum,
      name: "MyEnum",
      isExported: true,
      members: [{ name: "member" }],
    },
  ],
});

// get information
const myClass = myClassFile.getClassOrThrow("MyClass");
myClass.getName(); // returns: "MyClass"
myClass.hasExportKeyword(); // returns: true
myClass.isDefaultExport(); // returns: false

// manipulate
const myInterface = myClassFile.addInterface({
  name: "IMyInterface",
  isExported: true,
  properties: [
    {
      name: "myProp",
      type: "number",
    },
  ],
});

myClass.rename("NewName");
myClass.addImplements(myInterface.getName());
myClass.addProperty({
  name: "myProp",
  initializer: "5",
});

project.getSourceFileOrThrow("src/ExistingFile.ts").delete();

// asynchronously save all the changes above
await project.save();

// get underlying compiler node from the typescript AST from any node
const compilerNode = myClassFile.compilerNode;
```

# base visitor tsc

### visitor 선언

```ts
const visitor = (node: ts.Node): ts.Node => {
  console.log(node.kind, `\t# ts.SyntaxKind.${ts.SyntaxKind[node.kind]}`);
  return ts.visitEachChild(node, visitor, context);
};
```

### usage

```ts
ts.visitNode(sourceFile, visitor); // root node(sourceFile)을 방문
ts.visitEachChild(node, visitor, context); // node의 children을 방문
ts.isXXX(node); // type narrowing을 위해서 사용
```

```ts
import * as ts from "typescript";

const transformer: ts.TransformerFactory<ts.SourceFile> = (context) => {
  return (sourceFile) => {
    const visitor = (node: ts.Node): ts.Node => {
      if (ts.isIdentifier(node)) {
        // Identifier Node를 만날 때마다 호출된다.
        return undefined;
      }
      return ts.visitEachChild(node, visitor, context);
    };
    return ts.visitNode(sourceFile, visitor);
  };
};

export default transformer;
```

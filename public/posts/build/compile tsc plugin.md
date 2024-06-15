# tsc plugin

## visitor

```ts
const visitor = (node: ts.Node): ts.Node => {
  console.log(node.kind, `\t# ts.SyntaxKind.${ts.SyntaxKind[node.kind]}`);
  return ts.visitEachChild(node, visitor, context);
};
```

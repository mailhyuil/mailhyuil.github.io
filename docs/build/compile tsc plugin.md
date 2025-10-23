# tsc plugin

## main.ts

```ts
function onClick() {
  console.log("hello");
}
onClick();
```

## transformer.ts

```ts
import * as ts from "typescript";
export default function (program: ts.Program, pluginOptions: any) {
  return (ctx: ts.TransformationContext) => {
    return (sourceFile: ts.SourceFile) => {
      function visitor(node: ts.Node): ts.Node {
        if (ts.isBlock(node)) {
          // return 시 이 block을 return된 block으로 대체한다.
          return ts.factory.createBlock([
            ...node.statements, // keep the original statements
            ts.factory.createExpressionStatement(
              ts.factory.createCallExpression(
                ts.factory.createPropertyAccessExpression(ts.factory.createIdentifier("console"), ts.factory.createIdentifier("log")),
                undefined,
                [ts.factory.createStringLiteral("world")]
              )
            ),
          ]);
        }
        return ts.visitEachChild(node, visitor, ctx);
      }
      return ts.visitEachChild(sourceFile, visitor, ctx);
    };
  };
}
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2022",
    "outDir": "./dist",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "plugins": [{ "transform": "./transformers/transformer.ts" }]
  },
  "include": ["src/**/*"]
}
```

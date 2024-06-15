# base visitor

> visitor pattern for AST traversal

## babel

### visitor 선언

```ts
const visitor = {
  // Node Type
  Identifier() {
    // 이 함수는 Identifier Node를 만날 때마다 호출된다.
    console.log("Called!");
  },
};

const visitor = {
  Identifier: {
    enter() {
      // 이 함수는 Identifier Node를 만날 때마다 호출된다.
      console.log("Entered!");
    },
    exit() {
      // 이 함수는 Identifier Node를 빠져나갈 때마다 호출된다.
      console.log("Exited!");
    },
  },
};
```

### usage

```ts
path.traverse(visitor);
```

```ts
import babel, { PluginObj } from "@babel/core";

const CLICK_EVENTS = ["onClick", "onTouchStart", "onChange", "onMouseDown"];
const CLICK_LOG_ATTR = "data-click-log";

function plugin({ types: t }: typeof babel): PluginObj {
  return {
    name: "babel-plugin-tossbank-logger",
    visitor: {
      JSXOpeningElement(path) {
        // JSXOpeningElement Node를 만날 때마다 호출된다.
        const { node } = path;

        const hasOnClickAttribute = node.attributes.some((attr) => {
          return CLICK_EVENTS.includes(attr.name.name);
        });

        if (hasOnClickAttribute) {
          const dataClickLogAttribute = t.jSXAttribute(t.jSXIdentifier(CLICK_LOG_ATTR), null);

          node.attributes.push(dataClickLogAttribute);
        }
      },
    },
  };
}
```

## tsc

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

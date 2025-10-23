# base visitor babel

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

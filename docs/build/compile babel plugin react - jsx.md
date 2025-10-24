# compile babel plugin react - jsx

## usage

```ts
import babel, { PluginObj } from "@babel/core";

const CLICK_EVENTS = ["onClick", "onTouchStart", "onChange", "onMouseDown"];
const CLICK_LOG_ATTR = "data-click-log";

function plugin({ types: t }: typeof babel): PluginObj {
  return {
    name: "babel-plugin-tossbank-logger",
    visitor: {
      JSXOpeningElement(path) {
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

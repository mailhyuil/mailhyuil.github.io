# typescript upcast

```ts
const upcast = <Interface>(implementation: Interface): Interface => {
  return implementation;
};

const createDependency = () => {};

createDependency.internationalize = () => ({
  navigator: upcast<{ language?: string; browserLanguage?: string }>(window.navigator),
});

createDependency.internationalize = () => ({
  navigator: window.navigator satisfies { language?: string; browserLanguage?: string },
});
```

# typescript satisfies upcast

```ts
const upcast = <Interface>(implementation: Interface): Interface => {
  return implementation;
};

const createDependency = () => {};

// as-is
createDependency.internationalize = () => ({
  navigator: upcast<{ language?: string; browserLanguage?: string }>(window.navigator),
});
// to-be
createDependency.internationalize = () => ({
  navigator: window.navigator satisfies { language?: string; browserLanguage?: string },
});
```

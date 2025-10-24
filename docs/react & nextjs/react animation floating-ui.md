# react animation floating-ui

## install

```sh
npm i @floating-ui/react
```

## usage

```tsx
import { useFloating } from "@floating-ui/react";

function App() {
  const { refs, floatingStyles } = useFloating();
  return (
    <>
      <div ref={refs.setReference} />
      <div ref={refs.setFloating} style={floatingStyles} />
    </>
  );
}
```

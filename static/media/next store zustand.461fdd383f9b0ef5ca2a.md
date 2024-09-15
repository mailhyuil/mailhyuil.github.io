# Zustand

## install

```sh
npm install zustand
```

## useStore.ts

```ts
import { create } from "zustand";

const useStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: newBears => set({ bears: newBears }),
}));
```

## components

```tsx
function BearCounter() {
  const bears = useStore(state => state.bears); // 값을 반환
  return <h1>{bears} around here...</h1>;
}

function Controls() {
  const increasePopulation = useStore(state => state.increasePopulation); // 함수 반환
  return <button onClick={increasePopulation}>one up</button>;
}
```

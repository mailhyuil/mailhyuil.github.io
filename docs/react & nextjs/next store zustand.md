# next store zustand

## install

```sh
npm i zustand
```

## useStore.ts

```ts
import { create } from "zustand";

const useStore = create(set => ({
  value: 0,
  increaseValue: () => set(state => ({ value: state.value + 1 })),
  updateValue: newValue => set({ value: newValue }),
  resetValue: () => set({ value: 0 }),
}));
```

## usage

```tsx
export function Page() {
  const value = useStore(state => state.value); // 값 반환
  const increaseValue = useStore(state => state.increaseValue); // 함수 반환
  const updateValue = useStore(state => state.updateValue); // 함수 반환
  const resetValue = useStore(state => state.resetValue); // 함수 반환

  return <h1>{value}</h1>;
}
```

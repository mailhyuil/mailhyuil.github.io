# Pinia

## install

```
yarn add @pinia/nuxt
```

## nuxt.config.ts

```
modules: ['@pinia/nuxt']
```

## store directory

> vuex의 store files관리

```
import { defineStore } from 'pinia';

interface TestStore {
  counter: number;
}
export type TestStoreActions = {
  change: (number: number) => void;
};
const state = (): TestStore => ({
  // 전역으로 관리할 state
  counter: 0,
});

const getters = {
  // getter 메소드
  getCounter(state: any) {
    return state.counter;
  },
};

const mutations = {
  // setter 메소드
  increment(state: any) {
    state.counter++;
  },
};

const actions = {
  // 메소드
  change(number: number): void {
    this.counter = number;
  },
};

export const useTestStore = defineStore<
  'test',
  TestStore,
  {},
  TestStoreActions
>('test', {
  state,
  actions,
  getters,
});
```

```
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2) // 연산된 후의 객체를 반환함
  function increment() { // 함수를 반환 counterStore.increment()라고 해야함
    count.value++
  }

  return { count, name, doubleCount, increment }
})
```

# nodejs module async_hooks

## AsyncLocalStorage

> This class creates stores that stay coherent through asynchronous operations.

```js
const als = new AsyncLocalStorage();
const store = { value: 42 };

als.run(store, () => {
  // 이 안에서 발생하는 모든 비동기 작업은 store를 사용할 수 있음
  als.getStore(); // return store
});
```

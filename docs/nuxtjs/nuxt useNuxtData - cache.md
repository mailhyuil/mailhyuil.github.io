# nuxt useNuxtData - cache

> useAsyncData, useLazyAsyncData, useFetch, useLazyFetch는 데이터를 캐시한다
>
> > useNuxtData는 캐시데이터에 접근 할 수 있는 api

## refreshNuxtData

> 캐시를 초기화

## usage

```ts
// useFetch 사용시 옵션에 key를 지정 캐시
const { data } = await useFetch("/api/posts", { key: "posts" });
// posts라는 키 이름으로 캐시 데이터 받아오기
const { data: posts } = useNuxtData("posts");
```

## useFetch cache option

```ts
const newTodo = ref("");
const previousTodos = ref([]);

// Access to the cached value of useFetch in todos.vue
const { data: todos } = useNuxtData("todos");
const { data } = await useFetch("/api/addTodo", {
  key: "addTodo",
  method: "post",
  body: {
    todo: newTodo.value,
  },
  onRequest() {
    previousTodos.value = todos.value; // Store the previously cached value to restore if fetch fails.
    todos.value.push(newTodo.value); // Optimistically update the todos.
  },
  onRequestError() {
    todos.value = previousTodos.value; // Rollback the data if the request failed.
  },
  async onResponse() {
    await refreshNuxtData("todos"); // Invalidate todos in the background if the request succeeded.
  },
});
```

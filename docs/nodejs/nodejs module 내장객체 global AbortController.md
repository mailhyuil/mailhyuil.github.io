# AbortController

> Promise-based API를 사용한 비동기 작업을 취소할 수 있는 객체
>
> > AbortController의 signal을 api에 넣고 AbortController.abort()를 호출하면 해당 api 요청이 취소된다.
> >
> > > 호출된 api는 AbortError를 반환한다.

```ts
const url = "https://jsonplaceholder.typicode.com/todos/1";

const controller = new AbortController();
const signal = controller.signal;

const fetchTodo = async () => {
  try {
    console.log("Fetching data...");
    const response = await fetch(url, { signal });
    const todo = await response.json();
    console.log("Todo:", todo);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Operation aborted");
    } else {
      console.error("Error:", error);
    }
  }
};

// Set a timeout to abort the fetch after 5 seconds
setTimeout(() => controller.abort(), 5000);

fetchTodo();
```

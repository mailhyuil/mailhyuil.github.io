# webapi SSE EventSource polyfill

> event source에 header를 사용할 수 있게 해줌

```sh
npm i event-source-polyfill
npm i -D @types/event-source-polyfill
```

## usage

```ts
import { EventSourcePolyfill } from "event-source-polyfill";

const eventSource = new EventSourcePolyfill(`${process.env["NX_BASE_URL"]}/sse/${macAddress}`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN_KEY")}`,
  },
});
```

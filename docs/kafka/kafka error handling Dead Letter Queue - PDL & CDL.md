# kafka error handling Dead Letter Queue - PDL & CDL

> 실패한 메세지를 저장하는 queue

## Producer Dead Letter Queue (PDLQ)

```ts
this.client.emit("event", { data: "hello world" }).subscribe({
  error: err => {
    console.error("Error sending message:", err);
    this.client.emit("event.dlq", { data: "hello world" });
  },
});
```

## Consumer Dead Letter Queue (CDLQ)

```ts

```

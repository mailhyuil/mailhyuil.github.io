# LangGraph Stream

> model의 응답을 실시간으로 받아서 처리
>
> > invoke보다 더 빠르게 응답을 받을 수 있다.

```ts
for await (const chunk of await app.stream(
  { messages: [new HumanMessage(message)] },
  { configurable: { thread_id } },
)) {
  console.log(chunk);
}
```

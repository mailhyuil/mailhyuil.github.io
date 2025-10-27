# LangGraph Memory

> Stateful 방식 (in-memory)으로 사용자의 상태를 저장하고 다음 질문이 오면 상태에 따라 다음 노드로 이동시킨다.

```ts
const checkpointer = new MemorySaver();
this.graph = workflow.compile({
  checkpointer,
});

const state = await this.graph.invoke(
  {
    messages: [new HumanMessage(message)],
  },
  { configurable: { thread_id: id } },
);
```

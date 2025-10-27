# LangGraph State Memory

> 스레드(사용자)의 상태를 유지하기 위해서 사용
>
> > Stateful 방식 (in-memory)으로 사용자의 상태를 저장하고 다음 질문이 오면 상태에 따라 다음 노드로 이동시킨다.
> >
> > > workflow 안에서 노드간에 `Annotation.State`안의 상태를 유지할 수 있다.

```ts
import { MemorySaver } from "@langchain/langgraph";

const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
});

const checkpointer = new MemorySaver();
const thread_id = `test-${Date.now() + "-" + Math.random()}`;

const callModel = async (state: typeof MessagesAnnotation.State) => {
  const response = await model.invoke(state.messages);
  return { messages: [response] };
};

this.graph = workflow.compile({
  checkpointer,
});

await this.graph.invoke(
  {
    messages: [new HumanMessage("My name is Sangbaek")],
  },
  { configurable: { thread_id } },
);
const result = await this.graph.invoke(
  {
    messages: [new HumanMessage("What is my name?")],
  },
  { configurable: { thread_id } },
);
console.log(result.messages[result.messages.length - 1].content);
// your name is Sangbaek
```

# langchain LangGraph

> LangChain을 기반으로 한 AI 워크플로우 오케스트레이션 도구입니다.
>
> > 즉, 멀티-에이전트 시스템이나 복잡한 AI 파이프라인을 구축할 때 사용됩니다.
> >
> > > LangChain은 일렬로 로직을 실행(체이닝)하는 방식이지만
> > >
> > > LangGraph는 그래프구조/상태관리/병렬실행/조건실행 등의 특징으로 더 복잡한 시스템을 구축할 수 있다.

## install

```sh
npm i @langchain/core @langchain/langgraph @langchain/openai
```

## usage

```ts
import { START, END, MessagesAnnotation, StateGraph, MemorySaver } from "@langchain/langgraph";

// Define the function that calls the model
const callModel = async (state: typeof MessagesAnnotation.State) => {
  const response = await llm.invoke(state.messages);
  // Update message history with response:
  return { messages: response };
};

// Define a new graph
const workflow = new StateGraph(MessagesAnnotation)
  // Define the (single) node in the graph
  .addNode("model", callModel)
  .addEdge(START, "model")
  .addEdge("model", END);

// Add memory
const memory = new MemorySaver();
const app = workflow.compile({ checkpointer: memory });
```

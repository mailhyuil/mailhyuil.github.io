# LangGraph graph Routing

## addConditionalEdges

> router함수를 사용하여 라우팅할 수 있다

```ts
function router(state: typeof MessagesAnnotation.State) {
  if (state.condition) {
    return "nodeA";
  } else {
    return "nodeB";
  }
  return "__end__";
}

const workflow = new StateGraph(MessagesAnnotation)
  .addEdge("__start__", "agent")
  .addNode("nodeA", nodeA)
  .addNode("nodeB", nodeB)
  .addConditionalEdges("agent", router);
```

## Command goto

> Node 내에서 Command의 goto를 사용하여 라우팅할 수 있다
>
> > 단, 노드의 ends 속성을 사용하여 라우팅할 수 있는 노드를 지정해야 한다

```ts
function nodeA(state: typeof MessagesAnnotation.State) {
  if (state.error) return new Command({ goto: "__end__" });
  return new Command({ goto: "agent", update: { messages: [...state.messages, new AIMessage("some message")] } });
}

const workflow = new StateGraph(MessagesAnnotation)
  .addEdge("__start__", "agent", { ends: ["nodeA", "nodeB", "__end__"] })
  .addNode("nodeA", nodeA, { ends: ["agent", "__end__"] })
  .addNode("nodeB", nodeB, { ends: ["agent", "__end__"] })
  .addConditionalEdges("agent", shouldContinue);
```

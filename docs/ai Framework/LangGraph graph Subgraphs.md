# LangGraph graph Subgraphs

> 두개의 graph를 생성하여 main graph내에서 사용

## usage

```ts
import { StateGraph, START } from "@langchain/langgraph";
import * as z from "zod";

const SubgraphState = z.object({
  bar: z.string(),
});

// Subgraph
const subgraphBuilder = new StateGraph(SubgraphState)
  .addNode("subgraphNode1", state => {
    return { bar: "hi! " + state.bar };
  })
  .addEdge(START, "subgraphNode1");

const subgraph = subgraphBuilder.compile();

// Parent graph
const State = z.object({
  foo: z.string(),
});

// Transform the state to the subgraph state and back
const builder = new StateGraph(State)
  .addNode("node1", async state => {
    const subgraphOutput = await subgraph.invoke({ bar: state.foo });
    return { foo: subgraphOutput.bar };
  })
  .addEdge(START, "node1");

const graph = builder.compile();
```

## stream subgraphs

```ts
for await (const chunk of await graph.stream(
  { foo: "foo" },
  {
    subgraphs: true,
    streamMode: "updates",
  },
)) {
  console.log(chunk);
}
```

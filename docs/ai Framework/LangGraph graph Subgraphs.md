# LangGraph graph Subgraphs

> multi-agent systems을 구축하는데 있어, 복잡한 작업을 더 작은 단위로 나누고, 각 단위를 독립적인 그래프로 관리할 수 있게 해주는 기능
>
> > Re-using a set of nodes in multiple graphs
> >
> > > graph를 node 내에서 호출하는 방법과 subgraph를 node로 정의하는 방법 두가지가 있다.

## invoke subgraph in node

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

## subgraph as node

```ts
import { StateGraph, START } from "@langchain/langgraph";
import * as z from "zod";

const State = z.object({
  foo: z.string(),
});

// Subgraph
const subgraphBuilder = new StateGraph(State)
  .addNode("subgraphNode1", state => {
    return { foo: "hi! " + state.foo };
  })
  .addEdge(START, "subgraphNode1");

const subgraph = subgraphBuilder.compile();

// Parent graph
const builder = new StateGraph(State).addNode("node1", subgraph).addEdge(START, "node1");

const graph = builder.compile();
```

## stream subgraphs

```ts
for await (const chunk of await graph.stream(
  { foo: "foo" },
  {
    subgraphs: true, // Enable streaming for subgraphs
    streamMode: "updates",
  },
)) {
  console.log(chunk);
}
```

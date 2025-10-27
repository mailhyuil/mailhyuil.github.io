# LangGraph terminology

## StateGraph (builder)

> workflow를 build하는 클래스

```ts
// Define a new graph
const workflow = new StateGraph(MessagesAnnotation)
  /*#### 3. Create a Node ####*/
  .addNode("agent", callModel)
  .addNode("tools", toolNode)
  /*#### 4. Create Edges ####*/
  .addEdge("__start__", "agent") // __start__ is a special name for the entrypoint
  .addEdge("tools", "agent")
  .addConditionalEdges("agent", shouldContinue);
```

## Annotation / State (Runtime State)

> Annotation이란 State를 정의하는 객체
>
> > State의 스키마 + 병합 규칙(reducer) + 기본값(default)까지 포함한 “State 정의자”

## Node

> 노드는 상태를 변경하는 함수

## Edge

> 엣지는 노드 간의 연결을 나타내며, 노드 간의 이동을 제어
>
> > 'agent', 'tools', '\_\_start\_\_', '\_\_end\_\_' 등의 값을 사용해서 특정 노드로 이동
> >
> > > `import {START, END} from "@langchain/langgraph";`

## interrupt

> Human-in-the-loop의 흐름을 제어하는 기능

```ts
// Define a node that uses multiple interrupts
const nodeWithInterrupts = () => {
  // First interrupt - will pause execution and include {value: 1} in task values
  const answer1 = interrupt({ value: 1 });

  // Second interrupt - only called after first interrupt is resumed
  const answer2 = interrupt({ value: 2 });

  // Use the resume values
  return { myKey: answer1 + " " + answer2 };
};

// Resume the graph after first interrupt
await graph.stream(new Command({ resume: "answer 1" }));
// Resume the graph after second interrupt
await graph.stream(new Command({ resume: "answer 2" }));
// Final result: { myKey: "answer 1 answer 2" }
```

## Compile

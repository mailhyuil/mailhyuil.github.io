# LangGraph base

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

## Annotation

> State의 스키마 + 병합 규칙(reducer) + 기본값(default)까지 포함한 “State 정의자”
>
> > MessagesAnnotation: 메시지 상태를 정의하는 어노테이션

## State (Runtime State)

> Annotation을 사용하여 정의된 상태를 저장하는 객체

## Node

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

## Edge

## Compile

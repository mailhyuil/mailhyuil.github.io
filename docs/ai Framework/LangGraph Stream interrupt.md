# LangGraph Stream interrupt

> Human-in-the-loop의 흐름을 제어하는 기능
>
> > stream을 사용할 때 interrupt를 사용하여 흐름을 제어할 수 있다.

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

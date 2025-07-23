# RunnableBranch

> 조건에 따라 다른 Runnable 실행

```ts
import { RunnableBranch, RunnableSequence } from "@langchain/core/runnables";

const branch = RunnableBranch.from([
  [(x: { topic: string; question: string }) => x.topic.toLowerCase().includes("a"), chainA],
  [(x: { topic: string; question: string }) => x.topic.toLowerCase().includes("b"), chainB],
  generalChain,
]);

const fullChain = RunnableSequence.from([
  {
    topic: classificationChain,
    question: (input: { question: string }) => input.question,
  },
  branch,
]);

const resultA = await fullChain.invoke({
  question: "a",
});

console.log(resultA);

const resultB = await fullChain.invoke({
  question: "b",
});

console.log(resultB);
```

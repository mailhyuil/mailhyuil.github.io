# RunnableSequence

> 여러 Runnable을 순차 실행

```ts
import { RunnableLambda, RunnableSequence } from "@langchain/core/runnables";

const runnable1 = RunnableLambda.from((x: any) => {
  return { foo: x };
});

const runnable2 = RunnableLambda.from((x: any) => [x].concat([x]));

// 순차 실행
const chain = RunnableSequence.from([runnable1, runnable2]);

await chain.invoke(2);
```

# langchain LCEL RunnableParallel - RunnableMap

> 여러 Runnable을 병렬 실행
>
> > Promise.all, forkJoin과 비슷

```ts
import { RunnableLambda, RunnableParallel } from "@langchain/core/runnables";

const runnable1 = RunnableLambda.from((x: any) => {
  return { foo: x };
});

const runnable2 = RunnableLambda.from((x: any) => [x].concat([x]));

// 병렬 실행
const chain = RunnableParallel.from({
  first: runnable1,
  second: runnable2,
});

await chain.invoke(2);
```

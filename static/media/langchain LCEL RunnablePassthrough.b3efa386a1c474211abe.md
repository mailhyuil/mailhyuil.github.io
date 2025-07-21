# RunnablePassthrough

```ts
import { RunnableLambda, RunnablePassthrough } from "@langchain/core/runnables";

const runnable = RunnableLambda.from((x: { foo: number }) => {
  return x.foo + 7;
});

const chain = RunnablePassthrough.assign({
  bar: runnable,
});

await chain.invoke({ foo: 10 });
```

# RunnableLambda

> 함수 래핑하여 LCEL에서 실행 가능하게 해주는 컴포넌트
>
> > RunnableLambda.from(function);

```ts
import { RunnableLambda } from "@langchain/core/runnables";

const runnable = RunnableLambda.from((x: number) => x.toString());

await runnable.invoke(5);
```

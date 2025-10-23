# langchain Runnable Interface

> LCEL에서 데이터 변환을 위한 커스텀 체인을 쉽게 만들기 위해 제공되는 함수
>
> 필요한 체인을 미리 만들어 놓고 입력만 넣어주는 방식으로 코드 유지보수성과 성능을 향상시킬 수 있다.
>
> > invoke: 입력을 받아 체인을 호출
> >
> > stream: 응답 청크를 스트림으로 출력
> >
> > batch: 여러 입력을 받아 체인을 호출 (입력의 갯수만큼 답변을 반환)

```ts
import { RunnableLambda } from "@langchain/core/runnables";

const runnable = RunnableLambda.from((x: number) => x.toString());

// invoke
await runnable.invoke(5);

// batch
await runnable.batch([1, 2, 3]);

// stream
const runnable = RunnableLambda.from(generatorFn);

const stream = await runnable.stream([0, 1, 2, 3, 4]);

for await (const chunk of stream) {
  console.log(chunk);
  console.log("---");
}

// async iterator 사용
async function* generatorFn(x: number[]) {
  for (const i of x) {
    yield i.toString();
  }
}
```

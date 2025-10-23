# langchain Tools

> 도구(Tools)는 모델이 호출하도록 설계된 유틸리티

## 도구 카테고리

```
검색 도구
코드 인터프리터
생산성 도구
웹 브라우징 도구
데이터베이스 도구
...
```

## custom tool

```ts
// 방법 1 - tool 함수 사용하여 직접 구현 (함수를 직접 구현할 경우)
import { tool } from "@langchain/core/tools";

const multiply = tool(
  ({ a, b }: { a: number; b: number }): number => {
    /**
     * Multiply a and b.
     */
    return a * b;
  },
  {
    name: "multiply",
    description: "Multiply two numbers",
    // input schema
    schema: z.object({
      a: z.number(),
      b: z.number(),
    }),
  },
);
// 방법 2 - 인풋 스키마만 정의 (함수를 구현하지 않는 경우)
const multiplyTool = {
  name: "multiply",
  description: "Multiply two numbers",
  // input schema
  schema: z.object({
    a: z.number(),
    b: z.number(),
  }),
};
```

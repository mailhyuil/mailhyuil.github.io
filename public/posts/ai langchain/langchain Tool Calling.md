# langchain Tool Calling

> 챗 모델 API에서 Tools의 스키마를 입력과 함께 받아들이고, 모델의 출력 메시지에 해당 도구의 호출 결과를 포함하는 방식

```ts
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
    schema: z.object({
      a: z.number(),
      b: z.number(),
    }),
  },
);

// Tool binding
const modelWithTools = model.bindTools([multiply]);
// Tool calling
const response = await modelWithTools.invoke(userInput);
```

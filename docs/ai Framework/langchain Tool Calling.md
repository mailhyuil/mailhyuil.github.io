# langchain Tool Calling

> 챗 모델 API에서 Tools의 스키마를 입력과 함께 받아들이고, 모델의 출력 메시지에 해당 도구의 호출 결과를 포함하는 방식
>
> > tool calling이 발동했을 경우 response.tool_calls 에 호출된 tool이 포함되어 있음
> >
> > > withStructuredOutput을 사용하면 안된다.

```ts
import { tool } from "@langchain/core/tools";

const multiply = tool(
  ({ a, b }: { a: number; b: number }): number => {
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

// Tool Calling 학습
const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are an AI assistant that can perform mathematical operations using tools. Use the 'multiply' tool when a user asks for multiplication.",
  ],
]);

// Tool binding
const llmWithTools = this.llm.bindTools([multiply]);

// Tool Calling
const res = await prompt.pipe(llmWithTools).invoke({ message });

console.log(res);
/**
AIMessage {
  "id": "chatcmpl-B1xYTkKuYl1CtPBe55aKE4D1PGFvM",
  "content": "",
  "additional_kwargs": {
    "tool_calls": [
      {
        "id": "call_XWqwYZVqFDRP92DXWZODTeOu",
        "type": "function",
        "function": "[Object]"
      }
    ]
  },
  "response_metadata": {
    "tokenUsage": {
      "promptTokens": 52,
      "completionTokens": 18,
      "totalTokens": 70
    },
    "finish_reason": "tool_calls",
    "model_name": "gpt-4o-mini-2024-07-18",
    "usage": {
      "prompt_tokens": 52,
      "completion_tokens": 18,
      "total_tokens": 70,
      "prompt_tokens_details": {
        "cached_tokens": 0,
        "audio_tokens": 0
      },
      "completion_tokens_details": {
        "reasoning_tokens": 0,
        "audio_tokens": 0,
        "accepted_prediction_tokens": 0,
        "rejected_prediction_tokens": 0
      }
    },
    "system_fingerprint": "fp_00428b782a"
  },
  "tool_calls": [
    {
      "name": "multiply",
      "args": {
        "a": 1,
        "b": 2
      },
      "type": "tool_call",
      "id": "call_XWqwYZVqFDRP92DXWZODTeOu"
    }
  ],
  "invalid_tool_calls": [],
  "usage_metadata": {
    "output_tokens": 18,
    "input_tokens": 52,
    "total_tokens": 70,
    "input_token_details": {
      "audio": 0,
      "cache_read": 0
    },
    "output_token_details": {
      "audio": 0,
      "reasoning": 0
    }
  }
}
*/
```

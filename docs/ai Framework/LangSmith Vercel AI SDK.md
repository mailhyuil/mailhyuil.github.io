# LangSmith

> ai sdk를 langsmith로 wrapping하여 사용

## install

```sh
npm i ai
npm i @ai-sdk/openai
npm i zod
npm i langsmith
```

## .env

```sh
LANGSMITH_TRACING=true
LANGSMITH_ENDPOINT=https://api.smith.langchain.com
LANGSMITH_API_KEY=
LANGSMITH_PROJECT= # Optional (없으면 default 프로젝트 사용)
LANGSMITH_WORKSPACE_ID= # Optional (org-scoped를 사용 시 필요)

OPENAI_API_KEY=your-openai-api-key
```

## usage

```ts
import { openai } from "@ai-sdk/openai";
import * as ai from "ai";
import { stepCountIs, tool } from "ai";
import { wrapAISDK } from "langsmith/experimental/vercel";
import { z } from "zod";

// ai sdk를 langsmith로 wrapping하여 사용
const { generateText } = wrapAISDK(ai);

await generateText({
  model: openai("gpt-5-mini"),
  system: "You are a helpful assistant.",
  messages: [{ role: "user", content: "What is the weather in San Francisco?" }],
  tools: {
    getWeather: tool({
      description: "Get weather for a given city.",
      inputSchema: z.object({
        city: z.string().describe("The city to get the weather for"),
      }),
      execute: async ({ city }) => `It's always sunny in ${city}!`,
    }),
  },
  stopWhen: stepCountIs(5),
});
```

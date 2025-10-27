# OpenAI Agents SDK 다른 모델 사용하기

> Claude는 아직 호환되지 않는다.

## usage

```ts
import { Agent, OpenAIChatCompletionsModel, run, withTrace } from "@openai/agents";
import dotenv from "dotenv";
import OpenAI from "openai";
import { push } from "../pushover/helpers/push";
dotenv.config();

const geminiClient = new OpenAI({
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
  apiKey: process.env.GEMINI_API_KEY,
});

const geminiModel = new OpenAIChatCompletionsModel(geminiClient, "gemini-2.5-flash");

const geminiAgent = new Agent({
  name: "Professional Agent",
  instructions: `greet the user`,
  model: geminiModel,
});

async function main() {
  const message = "안녕하세요 유휴일입니다.";
  await withTrace("greeting_workflow", async () => {
    const result = await run(geminiAgent, message);
    if (!result.finalOutput) {
      throw new Error("No output from Gemini agent");
    }
    push(result.finalOutput);
  });
}
main();
```

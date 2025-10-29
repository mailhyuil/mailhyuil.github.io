# LangGraph createAgent

> createReactAgent의 새로운 버전
>
> > createReactAgent는 deprecated되었다.

```ts
import { createAgent } from "langchain";

const agent = createAgent({
  model: "anthropic:claude-sonnet-4-5",
  tools: [getWeather],
  systemPrompt: "You are a helpful assistant.",
});

const result = await agent.invoke({
  messages: [{ role: "user", content: "What is the weather in Tokyo?" }],
});

console.log(result.content);
```

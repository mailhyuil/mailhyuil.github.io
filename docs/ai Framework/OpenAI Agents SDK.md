# OpenAI Agents SDK

## install

```sh
npm i @openai/agents
```

## Terminology

### Agent

> LLMs

### Handoff

> interactions

### Guardrail

> controls

## Steps

1. Create an instance of Agent
2. Use with trace() to track the agent
3. Call runner.run() to run the agent

## usage

```ts
import { Agent, run, withTrace } from "@openai/agents";

const agent = new Agent({
  name: "Joke generator",
  instructions: "Tell funny jokes.",
  model: "gpt-4o-mini",
});

await withTrace("Joke workflow", async () => {
  // withTrace 사용 시 openai콘솔의 Trace탭에서 확인할 수 있다.
  const result = await run(agent, "Tell me a joke");
  const secondResult = await run(agent, `Rate this joke: ${result.finalOutput}`);
  console.log(`Joke: ${result.finalOutput}`);
  console.log(`Rating: ${secondResult.finalOutput}`);
});
```

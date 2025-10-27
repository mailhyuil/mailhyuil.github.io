# OpenAI Agents SDK

## install

```sh
npm i @openai/agents
```

## Terminology

### Agent

> LLMs
>
> > 작업을 수행하는 주체

### Handoff

> interactions
>
> > 현재 태스크가 자신이 수행하기에 적합하지 않다면 다른 에이전트에게 넘겨주는 것

### Guardrail

> controls

## Steps

1. Create an instance of Agent
2. Use with trace() to track the agent
3. Call runner.run() to run the agent

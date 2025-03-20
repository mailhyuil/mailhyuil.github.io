# langchain Tool Agents

> llm은 스스로 action을 수행할 수 없다.
>
> > 에이전트란 사용자의 상태에 따라서 스스로 추론(Reasoning)하고 결정하여 그에 맞는 액션(Acting, Tool Calling)을 취해서 결과를 관찰하고(Observation) 다시 추론
> >
> > > 현재는 langgraph를 사용하는게 좋다.

## Legacy Agent

```ts
import { AgentExecutor } from "@langchain/langgraph";

const agent = new AgentExecutor({
  llm: agentModel,
  tools: agentTools,
  checkpointSaver: agentCheckpointer,
});

const agentFinalState = await agent.invoke(
  { messages: [new HumanMessage("what is the current weather in sf")] },
  { configurable: { thread_id: "42" } },
);

console.log(agentFinalState.messages[agentFinalState.messages.length - 1].content);
```

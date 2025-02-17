# langchain Tool Agents

> llm은 스스로 action을 수행할 수 없다.
>
> > Agent는 reasoning engine으로, 어떤 action을 수행할지 결정하고, 그 action을 수행한다.
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

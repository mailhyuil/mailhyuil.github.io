# OpenAI Agents SDK Handoff

> 현재 태스크가 자신이 수행하기에 적합하지 않다면 다른 에이전트에게 넘겨주는 것

## usage

```ts
import { Agent, handoff } from "@openai/agents";

const billingAgent = new Agent({ name: "Billing agent" });
const refundAgent = new Agent({ name: "Refund agent" });

// Use Agent.create method to ensure the finalOutput type considers handoffs
const triageAgent = Agent.create({
  name: "Triage agent",
  handoffs: [
    // agent 그대로 사용 가능
    billingAgent,
    // handoff로 감싸서 커스텀 가능
    handoff(refundAgent, {
      onHandoff: (ctx: RunContext, input) => {
        console.log(input);
      },
      inputType: FooSchema,
      toolNameOverride: "custom_handoff_tool",
      toolDescriptionOverride: "Custom description",
    }),
  ],
  handoffDescription: "Handoff to billing or refund agent",
});
```

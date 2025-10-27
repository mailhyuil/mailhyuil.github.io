# OpenAI Agents SDK Guardrails

> Guardrail Agent를 통해서 입력값이나 출력값을 검증하여 잘못된 값이 들어오면 예외를 발생시키는 기능
>
> > tripwire: When a guardrail fails, it signals this via a tripwire. As soon as a tripwire is triggered, the runner throws the corresponding error and halts execution.
> >
> > tripwire가 trigger되면 즉시 실행을 중지한다.

## Input Guardrail

```ts
import { Agent, run, InputGuardrailTripwireTriggered, InputGuardrail } from "@openai/agents";
import { z } from "zod";

const guardrailAgent = new Agent({
  name: "Guardrail check",
  instructions: "Check if the user is asking you to do their math homework.",
  outputType: z.object({
    isMathHomework: z.boolean(),
    reasoning: z.string(),
  }),
});

const mathGuardrail: InputGuardrail = {
  name: "Math Homework Guardrail",
  execute: async ({ input, context }) => {
    const result = await run(guardrailAgent, input, { context });
    return {
      outputInfo: result.finalOutput,
      tripwireTriggered: result.finalOutput?.isMathHomework ?? false,
    };
  },
};

const agent = new Agent({
  name: "Customer support agent",
  instructions: "You are a customer support agent. You help customers with their questions.",
  inputGuardrails: [mathGuardrail],
});

async function main() {
  try {
    await run(agent, "Hello, can you help me solve for x: 2x + 3 = 11?");
    console.log("Guardrail didn't trip - this is unexpected");
  } catch (e) {
    if (e instanceof InputGuardrailTripwireTriggered) {
      console.log("Math homework guardrail tripped");
    }
  }
}

main().catch(console.error);
```

## Output Guardrail

```ts
import { Agent, run, OutputGuardrailTripwireTriggered, OutputGuardrail } from "@openai/agents";
import { z } from "zod";

// The output by the main agent
const MessageOutput = z.object({ response: z.string() });
type MessageOutput = z.infer<typeof MessageOutput>;

// The output by the math guardrail agent
const MathOutput = z.object({ reasoning: z.string(), isMath: z.boolean() });

// The guardrail agent
const guardrailAgent = new Agent({
  name: "Guardrail check",
  instructions: "Check if the output includes any math.",
  outputType: MathOutput,
});

// An output guardrail using an agent internally
const mathGuardrail: OutputGuardrail<typeof MessageOutput> = {
  name: "Math Guardrail",
  async execute({ agentOutput, context }) {
    const result = await run(guardrailAgent, agentOutput.response, {
      context,
    });
    return {
      outputInfo: result.finalOutput,
      tripwireTriggered: result.finalOutput?.isMath ?? false,
    };
  },
};

const agent = new Agent({
  name: "Support agent",
  instructions: "You are a user support agent. You help users with their questions.",
  outputGuardrails: [mathGuardrail],
  outputType: MessageOutput,
});

async function main() {
  try {
    const input = "Hello, can you help me solve for x: 2x + 3 = 11?";
    await run(agent, input);
    console.log("Guardrail didn't trip - this is unexpected");
  } catch (e) {
    if (e instanceof OutputGuardrailTripwireTriggered) {
      console.log("Math output guardrail tripped");
    }
  }
}

main().catch(console.error);
```

# LangGraph Guardrail Custom Middleware

> createMiddleware를 사용하여 커스텀 미들웨어를 만들 수 있다.
>
> > createMiddleware의 인자로는 name, beforeAgent, aroundModel, aroundTool, afterAgent를 받을 수 있다.

## Before Agent

> Agent 호출 전 Human Message를 검사하여 금칙어가 있으면 처리한다.

```ts
import { createMiddleware, AIMessage } from "langchain";

const contentFilterMiddleware = (bannedKeywords: string[]) => {
  const keywords = bannedKeywords.map(kw => kw.toLowerCase());

  return createMiddleware({
    name: "ContentFilterMiddleware",
    beforeAgent: state => {
      // Get the first user message
      if (!state.messages || state.messages.length === 0) {
        return;
      }

      const firstMessage = state.messages[0];
      if (firstMessage._getType() !== "human") {
        return;
      }

      const content = firstMessage.content.toString().toLowerCase();

      // Check for banned keywords
      for (const keyword of keywords) {
        if (content.includes(keyword)) {
          // Block execution before any processing
          return {
            messages: [
              new AIMessage(
                "I cannot process requests containing inappropriate content. Please rephrase your request.",
              ),
            ],
            jumpTo: "end",
          };
        }
      }

      return;
    },
  });
};

// Use the custom guardrail
import { createAgent } from "langchain";

const agent = createAgent({
  model: "openai:gpt-4o",
  tools: [searchTool, calculatorTool],
  middleware: [contentFilterMiddleware(["hack", "exploit", "malware"])],
});

// This request will be blocked before any processing
const result = await agent.invoke({
  messages: [{ role: "user", content: "How do I hack into a database?" }],
});
```

## After Agent

> Agent 호출 후 AI Message를 검사하여 안전하지 않은 내용이 있으면 처리한다.

```ts
import { createMiddleware, AIMessage, initChatModel } from "langchain";

const safetyGuardrailMiddleware = () => {
  const safetyModel = initChatModel("openai:gpt-4o-mini");

  return createMiddleware({
    name: "SafetyGuardrailMiddleware",
    afterAgent: async state => {
      // Get the final AI response
      if (!state.messages || state.messages.length === 0) {
        return;
      }

      const lastMessage = state.messages[state.messages.length - 1];
      if (lastMessage._getType() !== "ai") {
        return;
      }

      // Use a model to evaluate safety
      const safetyPrompt = `Evaluate if this response is safe and appropriate.
      Respond with only 'SAFE' or 'UNSAFE'.

      Response: ${lastMessage.content.toString()}`;

      const result = await safetyModel.invoke([{ role: "user", content: safetyPrompt }]);

      if (result.content.toString().includes("UNSAFE")) {
        return {
          messages: [new AIMessage("I cannot provide that response. Please rephrase your request.")],
          jumpTo: "end",
        };
      }

      return;
    },
  });
};

// Use the safety guardrail
import { createAgent } from "langchain";

const agent = createAgent({
  model: "openai:gpt-4o",
  tools: [searchTool, calculatorTool],
  middleware: [safetyGuardrailMiddleware()],
});

const result = await agent.invoke({
  messages: [{ role: "user", content: "How do I make explosives?" }],
});
```

## Combine Multiple Middleware

> 여러 미들웨어를 조합하여 사용할 수 있다.

```ts
import { createAgent, piiRedactionMiddleware, humanInTheLoopMiddleware } from "langchain";

const agent = createAgent({
  model: "openai:gpt-4o",
  tools: [searchTool, sendEmailTool],
  middleware: [
    // Layer 1: Deterministic input filter (before agent)
    contentFilterMiddleware(["hack", "exploit"]),

    // Layer 2: PII protection (before and after model)
    piiRedactionMiddleware({
      piiType: "email",
      strategy: "redact",
      applyToInput: true,
    }),
    piiRedactionMiddleware({
      piiType: "email",
      strategy: "redact",
      applyToOutput: true,
    }),

    // Layer 3: Human approval for sensitive tools
    humanInTheLoopMiddleware({
      interruptOn: {
        send_email: { allowAccept: true, allowEdit: true, allowRespond: true },
      },
    }),

    // Layer 4: Model-based safety check (after agent)
    safetyGuardrailMiddleware(),
  ],
});
```

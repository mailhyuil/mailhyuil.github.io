# LangGraph Guardrail

> 에이전트가 실행되기 전/중/후에 끼어들어(content 검사·정책 적용·휴먼승인 등) 안전·컴플라이언스를 보장하는 장치

## hooks

1. **beforeAgent**: 호출 초입에서 1회 체크(예: 인증, 레이트리밋, 금칙어 차단).
2. **aroundModel / aroundTool**: 모델·툴 호출 전후에서 요청/응답 감시·변환(프롬프트 인젝션 방어, 파라미터 밸리데이션).
3. **afterAgent**: 최종 응답 직전에 1회 검수(품질·안전 최종 스캔, 정책 위반 시 대체 응답).

## PII detection (piiRedactionMiddleware)

```ts
import { createAgent, piiRedactionMiddleware } from "langchain";

const agent = createAgent({
  model: "openai:gpt-4o",
  tools: [customerServiceTool, emailTool],
  middleware: [
    // Redact emails in user input before sending to model
    piiRedactionMiddleware({
      piiType: "email",
      strategy: "redact",
      applyToInput: true,
    }),
    // Mask credit cards in user input
    piiRedactionMiddleware({
      piiType: "credit_card",
      strategy: "mask",
      applyToInput: true,
    }),
    // Block API keys - raise error if detected
    piiRedactionMiddleware({
      piiType: "api_key",
      detector: /sk-[a-zA-Z0-9]{32}/,
      strategy: "block",
      applyToInput: true,
    }),
  ],
});

// When user provides PII, it will be handled according to the strategy
const result = await agent.invoke({
  messages: [
    {
      role: "user",
      content: "My email is john.doe@example.com and card is 4532-1234-5678-9010",
    },
  ],
});
```

## Human-in-the-loop(휴먼 승인) (humanInTheLoopMiddleware)

```ts
import { createAgent, humanInTheLoopMiddleware } from "langchain";
import { MemorySaver, Command } from "@langchain/langgraph";

const agent = createAgent({
  model: "openai:gpt-4o",
  tools: [searchTool, sendEmailTool, deleteDatabaseTool],
  middleware: [
    humanInTheLoopMiddleware({
      interruptOn: {
        // Require approval for sensitive operations
        send_email: { allowAccept: true, allowEdit: true, allowRespond: true },
        delete_database: { allowAccept: true, allowEdit: true, allowRespond: true },
        // Auto-approve safe operations
        search: false,
      },
    }),
  ],
  checkpointer: new MemorySaver(),
});

// Human-in-the-loop requires a thread ID for persistence
const config = { configurable: { thread_id: "some_id" } };

// Agent will pause and wait for approval before executing sensitive tools
let result = await agent.invoke({ messages: [{ role: "user", content: "Send an email to the team" }] }, config);

result = await agent.invoke(
  new Command({ resume: { decisions: [{ type: "approve" }] } }),
  config, // Same thread ID to resume the paused conversation
);
```

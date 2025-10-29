# LangGraph StructuredOutput

## usage

```ts
import * as z from "zod";
import { createAgent, providerStrategy } from "langchain";

const ContactInfo = z.object({
  name: z.string().describe("The name of the person"),
  email: z.string().describe("The email address of the person"),
  phone: z.string().describe("The phone number of the person"),
});

const agent = createAgent({
  model: "openai:gpt-5",
  tools: tools,
  responseFormat: providerStrategy(ContactInfo),
});

const result = await agent.invoke({
  messages: [{ role: "user", content: "Extract contact info from: John Doe, john@example.com, (555) 123-4567" }],
});

result.structuredResponse;
// { name: "John Doe", email: "john@example.com", phone: "(555) 123-4567" }
```

## providerStrategy

> LangChain automatically uses ProviderStrategy when you pass a schema type directly to createAgent.responseFormat
>
> 자동으로 providerStrategy를 사용
>
> > 지원 모델: openai..

## toolStrategy

> native structured output을 지원하지 않는 모델에서 사용 가능
>
> > LangChain uses tool calling to achieve the same result.

# LangGraph State zod schema

## schema definition

```ts
import { BaseMessage } from "@langchain/core/messages";
import { MessagesZodMeta } from "@langchain/langgraph";
import { registry } from "@langchain/langgraph/zod";
import * as z from "zod";

const customStateSchema = z.object({
  messages: z.array(z.custom<BaseMessage>()).register(registry, MessagesZodMeta),
  extraField: z.number(),
});
const contextSchema = z.object({
  userId: z.string(),
});

//
const graph = new StateGraph(customStateSchema, contextSchema).compile();

// node
const node = (state: z.infer<typeof customStateSchema>) => {
  const messages = state.messages;
  const newMessage = new AIMessage("Hello!");
  return { messages: messages.concat([newMessage]), extraField: 10 };
};
```

## reducer

> `import "@langchain/langgraph/zod";`를 사용하여 `.langgraph` 프로퍼티를 몽키패치 후 reducer 함수를 정의할 수 있다.

```ts
import "@langchain/langgraph/zod";

const customStateSchema = z.object({
  messages: z.array(z.custom<BaseMessage>()).langgraph.reducer((x, y) => x.concat(y)),
  extraField: z.number().langgraph.reducer((x, y) => x + y),
});
```

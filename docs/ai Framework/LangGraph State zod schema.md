# LangGraph State zod schema

## schema definition

```ts
import { BaseMessage } from "@langchain/core/messages";
import { MessagesZodMeta } from "@langchain/langgraph";
import { registry } from "@langchain/langgraph/zod";
import z from "zod";

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

```ts
import * as z from "zod";
import { registry } from "@langchain/langgraph/zod";

const State = z.object({
  foo: z.number(),
  bar: z.array(z.string()).register(registry, {
    reducer: {
      fn: (x, y) => x.concat(y),
    },
    default: () => [] as string[],
  }),
});
```

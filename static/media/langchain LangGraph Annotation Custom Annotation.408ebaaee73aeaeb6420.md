# langgraph Annotation Custom Annotation

```ts
import { BaseMessage } from "@langchain/core/messages";
import { Annotation, messagesStateReducer } from "@langchain/langgraph";

const StateAnnotation = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: messagesStateReducer,
    default: () => [],
  }),
  id: Annotation<string>({
    reducer: (state, value) => value,
    default: () => "",
  }),
});
```

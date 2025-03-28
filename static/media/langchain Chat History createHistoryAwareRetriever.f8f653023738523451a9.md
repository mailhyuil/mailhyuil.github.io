# langchain Chat History createHistoryAwareRetriever

> history를 활용하여 대화를 생성하는 Retriever Chain을 생성하는 방법
>
> > 직접 history를 조회하지 않고 내부적으로 수행해준다.

```ts
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";

const contextualizeQPrompt = ChatPromptTemplate.fromMessages([
  ["system", contextualizeQSystemPrompt],
  new MessagesPlaceholder("chat_history"),
  ["human", "{input}"],
]);

const historyAwareRetriever = await createHistoryAwareRetriever({
  llm,
  retriever,
  rephrasePrompt: contextualizeQPrompt,
});
```

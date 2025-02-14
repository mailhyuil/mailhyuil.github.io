# langchain ChatHistory

> chat history를 사용할 수록 API 사용 토큰 수가 늘어나기에 최적화를 해야한다.
>
> > 대화 이력 제한: 이전 메시지 중 중요한 것만 유지하고 오래된 내용은 제거.
> >
> > 요약(Summarization) 활용: 대화가 길어지면 요약을 생성해 대화 이력의 길이를 줄이기.
> >
> > 필요할 때만 Chat History 포함: 모든 API 호출에서 대화 이력을 포함하는 것이 아니라, 문맥이 필요한 경우에만 활용.

## 프로세스

```txt
1. 이전 대화 history를 embedding (vector화 시켜서 용량을 줄임)
2. vector stores에 저장
3. 다음 답변을 할 때 Retriever가 vector stores에서 history와 관련된 문서를 검색 (빠르게 검색 가능)
4. RAG를 수행하여 답변 (vector화 된 history는 토큰의 수가 작기에 API 사용률이 줄어듬)
```

```ts
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";

const systemPrompt =
  "You are an assistant for question-answering tasks. " +
  "Use the following pieces of retrieved context to answer " +
  "the question. If you don't know the answer, say that you " +
  "don't know. Use three sentences maximum and keep the " +
  "answer concise." +
  "\n\n" +
  "{context}";

const qaPrompt = ChatPromptTemplate.fromMessages([
  ["system", systemPrompt],
  new MessagesPlaceholder("chat_history"),
  ["human", "{input}"],
]);

const questionAnswerChain = await createStuffDocumentsChain({
  llm,
  prompt: qaPrompt,
});

const ragChain = await createRetrievalChain({
  retriever: historyAwareRetriever,
  combineDocsChain: questionAnswerChain,
});
```

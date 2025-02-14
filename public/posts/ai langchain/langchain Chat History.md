# langchain Chat History

> 멀티턴 대화를 위한 대화 이력(Chat History) 저장 및 활용 방법
>
> > Chat History를 사용할 수록 API 사용 토큰 수가 늘어나기에 최적화를 해야한다.
> >
> > > 대화 이력 제한: 이전 메시지 중 중요한 것만 유지하고 오래된 내용은 제거.
> > >
> > > 요약(Summarization) 활용: 대화가 길어지면 요약을 생성해 대화 이력의 길이를 줄이기.
> > >
> > > 필요한 Chat History만 포함: 모든 API 호출에서 대화 이력을 포함하는 것이 아니라, 문맥이 필요한 경우에만 활용.
> > >
> > > > 유저의 질문은 role: user, AI의 답변은 role: assistant로 구분

## 프로세스

```txt
1. 이전 대화 history를 embedding (vector화 시켜서 용량을 줄임)
2. vector stores에 저장
3. 다음 답변을 할 때 Retriever가 vector stores에서 관련된 history만 검색 (빠르게 검색 가능)
4. RAG를 수행하여 답변 (필요한 history만 사용했기에 API 비용이 절감됨)
```

## 구현

```ts
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";

// 대화 이력 검색
const searchedHistory = await this.vectorStore.get(message, 2, {
  userId: id,
});
const historyMap = searchedHistory.map(doc => {
  const role = doc.metadata.type;
  return [role, doc.pageContent] as DocumentInterface<Record<string, any>>[];
});

const qaPrompt = ChatPromptTemplate.fromMessages([
  ["system", systemPrompt],
  new MessagesPlaceholder("chat_history"),
  ["user", "{message}"],
]);

const promptValue = await promptTemplate.invoke({
  message,
  chat_history: historyPrompts,
});

// 답변 생성 및 전송
const stream = await this.model.stream(promptValue);
const subject$ = this.create(id);
const chunks = [];
for await (const chunk of stream) {
  chunks.push(chunk);
  subject$.next({
    data: { chunk: chunk.content.toString() },
  } as MessageEvent<{ chunk: string }>);
}
subject$.next({
  data: "end",
} as MessageEvent<"end">);

//! 히스토리 저장
this.vectorStore.add(id, [
  {
    metadata: {
      type: "user",
      userId: id,
    },
    pageContent: message,
  },
]);
this.vectorStore.add(id, [
  {
    metadata: {
      type: "assistant",
      userId: id,
    },
    pageContent: chunks.join(""),
  },
]);
```

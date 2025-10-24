# langchain respond Output Parsers StringOutputParser

> 최종적으로 생성된 AiMessage를 pipeline내에서 변환해주는 기능
>
> > content.toString()을 대신해줌

```ts
const chain = ChatPromptTemplate.fromMessages([
  ["system", "{system}"],
  new MessagesPlaceholder("chat_history"),
  ["user", "{message}"],
])
  .pipe(this.llm)
  .pipe(new StringOutputParser()); // chunk.content.toString();을 대신 해줌

const stream = await chain.stream({
  message,
  system,
  chat_history,
});

const chunks = [];
for await (const chunk of stream) {
  chunks.push(chunk); // chunk는 StringOutputParser에서 변환된 문자열
  subject$.next({
    data: { chunk },
  } as MessageEvent<{ chunk: string }>);
}
```

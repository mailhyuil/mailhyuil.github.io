# langchain prompt Prompt Templates

> 일반 message 함수를 사용하면 데이터들을 전부 string으로 변환해서 사용해야한다.
>
> > Prompt Templates를 사용하면 데이터를 더 쉽게 배열로 넣을 수 있다.
> >
> > > roles : system, user(human), assistant(ai)

```ts
import { ChatPromptTemplate } from "@langchain/core/prompts";

const { message, language } = data;

const systemMessages = getSystemMessages();

const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", "Translate the following from English into {language}, " + systemMessages.join("\n")],
  ["user", "{message}"],
]);

const promptValue = await promptTemplate.invoke({
  language,
  message,
});

const stream = await this.model.stream(promptValue);
const chunks = [];
for await (const chunk of stream) {
  chunks.push(chunk);
  res.write(chunk.content.toString());
}
res.end();
```

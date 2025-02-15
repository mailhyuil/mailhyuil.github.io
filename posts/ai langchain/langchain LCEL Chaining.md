# langchain LCEL Chaining

```ts
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";

// 체인을 생성 (pipeline)
const prompt = ChatPromptTemplate.fromTemplate("tell me a joke about {topic}");
const chain = prompt.pipe(model).pipe(new StringOutputParser());

// 체인에 변수를 넣고 호출
await chain.invoke({ topic: "bears" });
```

# chatgpt embedding

> embedding : 문장을 벡터로 변환하는 방법
>
> > 벡터는 좌표평면에 그릴 수 있고 이를 통해 유사도를 계산할 수 있음

## 사용

```ts
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const embeddings = await openai.chat.embeddings.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "What is the purpose of life?" },
    ],
  });

  console.log(embeddings);
}
```

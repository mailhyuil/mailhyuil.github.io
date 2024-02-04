# chatgpt embedding

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

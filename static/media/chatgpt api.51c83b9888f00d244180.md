# chatgpt api

## install

```sh
npm install openai
```

## apikey

```
export OPENAI_API_KEY='your-api-key-here'
```

## 사용

```ts
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
```

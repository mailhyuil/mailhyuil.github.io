# chatgpt api

## install

```sh
npm install openai
```

## OPENAI_API_KEY

> OPENAI_API_KEY 환경변수에 api-key를 설정해야함

```js
export OPENAI_API_KEY='your-api-key-here'
```

## 사용

```ts
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    temperature: 0, /// 창의성이 필요하면 0.7 정도로 설정, 0일 경우 항상 같은 답을 반환할 확률이 높음
    n: 1, /// 몇개의 결과를 받을지
    max_tokens: 100, /// 최대 토큰 수
    stop: ["\n", "."], /// 중지할 문자열
  });

  console.log(completion.choices[0]); /// n의 값에 따라 completion.choices[0 ~ n]의 길이의 값을 반환
}

main();
```

# langchain Caching

> 같은 요청에 대한 응답을 캐싱하여 불필요한 요청을 줄이고, 빠른 응답을 제공합니다.

## install

```sh
npm i ioredis
npm i @langchain/community
npm i @langchain/core
```

## usage

```ts
import { ChatOpenAI } from "@langchain/openai";
import { Redis } from "ioredis";
import { RedisCache } from "@langchain/community/caches/ioredis";

const client = new Redis("redis://localhost:6379");

const cache = new RedisCache(client, {
  ttl: 60, // Optional key expiration value
});

const model = new ChatOpenAI({ cache });

const response1 = await model.invoke("Do something random!");
console.log(response1);
/*
  AIMessage {
    content: "Sure! I'll generate a random number for you: 37",
    additional_kwargs: {}
  }
*/

const response2 = await model.invoke("Do something random!");
console.log(response2);
/*
  AIMessage {
    content: "Sure! I'll generate a random number for you: 37",
    additional_kwargs: {}
  }
*/

await client.disconnect();
```

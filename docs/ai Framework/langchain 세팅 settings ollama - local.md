# langchain 세팅 settings ollama - local

## install

```sh
npm i langchain
npm i @langchain/core
npm i @langchain/community

npm i @langchain/ollama
```

## usage

```ts
import { ChatOllama } from "@langchain/ollama";

const ollamaLlm = new ChatOllama({
  baseUrl: "http://localhost:11434", // Default value
  model: "llama2", // Default value
});
```

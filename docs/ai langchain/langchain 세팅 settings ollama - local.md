# langchain settings local

## install

```sh
npm i langchain @langchain/core @langchain/ollama
```

## usage

```ts
import { ChatOllama } from "@langchain/ollama";

const ollamaLlm = new ChatOllama({
  baseUrl: "http://localhost:11434", // Default value
  model: "llama2", // Default value
});
```

# langchain settings hugging face

## install

```sh
npm i @langchain/community
npm i @langchain/core
npm i @huggingface/inference@2
npm i @xenova/transformers
```

## usage

```ts
import { HuggingFaceInference } from "@langchain/community/llms/hf";

const model = new HuggingFaceInference({
  model: "gpt2",
  apiKey: "YOUR-API-KEY", // In Node.js defaults to process.env.HUGGINGFACEHUB_API_KEY
});
const res = await model.invoke("1 + 1 =");
console.log({ res });
```

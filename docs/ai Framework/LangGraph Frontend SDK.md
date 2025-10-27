# LangGraph Frontend SDK

## install

```sh
npm i @langchain/langgraph-sdk
```

## usage

```ts
import { Client } from "@langchain/langgraph-sdk";

const client = new Client();

// List all assistants
const assistants = await client.assistants.search({
  metadata: null,
  offset: 0,
  limit: 10,
});

// We auto-create an assistant for each graph you register in config.
const agent = assistants[0];

// Start a new thread
const thread = await client.threads.create();

// Start a streaming run
const messages = [{ role: "human", content: "what's the weather in la" }];

const streamResponse = client.runs.stream(thread["thread_id"], agent["assistant_id"], {
  input: { messages },
});

for await (const chunk of streamResponse) {
  console.log(chunk);
}
```

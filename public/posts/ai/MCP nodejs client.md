# MCP nodejs

## install

```sh
npm i @modelcontextprotocol/sdk # LLM, Agent, App에서 MCP Server와 통신하기 위한 SDK
```

## client.ts

```ts
import { Client } from "@modelcontextprotocol/sdk/client";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse";

const client = new Client({ name: "client-name", version: "1.0.0" }, { capabilities: {} });

await client.connect(new SSEClientTransport(new URL("http://localhost:3000/sse")));

// Execute the 'hello-world' tool with progress tracking
const greetResult = await client.callTool(
  {
    name: "hello-world",
    arguments: {
      name: "MCP User",
    },
  },
  undefined, // responseSchema is optional, or you can define a Zod schema here
  {
    onprogress: progress => {
      console.log(`Progress: ${progress.progress}/${progress.total}`);
    },
  },
);

console.log(greetResult.content[0].text); // Output: Hello MCP User! I'm Test User from Test Org.
```

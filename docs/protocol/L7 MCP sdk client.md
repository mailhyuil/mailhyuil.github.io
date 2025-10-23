# MCP nodejs

## install

```sh
npm i @modelcontextprotocol/sdk # LLM, Agent, App에서 MCP Server와 통신하기 위한 SDK
npm i zod
```

## client.ts

> server가 지원하는 transport에 맞는 client를 사용

```ts
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import z from "zod";

const client = new Client(
  { name: "My MCP Client", version: "1.0.0" },
  {
    capabilities: {},
  },
);

await client.connect(
  new StdioClientTransport({
    command: "node",
    args: ["../server/index.js"],
  }),
);

// resource request
const resourceResult = await client.readResource({
  uri: "my-resource://hello-world",
});
console.log(resourceResult);
// {
//   contents: [
//     {
//       uri: "my-resource://hello-world",
//       text: "Resource echo: hello-world",
//     },
//   ];
// }

// tool request
const toolResult = await client.callTool(
  {
    name: "my-tool",
    _meta: {},
    arguments: {
      message: "Hello World!",
    },
  },
  z.object({
    content: z.array(
      z.object({
        text: z.string(),
        type: z.enum(["text", "image"]),
      }),
    ),
  }), // responseSchema is optional, or you can define a Zod schema here
  {},
);
console.log(toolResult); // { content: [ { text: 'Tool echo: Hello World!', type: 'text' } ] }

// prompt request
const promptResult = await client.getPrompt(
  {
    name: "my-prompt",
    arguments: {
      message: "Hello World!",
    },
  },
  {},
);
console.log(promptResult); // { messages: [ { role: 'user', content: { type: 'text', text: 'Please process this message: Hello World!' } } ] }
```

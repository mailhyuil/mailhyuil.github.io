# L7 MCP sdk server

## install

```sh
npm i @modelcontextprotocol/sdk
npm i zod

# test
npx @modelcontextprotocol/inspector node ./dist/index.js # MCP Server의 상태를 시각화하기 위한 Inspector
```

## server.ts

```ts
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "My MCP Server",
  version: "1.0.0",
});

// server에서 지원하는 resource를 정의합니다.
server.resource(
  "my-resource",
  new ResourceTemplate("echo://{message}", { list: undefined }),
  async (uri, { message }) => ({
    contents: [
      {
        uri: uri.href,
        text: `Resource echo: ${message}`,
      },
    ],
  }),
);

// server에서 지원하는 tool을 정의합니다.
server.tool("my-tool", { message: z.string() }, async ({ message }) => ({
  content: [{ type: "text", text: `Tool echo: ${message}` }],
}));

// server에서 지원하는 prompt를 정의합니다.
server.prompt("my-prompt", { message: z.string() }, ({ message }) => ({
  messages: [
    {
      role: "user",
      content: {
        type: "text",
        text: `Please process this message: ${message}`,
      },
    },
  ],
}));

const transport = new StdioServerTransport();
await server.connect(transport);
console.log("Server started and listening for requests...");
```

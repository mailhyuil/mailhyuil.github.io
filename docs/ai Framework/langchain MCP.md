# langchain MCP

## install

```sh
npm i @langchain/mcp-adapters
```

## usage

```ts
import { MultiServerMCPClient } from "@langchain/mcp-adapters";
import { ChatAnthropic } from "@langchain/anthropic";
import { createAgent } from "langchain";

const client = new MultiServerMCPClient({
  math: {
    transport: "stdio", // Local subprocess communication
    command: "node",
    // Replace with absolute path to your math_server.js file
    args: ["/path/to/math_server.js"],
  },
  weather: {
    transport: "sse", // Server-Sent Events for streaming
    // Ensure you start your weather server on port 8000
    url: "http://localhost:8000/mcp",
  },
});

const tools = await client.getTools();
const agent = createAgent({
  model: "claude-sonnet-4-5-20250929",
  tools,
});

const mathResponse = await agent.invoke({
  messages: [{ role: "user", content: "what's (3 + 5) x 12?" }],
});

const weatherResponse = await agent.invoke({
  messages: [{ role: "user", content: "what is the weather in nyc?" }],
});
```

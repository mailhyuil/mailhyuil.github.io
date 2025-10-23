# MCP mcp-framework server

## install

```sh
npm i mcp-framework # MCP Server Framework
mcp create my-mcp
mcp add tool example
mcp add resource example
mcp add prompt example

# test
npx @modelcontextprotocol/inspector node ./dist/index.js # MCP Server의 상태를 시각화하기 위한 Inspector
```

## index.ts

```ts
import { MCPServer } from "mcp-framework";

const server = new MCPServer({
  transport: {
    type: "http-stream", // stdio, http-stream, sse(deprecated)
    options: {
      port: 8080,
      responseMode: "stream", // batch, stream
    },
  },
});

server.start();
```

## tool

```ts
import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface ExampleInput {
  message: string;
}

class ExampleTool extends MCPTool<ExampleInput> {
  name = "example_tool";
  description = "An example tool that processes messages";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: ExampleInput) {
    return `Processed: ${input.message}`;
  }
}

export default ExampleTool;
```

## resource

```ts
import { MCPResource, ResourceContent } from "mcp-framework";

class ExampleResource extends MCPResource {
  uri = "resource://example";
  name = "Example";
  description = "Example resource description";
  mimeType = "application/json";

  async read(): Promise<ResourceContent[]> {
    return [
      {
        uri: this.uri,
        mimeType: this.mimeType,
        text: JSON.stringify({ message: "Hello from Example resource" }),
      },
    ];
  }
}

export default ExampleResource;
```

## prompt

```ts
import { MCPPrompt } from "mcp-framework";
import { z } from "zod";

interface ExampleInput {
  message: string;
}

class ExamplePrompt extends MCPPrompt<ExampleInput> {
  name = "example";
  description = "Example prompt description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
      required: true,
    },
  };

  async generateMessages({ message }: ExampleInput) {
    return [
      {
        role: "user",
        content: {
          type: "text",
          text: message,
        },
      },
    ];
  }
}

export default ExamplePrompt;
```

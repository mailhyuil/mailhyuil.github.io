# MCP nodejs

## install

```sh
npm i mcp-framework # MCP Server Framework
mcp create my-mcp
mcp add tool my-job

# test
npm i @modelcontextprotocol/inspector # MCP Server의 상태를 시각화하기 위한 Inspector
npx @modelcontextprotocol/inspector ./dist/index.js
```

## tools/WeatherTool.ts

```ts
import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface WeatherInput {
  city: string;
}

class WeatherTool extends MCPTool<WeatherInput> {
  name = "weather";
  description = "Get weather information for a city";

  schema = {
    city: {
      type: z.string(),
      description: "City name to get weather for",
    },
  };

  async execute({ city }: WeatherInput) {
    // weather API에서 정보를 가져오는 로직을 구현
    return {
      city,
      temperature: 22,
      condition: "Sunny",
      humidity: 45,
    };
  }
}

export default WeatherTool;
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

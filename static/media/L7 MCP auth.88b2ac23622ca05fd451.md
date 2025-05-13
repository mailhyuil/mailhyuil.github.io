# MCP auth

> Oauth 2.0을 사용

```ts
import { JWTAuthProvider, MCPServer } from "mcp-framework";

const server = new MCPServer({
  name: "MCP Server",
  version: "1.0.0",
  transport: {
    type: "http-stream", // sse
    options: {
      auth: {
        provider: new JWTAuthProvider({
          secret: "your-jwt-secret",
          algorithms: ["HS256"], // Optional, defaults to ["HS256"]
          headerName: "Authorization", // Optional, defaults to "Authorization"
          requireBearer: true, // Optional, defaults to true
        }),
        endpoints: {
          sse: true, // Require auth for SSE connections
          messages: true, // Require auth for messages
        },
      },
    },
  },
});

server.start();
```

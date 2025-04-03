# MCP mcp-remote (stdio)

> local (stdio)만 지원하는 MCP 서버를 remote mcp server로 연결

```json
{
  "mcpServers": {
    "remote-example": {
      "command": "npx",
      "args": ["mcp-remote", "https://remote.mcp.server/sse"]
    }
  }
}
```

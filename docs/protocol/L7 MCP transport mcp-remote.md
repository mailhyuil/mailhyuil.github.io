# L7 MCP transport mcp-remote

> stdio는 mcp 서버를 subprocess로 실행시켜서 사용하는 방법
>
> > 만약 서버가 stdio만 지원한다면 mcp-remote를 사용하여 stdio를 http로 변환하여 사용할 수 있다.

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

# L7 MCP postgres

## install

```sh
npm i @modelcontextprotocol/server-postgres
```

## mcp-server

```json
{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/mydb"]
    }
  }
}
```

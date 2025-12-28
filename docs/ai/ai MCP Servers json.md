# ai mcp servers json

## Claude Code

```json

```

## Claude Desktop

```json

```

## Cursor

```json
{
  "mcpServers": {
    "dart": {
      "command": "dart",
      "args": ["mcp-server"]
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "BSAE9U3HCdzeNtMzRy_jkC_TW7puOCz"
      }
    },
    "desktop-commander": {
      "command": "npx",
      "args": ["@wonderwhy-er/desktop-commander@latest"],
      "env": {
        "ALLOWED_DIRECTORIES": "['/Users/sangbaekyu/Workspace']"
      }
    },
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    },
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    },
    "git": {
      "command": "uvx",
      "args": ["mcp-server-git"]
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"],
      "env": {
        "MEMORY_FILE_PATH": "/Users/sangbaekyu/Workspace/memory.json"
      }
    },
    "supermemory": {
      "url": "https://api.supermemory.ai/mcp",
      "headers": {}
    }
  }
}
```

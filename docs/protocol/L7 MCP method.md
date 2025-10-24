# L7 MCP method

## Tool

```txt
tools/list

tools/call
params: {
  name: "example_tool",
  arguments: {
    message: "Hello World!",
  },
}
```

## Resource

```txt
resources/list

resources/read
params: {
  uri: "resource://example",
}
```

## Prompt

```txt
prompts/list

prompts/get
params: {
  name: "example_prompt",
  arguments: {
    message: "Hello World!",
  },
}
```

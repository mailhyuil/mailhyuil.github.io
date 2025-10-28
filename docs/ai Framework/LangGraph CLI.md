# LangGraph CLI

## install

```sh
npm install -g @langchain/langgraph-cli
```

## usage

```sh
langgraphjs

langgraphjs new <project-name> # Creates a new LangGraph project in the specified directory.
langgraphjs dev # Starts a lightweight local dev server (no Docker required), ideal for rapid testing.
langgraphjs build # Builds a Docker image of your LangGraph API server for deployment.
langgraphjs dockerfile # Emits a Dockerfile derived from your config for custom builds.
langgraphjs up # Starts the LangGraph API server locally in Docker. Requires Docker running; LangSmith API key for local dev; license for production.
```

## langgraph.json

```json
{
  "$schema": "https://langgra.ph/schema.json",
  "dependencies": ["."],
  "graphs": {
    "chat": "./src/chat/graph.ts:<CompiledStateGraph_variable_name>"
  },
  "api_version": "0.2",
  "checkpointer": {
    "ttl": {
      "strategy": "delete",
      "sweep_interval_minutes": 60,
      "default_ttl": 43200
    }
  }
}
```

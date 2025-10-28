# LangGraph State TrimMessage

## usage

```ts
async function trimMessage(state: typeof MessagesAnnotation.State) {
  const messages = state.messages;
  const trimmedMessages = await trimMessages(messages, {
    maxTokens: 45,
    strategy: "last",
    tokenCounter: new ChatOpenAI({ model: "gpt-4" }),
    includeSystem: true,
  });
  return { messages: trimmedMessages };
}
```

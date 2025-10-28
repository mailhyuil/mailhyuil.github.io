# LangGraph State RemoveMessage

## usage

```ts
async function removeMessage(state: typeof MessagesAnnotation.State) {
  console.log("removeMessage");
  const messages = state.messages;
  if (messages.length > 3) {
    return {
      messages: [
        new RemoveMessage({
          id: messages[0].id!, // 특정 메시지 ID를 지정하여 제거
        }),
      ],
    };
  }
}
```

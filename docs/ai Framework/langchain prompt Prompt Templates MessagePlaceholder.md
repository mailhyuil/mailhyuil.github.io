# langchain prompt Prompt Templates MessagePlaceholder

> 여러 메세지를 placeholder에 넣을 때 상요하는 방법

```js
const chain = ChatPromptTemplate.fromMessages([
  ["system", "너는 고양이 박사야"],
  new MessagesPlaceholder("chat_history"), // or ['placeholder', 'chat_history']
  ["user", "고양이는 또 무엇을 좋아해?"],
]);
await chain.invoke({
  chat_history: [
    ["assistant", "안녕하세요. 무엇을 도와드릴까요?"],
    ["user", "고양이는 생선을 좋아해?"][("assistant", "네! 고양이는 생선을 좋아합니다.")],
  ],
});

// Input Result
[
  ["assistant", "고양이 박사 어시스턴트"],
  ["assistant", "안녕하세요. 무엇을 도와드릴까요?"],
  ["user", "고양이는 또 무엇을 좋아해?"],
  ["user", "고양이는 생선을 좋아해?"],
  ["assistant", "네! 고양이는 생선을 좋아합니다."],
];
```

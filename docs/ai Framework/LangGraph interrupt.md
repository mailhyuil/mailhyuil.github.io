# LangGraph interrupt

> Human-in-the-loop의 흐름을 제어하는 기능
>
> > workflow를 잠시 pause 시키고 사용자의 입력을 다시 받아서 처리할 수 있다.

```ts
const nodeWithInterrupts = () => {
  const answer1 = interrupt({ value: 1 });
  const answer2 = interrupt({ value: 2 });
  return { myKey: answer1 + " " + answer2 };
};

config = { configurable: { thread_id: threadId } };
let state = await graph.stream("initialState", config);

// isInterrupted를 사용하여 interrupt가 발생했는지 확인한다.
if (isInterrupted(state)) {
  console.log(state[INTERRUPT][0].value); // state[INTERRUPT][0].value는 interrupt의 value값이다. // { value: 1 }
  state = await graph.stream(new Command({ resume: "answer 1" }), config); // resume를 사용하여 interrupt를 다시 시작한다.
}

if (isInterrupted(state)) {
  console.log(state[INTERRUPT][0].value);
  state = await graph.stream(new Command({ resume: "answer 2" }), config);
}

console.log(state.myKey); // { myKey: "answer 1 answer 2" }
```

## loop

```ts
const config = { configurable: { thread_id: threadId } };
let currentState = await app.invoke(initialState, config);
while (true) {
  currentState = await app.invoke(currentState, config);
  if (isInterrupted(currentState)) {
    const answer = await ask(currentState[INTERRUPT][0].value);
    currentState = await app.invoke(new Command({ resume: answer }), config);
    continue;
  }
  if (currentState.status === "canceled" || currentState.status === "succeeded") break;
}
```

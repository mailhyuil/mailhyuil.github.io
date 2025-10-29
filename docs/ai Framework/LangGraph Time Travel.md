# LangGraph Time Travel

> 로직 실패 등의 문제가 발생 시 이전 상태로 되돌려서 다시 다른 방법으로 실행할 수 있다.

## usage

> getStateHistory를 사용하여 이전 상태를 조회
>
> > config내의 checkpoint_id를 활용하여 이전 상태를 조회

```ts
const config = {
  configurable: {
    thread_id: uuidv4(),
  },
};

const state = await graph.invoke({}, config);

// getStateHistory를 사용하여 이전 상태를 조회
const states = [];
for await (const state of graph.getStateHistory(config)) {
  states.push(state);
}

for (const state of states) {
  console.log(state.next);
  console.log(state.config.configurable?.checkpoint_id);
  console.log();
}

// history 중 하나를 선택
const selectedState = states[1];
console.log(selectedState.next);
console.log(selectedState.values);

// updateState를 사용하여 새로운 config를 생성
const newConfig = await graph.updateState(selectedState.config, {
  topic: "chickens",
});
console.log(newConfig);

// 새로운 config를 사용하여 invoke
await graph.invoke(null, newConfig);
```

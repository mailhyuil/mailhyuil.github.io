# node xstate

> state machine을 구현할 수 있는 라이브러리

```ts
import { assign, createActor, createMachine } from "xstate";

const countMachine = createMachine({
  context: {
    count: 0,
  },
  on: {
    INC: {
      actions: assign({
        count: ({ context }) => context.count + 1,
      }),
    },
    DEC: {
      actions: assign({
        count: ({ context }) => context.count - 1,
      }),
    },
    SET: {
      actions: assign({
        count: ({ event }) => event.value,
      }),
    },
  },
});

const countActor = createActor(countMachine).start();

countActor.subscribe((state) => {
  console.log(state.context.count);
});

countActor.send({ type: "INC" });
// logs 1
countActor.send({ type: "DEC" });
// logs 0
countActor.send({ type: "SET", value: 10 });
// logs 10
```

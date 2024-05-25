# angular Signals computed

> computed는 읽기 전용이다.

## usage

```js
// count(signal)이 변경 되면 doubleCount(computed)도 변경된다.
const count: WritableSignal<number> = signal(0);
const doubleCount: Signal<number> = computed(() => count() * 2);
```

## equal option

> isEqual 함수를 넣어주면 새로운 값을 할당했는지를 체크한다.
>
> > 이 옵션을 사용하면 mutate가 먹히지 않는다 (mutate는 새로운 객체를 할당한게 아니기 때문..)

```ts
import _ from "lodash";

const data = signal(["test"], { equal: _.isEqual });

// Even though this is a different array instance, the deep equality
// function will consider the values to be equal, and the signal won't
// trigger any updates.
data.set(["test"]);
```

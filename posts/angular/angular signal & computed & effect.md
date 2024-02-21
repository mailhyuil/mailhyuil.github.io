# angular Signals

> 기존 ChangeDetectionStrategy는 변화를 감지하면 모든 컴포넌트를 다시 렌더링한다.
>
> > ChangeDetectionStrategy.OnPush 를 사용하면 변화를 감지하면 해당 컴포넌트만 다시 렌더링할 수 있지만 개발자에게 더 많은 책임을 요구한다.
> >
> > > signal & computed & effect 를 사용하면 변화를 감지하면 해당 컴포넌트만 다시 렌더링할 수 있고 개발자에게 적은 책임을 요구한다.
> > >
> > > > Signal : 값을 감싸고 있는 래퍼 객체, 변경을 감지하고 어디서 변경됐는지 추적을 할 수 있어 원하는 UI만 다시 그릴 수 있다.

## signal

> 기존의 메모리 값을 변경하여 변경을 감지하는 방식이 아닌, getter, setter 를 통해 변경을 감지하는 방식
>
> > 기본으로 <WriteableSignal> 이다.

```js
// set : 단순히 새로운 값을 할당할 때
this.signal.set("newValue");

// update : 그 전 값에 연산을 수행해서 새로운 값으로 만들 때
this.option.update((option) => ({ ...option, status: segment }));
```

## computed

> computed는 읽기 전용이다.

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

## effect

> computed와 비슷하지만 다른 signal들을 계속 감시한다.
>
> > constructor 내에서 사용
> >
> > > effect는 자주 사용되는 API는 아니다

```sh
# 사용 예시
Logging data being displayed and when it changes, either for analytics or as a debugging tool
Keeping data in sync with window.localStorage
Adding custom DOM behavior that can't be expressed with template syntax
Performing custom rendering to a <canvas>, charting library, or other third party UI library
```

```ts
effect(() => {
  console.log(`The current count is: ${count()}`);
});
```

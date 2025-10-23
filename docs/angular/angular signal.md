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
> > 기본으로 \<WriteableSignal> 이다.

```js
// set : 단순히 새로운 값을 할당할 때
this.signal.set("newValue");

// update : 그 전 값에 연산을 수행해서 새로운 값으로 만들 때
this.option.update(option => ({ ...option, status: segment }));
```

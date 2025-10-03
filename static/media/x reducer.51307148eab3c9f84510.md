## State Reducer

> 리듀서 함수는 이전 상태 클래스와 액션 클래스를 입력으로 받고, 새로운 상태를 반환
>
> > reducer(state, action)
> >
> > > 리듀서 패턴의 주요한 이유는 애플리케이션의 상태 관리를 단순하고 예측 가능한 방식으로 처리하기 위해서
> > >
> > > > 리듀서 패턴은 상태 변화의 추적과 디버깅을 용이하게 만들어줍니다. 각각의 액션은 이전 상태와 새로운 상태를 나타내는 스냅샷으로 저장되므로, 어떤 액션에 의해 어떻게 상태가 변경되었는지 추적하기 쉽습니다. 이를 통해 버그를 찾고 수정하는 것이 더욱 간편해집니다.
> > > >
> > > > > 여러 컴포넌트에서 값을 공유 할때 값이 어디서 변경되는지 추적이 용이 불변성 시간 여행 가능 비동기 작업의 상태를 처리해야 하는 경우 등

```js
const state = 0;
const action = (state) => ++state;
const reducer = (state, action) => action(state);
reducer(state, action);
```

## js의 reduce

> action을 통해서 state를 변경해서 새로 반환

```js
const newState = state.reduce(action, currentState);
```

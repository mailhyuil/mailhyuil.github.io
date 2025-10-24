# next store redux

> state가 readonly로 state를 변화시키는 방법은 reducer함수 뿐이라 디버깅 용이
>
> > Action과 Old State를 Reducer로 넘기면 (dispatch) 새로운 상태를 반환
> >
> > > 상태를 컴포넌트에 분산시키지 않고 한곳에 모아두기에 관리 용이

## 상태란

> 서버의 응답, 캐시된 데이터, 로컬 생성 데이터, UI 상태, 페이지네이션, 무한 스크롤, 라우팅, spinners, 모달 등등

```js
// 현재 라우트
const activeRoute = "/대시보드";

// 현재 선택된 탭
const selectedTab = "탭_1";

// 스피너
const isLoading = true;

// 페이지네이션
const currentPage = 1;
const pageSize = 10;
```

## 상태관리가 어려운 이유

> 변화(mutation)와 비동기성(asynchronocity)을 함께 다룰 때 복잡성은 폭발한다.
> count state가 있고 increment, decrement 버튼이 있을 때 inc, inc, dec 버튼을 눌러서 1이 되었다
> 하지만 이 1이라는 값은 inc, inc, dec,가 전부 resolved 된 것인지, inc가 resolved 되고 inc, dec는 pending 상태인건지 알 수 없다.
>
> > If a model can update another model, then a view can update a model, which updates another model...

## Redux의 세가지 원칙

> to make state mutations predictable
>
> > 예측 가능한 상태 변화를 만들기 위해

1. Single source of truth
2. State is read-only
3. Changes are made with pure functions

## State

## Action

> type과 값을 가지고 있는 객체
>
> > Old State를 바꾸는 행위를 정의

```ts
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

## Reducer

> state와 action을 받아서 새로운 state를 반환하는 함수

```ts
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.text],
      };
    default:
      return state;
  }
};
```

## Side Effects

> 네트워크 요청, 비동기 작업, 브라우저 캐시 업데이트등의 작업

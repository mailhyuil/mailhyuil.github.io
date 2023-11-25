# redux

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
>
> > If a model can update another model, then a view can update a model, which updates another model...

## Redux의 세가지 원칙

> to make state mutations predictable
>
> > 예측 가능한 상태 변화를 만들기 위해

1. Single source of truth
2. State is read-only
3. Changes are made with pure functions

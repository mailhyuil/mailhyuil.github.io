# react base Virtual DOM

## Virtual DOM이란?

> Virtual DOM은 실제 DOM의 가벼운 JavaScript 표현입니다. 브라우저의 실제 DOM을 직접 조작하는 대신, 메모리상에서 가상의 DOM 트리를 만들어 작업합니다.

```ts
// Virtual DOM 예시 (단순화된 구조)
const virtualDOM = {
  type: "div",
  props: { className: "container" },
  children: [
    {
      type: "h1",
      props: { className: "title" },
      children: ["Hello World"],
    },
  ],
};
```

## Reconciliation

> Reconciliation은 Virtual DOM의 변경사항을 실제 DOM에 효율적으로 반영하는 알고리즘입니다.
>
> > 내부적으로 diffing, 휴리스틱 알고리즘, key, 배치 업데이트 등을 사용하여 뷰 업데이트를 최적화합니다.

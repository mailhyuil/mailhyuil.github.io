# vue render functions - h()

- h()는 hyperscript의 약자로 Vue.js에서 가상 DOM을 생성하는 데 사용되는 함수입니다.
- js/ts 파일 내에서 UI를 그릴때 사용될 수 있습니다.

```ts
import { h } from "vue";

export const renderSomeComponent = () => {
  return h("div", { class: "my-class" }, "Hello, World!");
};

export const renderAnotherComponent = () => {
  return h("button", { onClick: () => alert("Button clicked!") }, [h("i", { class: "icon" }), h("span", "Click me")]);
};
```

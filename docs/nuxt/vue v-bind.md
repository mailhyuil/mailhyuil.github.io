# vue v-bind

- reactive한 변수에 사용 (e.g. props, ref, reactive)
- class에 바인딩하면 동적으로 class를 이용한 style 변경 가능
- `:name` 축약형으로 사용 가능

```html
<div v-bind:id="dynamicId"></div>
<div :id="dynamicId"></div>
<!-- shorthand -->
```

# vue v-on

- event listener
- `@` 로 축약 가능

## @click.self

> target만 click 이벤트를 받는다

```html
<div @click.self="">
  <!-- 이 요소만 click 이벤트 -->
  <div></div>
  <!-- 이 요소는 click 이벤트 받지 않음 -->
</div>
```

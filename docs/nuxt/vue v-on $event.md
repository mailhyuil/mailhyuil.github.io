# vue v-on $event

template내의 event handler에서 $event는 event 객체를 참조하는 특별한 변수입니다.

## $event

```html
<button @click="handleClick($event)">클릭</button>
```

## target vs currentTarget

```vue
<script setup lang="ts">
const handleClick = (event: MouseEvent) => {
  console.log("target", event.target); // span
  console.log("currentTarget", event.currentTarget); // button
};
</script>
<template>
  <button @click="handleClick">
    <span>클릭</span>
  </button>
</template>
```

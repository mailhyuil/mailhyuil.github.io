# popup

> window.open()으로 새로운 브라우저 창으로 열기

```html
<script lang="ts" setup>
  const open = () => {
    window.open("/popup.html", "a", "width=400, height=300, left=100, top=50");
  };
</script>
<template>
  <div class="">
    <button @click="open">popup!</button>
  </div>
</template>
```

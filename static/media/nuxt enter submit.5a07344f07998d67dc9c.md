# nuxt enter submit

```vue
<script>
const keyup = (ev: any) => {
  if (ev.key === "Enter") {
    submit();
  }
};
</script>

<template>
  <div @keyup="keyup"></div>
</template>
```

# vue ref DOM - 컴포넌트에 접근

```vue
<script lang="ts" setup>
import { ref } from "vue";
const myComponent = ref<InstanceType<typeof MyComponent> | null>(null);
onMounted(() => {
  console.log(myComponent.value); // 컴포넌트 인스턴스에 접근
});
</script>
<template>
  <MyComponent ref="myComponent" />
</template>
```

# nuxt mitt

> emit을 전역으로 관리

## /plugins/mitt.ts

```ts
import mitt from "mitt";

export default defineNuxtPlugin(() => {
  const emitter = mitt();

  return {
    provide: {
      on: emitter.on,
      emit: emitter.emit,
    },
  };
});
```

## A.vue

```vue
<script lang="ts" setup>
const { $emit } = useNuxtApp();

const foo = () => {
  $emit("foo", "hihihi"); // foo라는 이름으로 "hi"값을 emit
};
</script>

<template>
  <div>
    <h1>mitt :</h1>
    <button @click="foo">click me!</button>
  </div>
</template>
```

## B.vue

```vue
<script lang="ts" setup>
const { $on } = useNuxtApp();
const stateFromMitt = ref();
$on("foo", (e: any) => {
  // foo라는 이름으로 emit한 값을 받아서 처리
  stateFromMitt.value = e;
});
</script>
<template>
  <div>
    <h1>{{ stateFromMitt }}</h1>
  </div>
</template>
```

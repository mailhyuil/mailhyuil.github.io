# nuxt plugin

- 앱 실행 시점(runtime)에 실행
- 외부 라이브러리를 전역으로 등록
- composables에 등록해서 사용하면 좋다

## plugins/mitt.client.ts

```ts
import mitt from "mitt";

export default defineNuxtPlugin(() => {
  const emitter = mitt();

  return {
    provide: {
      bus: emitter, // '$bus'라는 이름으로 등록됨
    },
  };
});
```

## usage

```vue
<script lang="ts" setup>
const { $bus } = useNuxtApp();

const sendEvent = () => {
  $bus.emit("my-event", "hello!");
};
</script>
<template>
  <button @click="sendEvent">Send Event</button>
</template>
```

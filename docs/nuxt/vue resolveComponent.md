# nuxt resolveComponent

- 일반적으로 <script setup>을 사용하는 환경에서는 컴포넌트를 직접 import해서 쓰기 때문에 이 함수를 쓸 일이 거의 없지만, 특수한 상황에서는 꼭 필요합니다.
- 런타임에 어떤 컴포넌트를 렌더링할지 결정해야 할 때 사용

```vue
<script lang="ts" setup>
const Footer = resolveComponent("Footer");
</script>

<template>
  <div>asdf</div>
  <component :is="Footer"></component>
</template>
```

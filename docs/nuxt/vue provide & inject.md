# vue provide & inject

- 상태를 공유할 수 있게 해주는 기능
- pinia로 대체 가능하지만, 컴포넌트 간의 의존성이 높아지는 단점이 있다.
- 컴포넌트 개발시에는 provide & inject를 사용을 권장

## parent.vue

```vue
<script setup>
import { ref, provide, readonly } from "vue";

const count = ref(0);

// 1. 값만 보내기 (Symbol 사용 가능)
provide("counter", count);

// 2. (추천) 값은 읽기전용으로, 수정은 함수로만 가능하게 보내기
const updateCount = newVal => {
  count.value = newVal;
};

provide("safeCounter", {
  count: readonly(count), // 자식이 직접 수정 못하게 보호
  updateCount, // 대신 이 함수를 써서 수정해라!
});
</script>
```

## child.vue

```vue
<script setup>
import { inject } from "vue";

// inject('키 이름', '기본값')
// 부모가 provide한 게 없을 때를 대비해 기본값을 주는 게 안전합니다.
const { count, updateCount } = inject("safeCounter", {
  count: 0,
  updateCount: () => {},
});
</script>

<template>
  <div>
    <p>부모로부터 받은 숫자: {{ count }}</p>
    <button @click="updateCount(count + 1)">숫자 올리기</button>
  </div>
</template>
```

# vue ref DOM - dom element 접근

## ref로 DOM 요소에 접근

```vue
<script lang="ts" setup>
import { ref } from "vue";

const myDiv = ref<HTMLDivElement | null>(null);
onMounted(() => {
  console.log(myDiv.value); // DOM 요소에 접근
});
</script>
<template>
  <div ref="myDiv">Hello</div>
</template>
```

## list에서 접근하기

```vue
<script lang="ts" setup>
import { ref } from "vue";
const items = ref(["A", "B", "C"]);

const myDivs = ref<HTMLDivElement[]>([]);
onMounted(() => {
  console.log(myDivs.value); // DOM 요소 배열에 접근
});
</script>
<template>
  <div v-for="(item, index) in items" :key="index" ref="myDivs">
    {{ item }}
  </div>
  <!-- 또는 -->
  <div v-for="(item, index) in items" :key="index" :ref="el => myDivs.push(el)">
    {{ item }}
  </div>
</template>
```

## 동적으로 접근하기

```vue
<script lang="ts" setup>
import { ref } from "vue";

const count = ref(0);
const el = ref<HTMLDivElement | null>(null);
onMounted(() => {
  console.log(el.value); // 초기 DOM 요소에 접근
});
function increment() {
  count.value++;
  // DOM 업데이트 후 el.value에 접근하려면 nextTick 사용
}
</script>

<template>
  <div>
    <div :ref="isActive ? 'activeEl' : 'inactiveEl'"></div>
    <div :ref="el => (myEl = el)"></div>
  </div>
</template>
```

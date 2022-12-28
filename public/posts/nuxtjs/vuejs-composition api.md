# CompositionAPI

```vue
<script setup>
import { ref, onMounted } from 'vue';

// reactive state
const count = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

## Reactivity API

### ref()

> ref()는 객체, 원시값 둘 다 가능

```
const 변수 = ref(null);
<div ref='변수'></div>
```

> querySelector 대신 사용 가능
>
> > v-for로 생성된 요소만 ref로 배열로 받아올 수 있다.

```
const heys = ref<string[]>(["hey1", "hey2", "hey3"]);
const h1 = ref<HTMLHeadElement[]>();
```

### reactive()

> reactive()는 객체만 할당 가능

### computed()

> template 안에 있는 표현식을 script부분으로 뺄 수 있다.

### readonly()

### watchEffect()

### watchPostEffect()

### watchSyncEffect()

### watch()

### props

```vue
<script lang="ts" setup>
const isOpen = ref(false);
</script>
<template>
  <PropsTest :is-open="isOpen" />
</template>
```

```vue
<script lang="ts" setup>
const props = defineProps<{
  isOpen: boolean;
}>();
</script>
<template>
  <div>
    isOpen? :
    {{ isOpen }}
  </div>
</template>
```

### emit

> 부모에서 자식으로 보내기

#### 부모

```vue
<script>
const dismiss = () => {
  console.log('dismissed!');
};
</script>

<template>
  <button @dismiss="dismiss"></button>
</template>
```

#### 자식

```vue
<script>
const emits = defineEmits<{
  (event: 'dismiss'): void;
}>()
// or
// const emits = defineEmits(['dismiss'])
</script>

<template>
  <button @click="emits('dismiss')"></button>
</template>
```

> 자식에서 부모로 보내기

#### 자식

```vue
<script>
const val = ref('hi')
const emits = defineEmits<{
  (event: 'dismiss'): void;
}>()
// or
// const emits = defineEmits(['dismiss'])
emits('dismiss', val)
</script>

<template>
  <button @click="emits('click')"></button>
</template>
```

#### 부모

```vue
<script>
const dismiss = (val) => {
  console.log(val.value); // 'hi'
};
</script>

<template>
  <button @dismiss="dismiss"></button>
</template>
```

> @click은 오버라이드된다

```vue
<Inquiry
  :is-open="isInquiryOpen"
  @dismiss="dismiss"
  @click="isInquiryOpen = true"
>
</Inquiry>
```

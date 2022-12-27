# CompositionAPI

```vue
<script setup>
import { ref, onMounted } from "vue";

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

```vue
<script>
const emits = defineEmits<{
  (event: 'dismiss'): void;
  (event: 'click'): void;
}>()
</script>
<template>
  <button @click="emits('click')"></button>
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

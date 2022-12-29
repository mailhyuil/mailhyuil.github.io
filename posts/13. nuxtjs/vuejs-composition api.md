# CompositionAPI

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

### toRef()

> reactive 객체에서 property만 가져올 때 사용

```
const state = reactive({
  foo: 1,
  bar: 2
})

const fooRef = toRef(state, 'foo')
```

### readonly()

### watchEffect()

### watchPostEffect()

### watchSyncEffect()

### watch()

> 값이 변할때마다 함수를 실행시킬 수 있다.

```
const val = ref(0)

watch(val, (mutatedVal)=>{console.log(mutatedVal)})
```

> 변한 값의 전처리도 가능

```
watch(
  () => val.value + 10, // 먼저 연산
  (mutatedVal) => { //연산한 값을 파라미터로 받음
    console.log(mutatedVal);
  }
);
```

> 여러 값을 넣을 수도 있다.

```
const x = ref(0)
const y = ref(0)

watch([x, y], (x, y)=>{console.log(x, y)})
```

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
  console.log("dismissed!");
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

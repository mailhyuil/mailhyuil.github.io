# vue v-model

- 양방향 바인딩을 가능하게 한다
- v-model을 사용시 update:v-model emit을 사용하면 바로 값이 바뀐다!
- v-model:변수명="값"으로 변수명 설정 가능
- 변수명 설정하지 않으면 modelValue로 받을 수 있다.
- update:modelValue 혹은 update:변수명 emits으로 업데이트 할 수 있다.

```vue
<template>
  <div>
    <input v-model="searchText" />

    <!-- 위의 코드와 밑의 코드는 같다 -->
    <input :value="searchText" @input="searchText = $event.target.value" />

    <!-- 컴포넌트일 시 -->
    <CustomInput :modelValue="searchText" @update:modelValue="newValue => (searchText = newValue)" />
  </div>
</template>
```

```ts
const props = defineProps<{
  modelValue: string;
}>();

const emits = defineEmits(["update:modelValue"]);
emits("update:modelValue", "안녕"); // 따옴표 모양이 같아야한다 "" 안됨
```

```txt
v-model="" === modelValue
update:modelValue

v-model:title === title
update:title
```

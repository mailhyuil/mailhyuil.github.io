# vue v-slot

- 컴포넌트 재사용할 때 유용한 기능!
- slot이 여러개면 named slot 사용 `<slot name="slotName" />` `<template #slotName>` 으로 사용

## Name.vue

```html
<template>
  <div>
    <button class="p-2 bg-red-500">
      <slot />
    </button>
    <button class="p-2 bg-blue-500">
      <slot name="slotName" />
    </button>
  </div>
</template>
```

## other.vue

```vue
<template>
  <Name>
    <template>
      // "이름이 없는
      <slot />
      으로 들어갑니다."
    </template>
    <template #slotName>
      // "
      <slot name="slotName" />
      으로 들어갑니다."
    </template>
  </Name>
</template>
```

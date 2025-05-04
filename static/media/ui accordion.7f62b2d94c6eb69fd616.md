# css accordion

## Accordion.vue

```vue
<script lang="ts" setup>
const props = defineProps<{
  items: {
    name: string;
    path: string;
  }[];
}>();
const isOpen = ref<boolean>(false);
const container = ref();
</script>
<template>
  <ClientOnly>
    <div class="relative border-b border-gray-200">
      <button type="button" class="w-full px-8 py-6 text-left border-b" @click="isOpen = !isOpen">
        <div class="flex items-center justify-between">
          <slot />
        </div>
      </button>
      <div
        class="relative overflow-hidden transition-all max-h-0 duration-700"
        style=""
        ref="container"
        :style="isOpen ? 'max-height: ' + container?.scrollHeight + 'px' : ''">
        <template v-for="i of items">
          <NuxtLink :to="i.path">
            <div class="p-6">
              {{ i.name }}
            </div>
          </NuxtLink>
        </template>
      </div>
    </div>
  </ClientOnly>
</template>
```

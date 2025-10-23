## teleport to app.vue

### app.vue

```
<template>
  <div>
    <div id="modal-container"></div>
    <div id="alert-container"></div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

### Teleport

```
<Teleport to="#modal-container" v-if="isOpen">
</Teleport>
```

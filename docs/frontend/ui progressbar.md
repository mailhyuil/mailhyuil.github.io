# ui progressbar

```html
<script lang="ts" setup>
  const scrollWrapper = ref();
  const progressbar = ref();
  const progress = ref();

  onMounted(() => {
    window.onscroll = () => {
      let percent = Math.trunc(
        (scrollY / (scrollWrapper.value.scrollHeight - innerHeight)) * 100
      );
      let remappedPercent = percent > 100 ? 100 : percent;
      console.log(remappedPercent);
      progress.value.style.height = `${remappedPercent}%`;
    };
  });
</script>
<template>
  <div>
    <div ref="scrollWrapper" class="h-[200vh] relative bg-blue-900">
      <div
        class="fixed flex flex-col items-center top-1/2 left-10 h-32 -translate-y-1/2"
      >
        <p>01</p>
        <div
          class="w-1 h-full bg-gray-800 opacity-80 rounded-full"
          ref="progressbar"
        >
          <div class="w-full bg-white" ref="progress"></div>
        </div>
        <p>08</p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
```

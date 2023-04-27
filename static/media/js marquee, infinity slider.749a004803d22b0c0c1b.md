# js marquee, infinity slider

## to right

```ts
<script lang="ts" setup>
const container = ref<HTMLDivElement>();
onMounted(() => {
  if (container.value) {
    const containerBoundary = container.value.getBoundingClientRect();
    const sliders: HTMLDivElement[] = Array.from(
      container.value?.childNodes
    ).filter((e) => e.nodeType !== Node.TEXT_NODE) as HTMLDivElement[];
    const width = parseInt(getComputedStyle(sliders[0]).width) + 20;
    let INIT_POSITION = 0;

    if (sliders) {
      sliders?.forEach((e) => {
        e.style.left = INIT_POSITION + 'px';
        INIT_POSITION -= width;
      });
    }

    let speed = 1;

    function draw() {
      requestAnimationFrame(draw);
      sliders.forEach((e) => {
        if (e.getBoundingClientRect().left > containerBoundary.right) {
          e.style.left =
            parseInt(sliders[sliders.length - 1].style.left) - width + 'px';
          sliders.shift();
          sliders.push(e);
          return false;
        }
        e.style.left = parseInt(e.style.left) + speed + 'px';
      });
    }
    draw();
  }
});
</script>
<template>
  <div
    ref="container"
    class="relative flex h-32 w-full gap-10 overflow-hidden">
    <div
      class="absolute left-0 top-0 w-32 h-10"
      v-for="i of 10">
      <img
        src="http://placehold.it/400"
        class="w-full h-full object-cover" />
    </div>
  </div>
</template>
```

## to left

```ts
<script lang="ts" setup>
const container = ref<HTMLDivElement>();
onMounted(() => {
  if (container.value) {
    const containerBoundary = container.value.getBoundingClientRect();
    const sliders: HTMLDivElement[] = Array.from(
      container.value?.childNodes
    ).filter((e) => e.nodeType !== Node.TEXT_NODE) as HTMLDivElement[];
    const width = parseInt(getComputedStyle(sliders[0]).width) + 20;
    let INIT_POSITION = width;

    if (sliders) {
      sliders?.forEach((e) => {
        e.style.left = INIT_POSITION + 'px';
        INIT_POSITION += width;
      });
    }

    let speed = -1;

    function draw() {
      requestAnimationFrame(draw);
      sliders.forEach((e) => {
        if (e.getBoundingClientRect().right < containerBoundary.left) {
          e.style.left =
            parseInt(sliders[sliders.length - 1].style.left) + width + 'px';
          sliders.shift();
          sliders.push(e);
          return false;
        }
        e.style.left = parseInt(e.style.left) + speed + 'px';
      });
    }
    draw();
  }
});
</script>
<template>
  <div
    ref="container"
    class="relative flex h-32 w-full gap-10 overflow-hidden">
    <div
      class="absolute left-0 top-0 w-32 h-10"
      v-for="i of 10">
      <img
        src="http://placehold.it/400"
        class="w-full h-full object-cover" />
    </div>
  </div>
</template>
```

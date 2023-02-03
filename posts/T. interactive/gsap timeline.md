# gsap timeline

```vue
<script lang="ts" setup>
import gsap from "gsap";
const box = ref();
let tl = gsap.timeline({ paused: true });
onMounted(() => {
  tl.to(box.value, {
    width: "100px", // css property
    height: "100px",
    backgroundColor: "red",
    duration: 0.5,
    ease: "elastic",
  });
  box.value.onmouseenter = () => {
    tl.play();
  };
  box.value.onmouseleave = () => {
    tl.reverse();
  };
});
</script>
<template>
  <div ref="body" class="w-screen h-screen">
    <div ref="box" class="w-10 h-10 bg-blue-500"></div>
  </div>
</template>
```

## label

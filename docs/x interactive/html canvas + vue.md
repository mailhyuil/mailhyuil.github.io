# html canvas + vue

## app.vue

> 라우팅 할 때 요소 사이즈 데이터가 사라지지 않도록

```
<NuxtPage :key="$route.fullPath" />
```

## component

```vue
<script lang="ts" setup>
const canvas = ref<HTMLCanvasElement>();

onMounted(() => {
  const ctx = canvas?.value?.getContext("2d");

  const w = canvas.value.parentNode.clientWidth;
  const h = canvas.value.parentNode.clientHeight;

  ctx.canvas.width = w;
  ctx.canvas.height = h;

  ctx.fillStyle = "rgb(100,100,100)";
  ctx.fillRect(0, 0, w, h);

  let x = 0;

  const draw = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(x, h / 2, 50, 50);
    x++;
    requestAnimationFrame(draw);
  };

  draw();
});
</script>

<template>
  <div class="h-96 relative">
    <canvas class="absolute -z-10 top-0 left-0" ref="canvas"></canvas>
  </div>
</template>
```

# GSAP (greenSock)

## install

```
yarn add gsap
```

## 사용 전

1. 어떤 플러그인을 사용할 지 결정!
2. 유료 플러그인도 있다

## cheetsheet

[gsap cheetsheet](https://greensock.com/cheatsheet/)

## basic

```js
gsap.set(".selector", { toVars });
```

## Tween

```js
gsap.to;
gsap.from;
gsap.fromTo;
```

## Timeline

```js
let tl = gsap.timeline(...)

tl.to(".selector", {duration: 1, x: 50, y: 0})
  .to("#id", {autoAlpha: 0})
  .to(elem, {duration: 1, backgroundColor: "red"})
  .to([elem, elem2], {duration: 3, x: 100});
```

## ease

```
// see greensock.com/ease-visualizer
ease: "none" // no ease (same as "linear")

// basic core eases
"power1", "power2", "power3", "power4",
"circ", "expo", "sine"
// each has .in, .out, and .inOut extensions
// i.e. "power1.inOut"

// expressive core eases
"elastic", "back", "bounce", "steps(n)"

// in EasePack plugin (not core)
"rough", "slow", "expoScale(1, 2)"
```

## in nuxt

### tween

```vue
<script lang="ts" setup>
import gsap from "gsap";
const box = ref();

onMounted(() => {
  gsap.to(box.value, {
    width: "100px", // css property
    height: "100px",
    backgroundColor: "red",
    duration: 1,
    ease: "elastic",
  });
});
</script>
<template>
  <div ref="body" class="w-screen h-screen">
    <div ref="box" class="w-10 h-10 bg-blue-500"></div>
  </div>
</template>
```

### timeline

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

## timeline

## events

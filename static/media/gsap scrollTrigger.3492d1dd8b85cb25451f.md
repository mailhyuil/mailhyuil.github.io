# gsap scrollTrigger

## in gsap.to

```js
gsap.to(box1.value.childNodes[0], {
  scrollTrigger: {
    trigger: box1.value, ///타겟 좌표 here 기준
    start: "top top", // trigger의 상단, window의 상단 ***trigger의 상단과 window의 상단이 닿으면 start
    end: "top top", //trigger은 하단, windowdml 상단 ***trigger의 상단과 window의 상단이 닿으면 end
    scrub: 1, //스크롤과의 딜레이 1
  },
  color: "#f00",
  translateX: 100,
});
```

```js
gsap.to(list.value.childNodes, {
  scrollTrigger: {
    trigger: list.value, ///타겟 좌표 here 기준
    start: "center bottom", //trigger기준 상단, window기준 상단에 닿을 때 (numeric, in pixels)
    end: "center bottom", //시작부분에서 trigger은 제일 하단까지, window는 상단까지 닿으면 효과 종료
    markers: true, //인디케이터 표시
    scrub: 1, //스크롤과의 딜레이 1
  },
  stagger: 0.1, // 각 요소 딜레이
  color: "#f00",
  translateX: 100,
  opacity: 1,
});
```

## ScrollTrigger.create

```vue
<script lang="ts" setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const box1 = ref();
const box2 = ref();

onMounted(() => {
  ScrollTrigger.create({
    trigger: box1.value,
    start: "top top", // 시작 시점
    end: "bottom bottom", // 끝나는 시점
    onEnter: () => {
      console.log("HI");
      // gsap.to()
    },
  });
});
</script>
<template>
  <div ref="body" class="w-screen h-screen">
    <div
      ref="box1"
      class="w-full h-[200%] bg-blue-500 cursor-pointer mt-[100%]"></div>
    <div ref="box2" class="w-full h-[200%] bg-red-500 cursor-pointer"></div>
  </div>
</template>
```

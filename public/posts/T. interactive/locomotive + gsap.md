# locomotive + gsap

```vue
<script lang="ts" setup>
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const wrapper = ref();
const locoContainer = ref();
const locoScroll = ref();

onMounted(() => {
  locoScroll.value = new LocomotiveScroll({
    el: locoContainer.value,
    smooth: true,
  });

  locoScroll.value.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(locoContainer.value, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.value.scrollTo(value, 0, 0)
        : locoScroll.value.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: locoContainer.value.style.transform ? "transform" : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => {
    locoScroll.value.update();
  });

  ScrollTrigger.refresh();
  ////////////////////////////////////////////////////////////
  gsap.to(wrapper.value.childNodes, {
    scrollTrigger: {
      trigger: wrapper.value,
      scroller: locoContainer.value,
      start: "top top",
      end: "+=300%",
      scrub: true,
      pin: true,
      markers: true,
    },
    xPercent: -200,
  });
  ////////////////////////////////////////////////////
});
</script>
<template>
  <div>
    <div ref="locoContainer" class="locoContainer">
      <div class="h-screen bg-red-100 flex justify-center items-center">
        <h1 class="text-[10rem] font-extrabold">안녕하세요</h1>
      </div>
      <div ref="wrapper" class="h-screen flex">
        <h1
          class="text-[10rem] font-extrabold flex-grow-1 flex-shrink-0 w-screen h-full flex justify-center bg-blue-500">
          안녕하세요1
        </h1>
        <h1
          class="text-[10rem] font-extrabold flex-grow-1 flex-shrink-0 w-screen h-full flex justify-center bg-yellow-500">
          안녕하세요2
        </h1>
        <h1
          class="text-[10rem] font-extrabold flex-grow-1 flex-shrink-0 w-screen h-full flex justify-center bg-green-500">
          안녕하세요3
        </h1>
      </div>
    </div>
  </div>
</template>
<style>
/*! locomotive-scroll v4.1.3 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
html.has-scroll-smooth {
  overflow: hidden;
}

html.has-scroll-dragging {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.has-scroll-smooth body {
  overflow: hidden;
}

.has-scroll-smooth [data-scroll-container] {
  min-height: 100vh;
}

[data-scroll-direction="horizontal"] [data-scroll-container] {
  height: 100vh;
  display: inline-block;
  white-space: nowrap;
}

[data-scroll-direction="horizontal"] [data-scroll-section] {
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  height: 100%;
}

.c-scrollbar {
  position: absolute;
  right: 0;
  top: 0;
  width: 11px;
  height: 100%;
  transform-origin: center right;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0;
}
.c-scrollbar:hover {
  transform: scaleX(1.45);
}
.c-scrollbar:hover,
.has-scroll-scrolling .c-scrollbar,
.has-scroll-dragging .c-scrollbar {
  opacity: 1;
}
[data-scroll-direction="horizontal"] .c-scrollbar {
  width: 100%;
  height: 10px;
  top: auto;
  bottom: 0;
  transform: scaleY(1);
}
[data-scroll-direction="horizontal"] .c-scrollbar:hover {
  transform: scaleY(1.3);
}

.c-scrollbar_thumb {
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  width: 7px;
  border-radius: 10px;
  margin: 2px;
  cursor: -webkit-grab;
  cursor: grab;
}
.has-scroll-dragging .c-scrollbar_thumb {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}
[data-scroll-direction="horizontal"] .c-scrollbar_thumb {
  right: auto;
  bottom: 0;
}
</style>
```

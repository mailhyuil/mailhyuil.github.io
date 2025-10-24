# animation gsap scrollTrigger timeline

> gsap.timeline을 사용하여 구현하는 방법

## html

```html
<div class="container relative h-screen">
  <div
    class="absolute top-0 left-0 z-20 flex flex-col items-center justify-center w-full h-screen text-white bg-blue-200 cover"
  >
    <h1 class="text-5xl text">최고의 안락함을 추구한 2018년부터 시작된 여정</h1>
  </div>
  <div class="relative w-full h-screen bg-blue-100 box">
    <div class="absolute left-5 bottom-5 lg:left-[250px] lg:bottom-[120px] text-left flex flex-col lg:gap-5">
      <p data-aos="fade-up" data-aos-anchor="#trigger-top" class="text-sm lg:text-[30px] opacity-[0.6]">
        최고의 안락함을 추구한 2018년부터 시작된 여정
      </p>
    </div>
  </div>
</div>
```

## js

```js
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "+=2000",
    pin: true,
    scrub: 1,
    snap: {
      snapTo: "labels",
      duration: { min: 0.2, max: 3 },
      delay: 0.2,
      ease: "power1.inOut",
    },
  },
});

tl.addLabel("start")
  .from(".cover", { translateX: -2000, opacity: 0 })
  .addLabel("translate")
  .from(".text", { translateY: 200, opacity: 0 })
  .addLabel("end");
```

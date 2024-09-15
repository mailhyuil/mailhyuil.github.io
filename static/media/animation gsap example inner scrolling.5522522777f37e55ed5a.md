# animation gsap example inner scrolling

## html

```html
<section class="container h-screen">
  <div class="flex justify-center w-full h-screen gap-10 p-5 overflow-hidden">
    <ul>
      <li>
        <p>slider1</p>
      </li>
      <li>
        <p>slider2</p>
      </li>
      <li>
        <p>slider3</p>
      </li>
      <li>
        <p>slider4</p>
      </li>
    </ul>
    <div class="flex flex-col h-[500vh] gap-5 content">
      <dl class="h-screen "></dl>
      <dl class="h-screen bg-green-500"></dl>
      <dl class="h-screen bg-yellow-500"></dl>
      <dl class="h-screen bg-blue-500"></dl>
      <dl class="h-screen bg-gray-500"></dl>
    </div>
  </div>
</section>
```

## js

```js
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "+=4000",
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

const titles = document.querySelectorAll(".titles");
const contents = document.querySelectorAll(".contents");

const height = window.innerHeight;

tl.to(contents, { translateY: -height, duration: 1 });
tl.to(contents, { translateY: -(height * 2), duration: 1 });
tl.to(contents, { translateY: -(height * 3), duration: 1 });
tl.to(contents, { translateY: -(height * 4), duration: 1 });
```

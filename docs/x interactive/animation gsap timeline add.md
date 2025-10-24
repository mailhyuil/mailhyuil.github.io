# animation gsap timeline add

> scrub: true 설정이 있으면 작동하지 않는다.

```js
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "+=1000",
    pin: true,
  },
});
tl.add(() => {
  console.log("hello");
});
```

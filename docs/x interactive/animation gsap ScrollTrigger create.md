# animation gsap ScrollTrigger create

> ScrollTrigger로 직접 구현하는 방법

```js
ScrollTrigger.create({
  trigger: ele,
  start: "top 80%",
  end: "top 50%",
  markers: true,
  toggleClass: {
    targets: targetEle,
    className: "bg-blue-300",
  },
  scrub: 1,
  onEnter: self => {
    // gsap.to()
  },
  onLeave: () => {
    // gsap.to()
  },
  onEnterBack: () => {
    // gsap.to()
  },
  onEnterBack: () => {
    // gsap.to()
  },
});
```

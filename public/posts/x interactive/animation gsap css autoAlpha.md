# animation gsap css autoAlpha

> autoAlpha property를 0으로 설정하면 opacity가 0으로 되면서 visibility가 hidden으로 되어서 렌더링이 되지 않는다.
>
> > to improve browser rendering performance and prevent clicks/interactivity on the target.

```js
gsap.to(".box", {
  duration: 1,
  autoAlpha: 0,
  ease: "none",
  delay: 1,
  onComplete: () => {
    console.log("animation completed");
  },
});
```

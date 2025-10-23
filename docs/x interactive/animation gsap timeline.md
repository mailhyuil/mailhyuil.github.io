# gsap timeline

> to / from / fromTo를 여러개 써서 delay를 건것 과 같다

```js
gsap.to(ele, {});
gsap.to(ele, {
  delay: 10,
});
gsap.to(ele, {
  delay: 20,
});

// is the same as

const tl = gsap.timeline();
tl.to(ele, {}).to(ele, {}).to(ele, {});
```

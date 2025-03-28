# animation gsap timeline 순차적으로 실행

> tl.add(()=>{}) 콜백을 사용하여 순차적으로 실행할 수 있다.

```ts
const tl1 = this.gsap.timeline({
  scrollTrigger: {
    trigger: container,
    start: "+=50% bottom",
    end: "bottom bottom",
    scrub: 1,
  },
});

const tl2 = this.gsap.timeline({
  scrollTrigger: {
    trigger: container,
    start: "+=130% bottom",
    end: "top top",
    scrub: 1,
  },
});

tl1.add(() => {
  tl2.to(splittedText1, {
    opacity: 0,
    stagger: 0.1,
    duration: 1,
  });
  tl2.fromTo(
    splittedText2,
    {
      opacity: 0,
      stagger: 0.1,
    },
    {
      opacity: 1,
      stagger: 0.1,
      duration: 1,
    },
    "-=2",
  );
});

tl1.fromTo(
  splittedText1,
  {
    opacity: 0.5,
  },
  {
    stagger: 1,
    duration: 2,
    opacity: 1,
  },
);
```

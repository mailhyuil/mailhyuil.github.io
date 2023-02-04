# gsap timeline

> gsap.to를 여러개 써서 delay를 건것 과 같다

```js
gsap.to(ele, {});
gsap.to(ele, {
  delay: 10,
});
gsap.to(ele, {
  delay: 20,
});
/* === */
const tl = gsap.timeline();
tl.to(ele, {}).to(ele, {}).to(ele, {});
```

## timeline + scrollTrigger

> gsap.timeline({scrollTrigger:...})

```js
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: wrapper2.value,
    start: "center bottom",
    end: "bottom bottom",
    scrub: 1,
    markers: true,
  },
});

tl.to(box2.value, {
  backgroundColor: "red",
}).to(box2.value, {
  backgroundColor: "green",
});
```

## label

> addLabel("label_name")을 중간에 삽입하면 play("label_name")으로 라벨 밑부터 시작가능

```js
tl.to(box2.value, {
  backgroundColor: "red",
})
  .to(box2.value, {
    backgroundColor: "green",
  })
  .addLabel("rotate") // addLabel
  .to(box2.value, {
    rotate: 360,
  });

tl.play("rotate");
```

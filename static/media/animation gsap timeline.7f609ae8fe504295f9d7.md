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

// is the same as

const tl = gsap.timeline();
tl.to(ele, {}).to(ele, {}).to(ele, {});
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

# gsap label repeat

```ts
tl.eventCallback("onComplete", repeatLabel);

function repeatLabel() {
  tl.seek("repeatTl");
  tl.play();
}
```

# animation gsap timeline label

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

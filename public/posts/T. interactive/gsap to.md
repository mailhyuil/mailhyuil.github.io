# gsap to

## stagger

> 여러 요소가 시간차를 두고 애니메이션 실행하도록 설정

```js
gsap.to(wrapper3.value.childNodes, {
  backgroundColor: "red",
  y: 50,
  scale: 0.1,
  duration: 0.1,
  stagger: {
    amount: 1,
    from: "center",
    grid: [5, 2],
  },
});
```

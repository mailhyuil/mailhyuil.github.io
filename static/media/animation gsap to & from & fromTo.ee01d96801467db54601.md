# gsap to

## to

> 현재 스타일에서 목표 스타일로 애니메이션을 적용한다.

```js
gsap.to(ele, {
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

## from

> 목표 스타일에서 현재 스타일로 애니메이션을 적용한다.

```js
gsap.from(ele, {
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

## fromTo

> a 스타일에서 b 스타일로 애니메이션을 적용한다.
>
> > 요소의 위치 스타일을 미리 지정할 필요가 없다.

```js
gsap.fromTo(
  ele,
  {
    backgroundColor: "red",
    y: 50,
    scale: 0.1,
  },
  {
    backgroundColor: "blue",
    y: 100,
    scale: 1,
    duration: 0.1,
    stagger: {
      amount: 1,
      from: "center",
      grid: [5, 2],
    },
  },
);
```

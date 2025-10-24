# animation gsap options snap

> built-in plugin
>
> > 두개의 값 사이에서 가까운 값으로 이동하는 기능

```js
// x, y 값 중 가까운 값으로 이동
gsap.to(".class", {
  x: 1000,
  y: 250,
  snap: "x,y",
});

// 20씩 가까운 값으로 이동
gsap.to(".class", {
  x: 1000,
  snap: {
    x: 20, // x snaps to the closest increment of 20 (0, 20, 40, 60, etc.)
  },
});

// snap to the closest value in an array:
gsap.to(".class", {
  x: 1000,
  snap: {
    x: [0, 50, 150, 500], // x snaps to the closest value in this array
  },
});

// snap to a value in an array, but only when it's within a certain distance/radius of one of those values:
gsap.to(".class", {
  x: 1000,
  snap: {
    x: { values: [0, 50, 150, 500], radius: 20 }, // x snaps to the closest value in the array but only when it's within 20 pixels of it.
  },
});
```

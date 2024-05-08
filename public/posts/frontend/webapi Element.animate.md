# Element.animate()

> css keyframes animation
>
> > requestAnimationFrame은 gpu 가속을 사용할 수 없기 때문에 Element.animate()를 사용한다.
> >
> > > 최신 api이기 때문에 브라우저 호환성을 확인해야한다.

```js
animate(keyframes, options);
```

## usage

```js
const div = document.createElement("div");
div.animate([{ transform: "translateY(0px)" }, { transform: "translateY(100px)" }], {
  duration: 1000,
  iterations: Infinity,
});
```

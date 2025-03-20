# matterjs context

> render의 property context 사용
>
> > afterRender event로 초기 렌더가 된 뒤에 그리기

```js
Events.on(render, "afterRender", () => {
  let x = 0;
  const draw = () => {
    render.context.fillStyle = "red";
    render.context.fillRect(x, 100, 100, 100);
    x++;
    requestAnimationFrame(draw);
  };
  draw();
});
```

# animation gsap options stagger

> 사전적 의미: (진행되는 일에) 시차를 두다
>
> > 여러 요소들이 동시에 시작하지 않고, 각 요소들이 일정 시간 간격을 두고 시작하도록 하는 옵션
> >
> > > seconds 단위

```js
gsap.to(".box", {
  y: 100,
  stagger: 0.1, // 0.1 seconds between when each ".box" element starts animating
});
```

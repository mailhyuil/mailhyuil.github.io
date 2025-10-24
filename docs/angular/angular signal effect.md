# angular signal effect

> computed와 비슷하지만 다른 signal들을 계속 감시한다.
>
> > constructor 내에서 사용
> >
> > > effect는 자주 사용되는 API는 아니다
> > >
> > > > 사용하면 좋은 경우
> > > >
> > > > Logging data being displayed and when it changes, either for analytics or as a debugging tool
> > > >
> > > > Keeping data in sync with window.localStorage
> > > >
> > > > Adding custom DOM behavior that can't be expressed with template syntax
> > > >
> > > > Performing custom rendering to a \<canvas>, charting library, or other third party UI library

## usage

```ts
effect(() => {
  console.log(`The current count is: ${count()}`);
});
```

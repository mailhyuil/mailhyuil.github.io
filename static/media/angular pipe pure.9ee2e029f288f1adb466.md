# angular pipe pure

> 불변성을 가진 pipe
>
> > input 값을 변화시키지 않고 순수한 output만 리턴

```ts
@Pipe({
  name: 'some',
  standalone: true,
  pure: true,
})
```

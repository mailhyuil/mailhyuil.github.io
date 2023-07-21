# angular pipe pure

> 불변성을 가진 pipe
>
> > input 값을 변화시키지 않고 순수한 output만 리턴

```ts
@Pipe({
  name: "some",
  standalone: true,
  pure: true,
})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
}
```

## 순수 파이프 (pure:true)

> 입력의 참조값이 변경되지 않으면 파이프는 실행되지 않는다.

## 비순수 파이프 (pure:false)

> 변경감지 순회 때마다 실행된다.

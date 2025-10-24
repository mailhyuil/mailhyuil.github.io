# angular base pipe

> template내에서 함수를 사용하면 change Detection이 발생할 때마다 함수가 동작해버림
>
> > 템플릿 내에서 함수를 호출할 때는 pure pipe를 사용하는게 좋다.

## pipe.ts

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

## html

> \{\{value | pipeName : arg1 : arg2 : ...\}\}

```html
<div>{{value | some}}</div>
```

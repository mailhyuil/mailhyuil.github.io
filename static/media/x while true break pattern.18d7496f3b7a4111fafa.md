# while true break pattern

> 블록안의 로직이 복잡할 경우 사용을 지양
>
> > 물론 이 패턴을 싫어하는 개발자들도 있음 (goto와 비슷한 느낌)

```ts
while (true) {
  if (condition) {
    break;
  }
}
// or
do {
  if (condition) {
    break;
  }
} while (true);
```

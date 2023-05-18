# tap

> 디버깅, 로깅, 사이드 이펙트 관리 등의 목적으로 사용
>
> > tap 연산자는 옵저버블이 값을 발행할 때마다 콜백 함수를 실행

```ts
import { of } from "rxjs";
import { tap } from "rxjs/operators";

const source$ = of(1, 2, 3, 4, 5);

source$.pipe(tap((value) => console.log("Value:", value))).subscribe();
```

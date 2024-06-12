# error handling Throwing Exceptions vs Result Pattern

> 두가지를 혼용해서 사용하는게 좋다.

## Throwing Exceptions

```sh
# pros
깨끗한 코드 (잘 사용했을 시)
빠른 실패
# cons
Exception 발생 시 퍼포먼스 하락
Exception 남용은 하면 코드가 더러워진다.
```

## Result Pattern

```sh
# pros
동기적인 실행 플로우
명시적인 에러 핸들링 매커니즘
# cons
수동으로 에러를 체크해줘야한다 (체크를 안할 시 버그 발생 가능성)
높은 메모리 사용
```

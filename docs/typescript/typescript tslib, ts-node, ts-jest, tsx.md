# typescript tslib, ts-node, ts-jest, tsx

## ts-node / tsx

> TypeScript 파일을 컴파일 하지 않고 바로 실행할 수 있는 Node 실행기
>
> > tsx 를 사용해라!

### ts-node 설정

> tsconfig.json

```json
{
  "ts-node": {
    "esm": true,
    "compilerOptions": {
      // ...
    }
  }
}
```

## ts-jest

> TypeScript로 작성된 테스트 코드를 컴파일 하지 않고 바로 실행할 수 있는 Jest 실행기

## tslib

> TypeScript 컴파일러가 생성하는 JavaScript 코드에서 공통적인 유틸리티 함수를 제공하는 라이브러리
>
> > 유틸리티 함수들이 들어있음 (e.g. ReadOnly, ReturnType, Pick...)

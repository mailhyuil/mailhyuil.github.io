# testing basic

## unit test

> 함수 단위로 테스트

## integration test

> 컨트롤러 단위로 테스트

## e2e test

> 사용자 시나리오 단위로 테스트

## mock

> 특정 메소드 호출을 가로채고, 기대한 동작을 수행하거나 가짜 결과를 반환
>
> > 주로 외부 리소스나 네트워크 호출 등을 테스트할 때 사용

```js
jest.fn();
```

## stub

> 실제 함수를 호출하면 기대한 결과를 반환하거나, 특정 동작을 수행

```js
jest.fn().mockReturnValue(1);
```

## spy

> 실제 함수를 호출하면서 동시에 호출 여부를 확인하거나, 호출된 인자를 기록

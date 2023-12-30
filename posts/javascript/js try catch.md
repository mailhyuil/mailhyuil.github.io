# js try catch

> try catch를 남용하지 말아라
>
> > only use them when you expect an exception to occur and you need to handle it in a specific way.

## when to use

```
외부 자원과의 상호작용 // api, 시스템 자원, 네트워크 요청 등
비동기 작업
파싱 및 변환 작업
동적으로 생성된 코드
복잡한 계산 또는 로직
```

## 특정 에러 객체를 생성해라

```js
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  // error occurs
} catch (e) {
  if (e instanceof CustomError) {
    // handle custom error
  } else {
    // handle other errors
  }
}
```

## async try catch

> 비동기 태스크를 try catch로 감싸려면 await로 블로킹을 시켜야한다.

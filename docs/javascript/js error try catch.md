# js try catch

> try catch를 남용하지 말아라
>
> > only use them when you expect an exception to occur and you need to handle it in a specific way.

## when to use

```txt
외부 자원과의 상호작용 // api, 시스템 자원, 네트워크 요청 등
비동기 작업
파싱 및 변환 작업
동적으로 생성된 코드
복잡한 계산 또는 로직
```

## Error 객체를 확장해서 커스텀 에러를 생성해라

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

## HttpError의 경우 status code로 구분해라

> HttpError는 직접 구현하여 status code 등을 추가해야한다.
>
> > angular의 경우 HttpErrorResponse를 제공한다.

```js
async function fetch(url) {
  const response = await fetch(url);
  return response;
}

try {
  await fetch("https://example.com");
} catch (e) {
  if (e instanceof HttpError) {
    if (e.statusCode === 404) {
      // handle 404 error
    } else if (e.statusCode === 403) {
      // handle 403 error
    } else {
      // handle other errors
    }
  } else {
    // handle other errors
  }
}
```

## async try catch

> 비동기 태스크를 try catch로 감싸려면 await로 블로킹을 시켜야한다.
>
> > 또는 콜백함수 내부에서 try catch를 사용해야한다.

```js
try {
  await asyncTask();
} catch (e) {
  // handle error
}

// or
asyncTask((err, result) => {
  if (err) {
    // handle error
  } else {
    // handle result
  }
});
```

# js regex

## 리터럴

> // 로 생성

```js
/^\/posts\/([a-zA-Z0-9-_]+)$/;
```

## 메소드

```
/^\/posts\/([a-zA-Z0-9-_]+)$/.test(text) // 일치하는게 있는 지 boolean값 리턴
/^\/posts\/([a-zA-Z0-9-_]+)$/.exec(text) // 일치 정보를 리턴
```

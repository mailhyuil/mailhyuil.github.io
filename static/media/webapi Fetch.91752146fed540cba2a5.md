# webapi Fetch

> Request와 Response 객체를 사용하여 네트워크 통신을 할 수 있다.

```js
const req = new Request("http://localhost:3000/api"); // Request 객체 생성
fetch(req)
  .then((res) => res.json()) // Response 객체 반환
  .then((data) => console.log(data));
```

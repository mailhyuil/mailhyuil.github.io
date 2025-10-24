# testing http axios

> 모든 요청에 대해서 성공을 하도록 설정
>
> > supertest 사용을 권장

```js
beforeAll(async () => {
  request = axios.create({
    baseURL: "http://localhost:4200",
    validateStatus: null, // 모든 요청에 대해서 성공하도록
  });
});
```

# test axios

> 모든 요청에 대해서 성공을 하도록 설정

```js
beforeAll(async () => {
  request = axios.create({
    baseURL: "http://localhost:4200",
    validateStatus: null, // 모든 요청에 대해서 성공하도록
  });
});
```

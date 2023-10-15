# js encoding

> 이미 인코딩된 데이터 -> utf-8 바이너로 데이터로 변환 -> 다시 인코딩

```js
private encodedSecret = Buffer.from(process.env.NX_TOSS_PAYMENTS_CLIENT_SECRET_KEY + ':').toString('base64');
```

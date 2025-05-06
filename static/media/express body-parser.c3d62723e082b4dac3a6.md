# express body-parser

> 클라이언트에서 보낸 값은 Content-Type에 따라 다른 형태로 보내진다.
>
> > 이렇게 보내진 값을 JS 객체로 변환해주는 미들웨어

```js
app.use(express.json()); // application/json을 파싱
app.use(express.urlencoded({ extended: true })); // application/x-www-form-urlencoded을 파싱
app.use(express.text()); // text/plain을 파싱
app.use(express.raw()); // application/octet-stream을 파싱

// multipart/form-data는 multer를 사용해야 한다.
```

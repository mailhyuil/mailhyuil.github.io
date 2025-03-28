# express body-parser urlencoded

> content-type: application/x-www-form-urlencoded을 json으로 파싱해주는 기능
>
> > html form으로 POST 요청을 할때 값은 기본적으로 x-www-form-urlencoded 형태
> >
> > 데이터를 url 인코딩 후 웹 서버에 보내는 방식 (브라우저가 자동으로 해준다.)
> >
> > e.g. name=John+Doe&age=30&city=New+York -> json

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// false: nodejs의 querystring 모듈 사용 // res: [Object: null prototype] { message:"hello world" }
// true: qs 외부 패키지 사용             // res: { message:"hello world" }
```

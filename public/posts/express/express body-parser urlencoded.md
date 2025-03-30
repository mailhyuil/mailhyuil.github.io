# express body-parser urlencoded

> html form element로 POST 요청을 할 때 값은 기본적으로 Content-Type: application/x-www-form-urlencoded
>
> e.g. https://example.com?name=John+Doe&age=30&city=New+York
>
> > urlencoded는 이 타입으로 보낸 데이터를 JSON으로 파싱해준다.

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// true: 중첩객체 파싱 (qs 패키지 사용)                          // { person: { name: 'bobby', age: '3' } }
// false: 중첩객체 파싱 안함 (nodejs의 querystring 내장모듈 사용) // { 'person[age]': '3', 'person[name]': 'bobby' }
```

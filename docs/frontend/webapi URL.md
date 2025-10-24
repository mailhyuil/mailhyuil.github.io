# webapi URL

> url을 string 타입으로 사용하면 query string 변경 같은 작업을 사용자가 직접 해야한다.
>
> > URL 클래스를 사용하면 query string 변경 같은 작업을 쉽게 할 수 있다.

```js
const urlString = "https://www.example.com/search?q=query string";
// 이제 이 문자열을 어떻게 다루어야 하는지에 대한 사용자 코드 필요

const url = new URL("https://www.example.com/search?q=query string");
// 이제 `url` 객체를 사용하여 호스트, 검색 매개변수 등에 쉽게 접근 가능
```

# httpClient Jsonp (json with padding)

> cors로 인해 어쩔 수 없이 발생하는 이슈(cross domain issue)를 해결(우회)하기 위해 사용한다.
>
> > JSONP는 HTML의 script 요소로부터 요청되는 호출에는 보안상 정책이 적용되지 않는다는 점을 이용한 우회 방법
> >
> > > callback

```js
this.httpClient.jsonp(url, "callback").subscribe((res) => {
  console.log(res);
});
```

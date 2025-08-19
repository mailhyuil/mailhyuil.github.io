# html innerHTML

> 동적으로 HTML 요소의 내용를 추가한다.
>
> > Cross-site scripting(XSS) 공격에 취약하다.
> >
> > > dom을 다시 렌더링하기 때문에 성능이 떨어진다.
> > >
> > > > 사용해야한다면 DomPurify를 사용하여 Sanitize를 하여 XSS 공격을 방지해야한다.
> > > >
> > > > > angular의 DomSanitizer도 사용할 수 있다.

```js
document.getElementById("target").innerHTML = "<p>hello</p>";
// <div id="target"><p>hello</p></div>
```

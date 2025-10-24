# html innerHTML vs outerHTML

> innerHTML html 요소 내의 텍스트만 추가
>
> > outerHTML html 요소와 텍스트 함께 추가

```js
div.innerHTML = <p>hello</p>;
// <div>hello</div>

div.outerHTML = <p>hello</p>;
// <div><p>hello</p></div>
```

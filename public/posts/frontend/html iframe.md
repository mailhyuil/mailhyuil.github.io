# html iframe

> inline frame의 약자
>
> object와 같은 기능
>
> > 다른 HTML 페이지를 현재 페이지에 포함시키는 중첩된 브라우저
> >
> > > 페이지에 다른 페이지를 불러와서 삽입 할 수 있다.
> > >
> > > > iframe은 권장되지 않으면 ajax로 컨테이너를 업데이트 하는 것이 좋다.

## usage

```html
<iframe src="주소" width="너비" height="높이" frameborder="테두리" scrolling="스크롤바" name="이름" sandbox="보안"></iframe>
```

## sandbox

> iframe은 보안을 위해 iframe에서 form, script, plugin을 사용하지 못하도록 제한이 걸려있다.
>
> > 특수한 경우에 이를 허용하기 위해서 sandbox 속성을 사용한다.

```html
<!-- 
allow-forms 
allow-scripts 
allow-same-origin 
...
 -->
<iframe sandbox="allow-script" src="주소"></iframe>
```

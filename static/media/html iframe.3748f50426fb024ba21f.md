# html iframe (inline frame)

> 다른 HTML 페이지를 현재 페이지에 포함시키는 중첩된 브라우저
>
> > 나의 서버, 서비스에서 제공하는 기능 UI(결제, map, video..)를 클라이언트에 제공할 때 사용 (Widget 패턴)
> >
> > mobile app내의 webview와 같은 역할을 한다.
> >
> > > 속도를 향상하기 위해 메인 콘텐츠가 완전히 로딩된 이후에 JavaScript로 iframe의 src 특성을 설정하는 편이 좋습니다.

## usage

```html
<iframe src="주소" width="너비" height="높이" sandbox allowfullscreen>
  <p>
    <a href="/ko/docs/Glossary">iframes을 지원하지 않는 브라우저용 링크</a>
  </p>
</iframe>
```

## host 사이트의 리소스에 접근

> sandbox 속성을 통해서 접근을 차단할 수 있다.

```js
document.top; // host의 document 객체
```

# html iframe sandbox

> <iframe> 요소에 보일 콘텐츠에 대한 추가적인 제한 사항(restrictions)들의 집합을 명시

```html
<!-- 
allow-forms 
allow-scripts 
allow-same-origin 
...
 -->
<iframe sandbox="allow-script" src="주소"></iframe>
<iframe title="example" src="https://example.com" sandbox="allow-same-origin allow-scripts"></iframe>
```

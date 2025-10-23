# html iframe sandbox

> sandbox attribute를 추가하면 iframe은 sandbox 상태가 되어 외부 페이지의 리소스에 접근할 수 없다.
>
> 예를 들어 iframe에 https://example.com을 넣었을 때, https://example.com의 리소스를 불러오긴하지만 sandbox 속성이 설정되어 있어 불러온 리소스에 접근할 수 없기 때문에 렌더링이 안된다.
>
> > 일부를 허용하기 위해서 `sandbox` 속성내에 허용할 기능을 명시해야 한다.

```html
<!-- 
allow-forms 
allow-scripts 
allow-same-origin 
...
allow-same-origin allow-scripts 이 조합은 XSS 공격에 취약하다.
 -->
<iframe sandbox="allow-script" src="https://example.com"></iframe>
<iframe title="example" src="https://example.com" sandbox="allow-same-origin allow-scripts"></iframe>
```

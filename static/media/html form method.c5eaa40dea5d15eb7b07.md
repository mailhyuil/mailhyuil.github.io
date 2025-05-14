# html form method

> html form element는 GET, POST만 지원한다.

## html form element에서 PUT, PATCH, DELETE 사용하기

```html
<form action="/hi" method="POST">
  <input type="hidden" name="_method" value="PUT" />
</form>
```

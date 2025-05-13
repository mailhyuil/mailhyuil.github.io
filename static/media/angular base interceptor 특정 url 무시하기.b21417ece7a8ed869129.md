# angular http interceptor 특정 url 무시하기

```js
if (req.url.includes(process.env['OTHER_API_URL']!)) {
  return next.handle(req);
}
```

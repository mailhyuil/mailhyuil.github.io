# angular no browser cache

> index.html 에 meta로 설정하거나 httpClient에 header로 설정하여 브라우저 캐시를 막을 수 있다.

## index.html

```html
<meta http-equiv="cache-control" content="no-cache, must-revalidate, post-check=0, pre-check=0" />
<meta http-equiv="expires" content="0" />
<meta http-equiv="pragma" content="no-cache" />
```

## httpClient

```ts
headers = new Headers({
  "Cache-Control": "no-cache, no-store, must-revalidate, post-check=0, pre-check=0",
  Pragma: "no-cache",
  Expires: "0",
});
```

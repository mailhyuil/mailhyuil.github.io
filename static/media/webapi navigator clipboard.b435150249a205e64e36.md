# window navigator copy to clipboard

```js
copyToClipboard() {
  navigator.clipboard.writeText(window.location.href);
  alert('링크가 복사되었습니다.');
}
```

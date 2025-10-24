# html input filesize - bytesToHumansize

```js
function bytesToHumanSize(bytes: number | undefined) {
  if (bytes === undefined) return;

  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) {
    return "0 Byte";
  }

  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)) + "");

  if (i > 4) {
    return Math.round(bytes / Math.pow(1024, i));
  }

  return Math.round(bytes / Math.pow(1024, i)) + " " + sizes[i];
}
```

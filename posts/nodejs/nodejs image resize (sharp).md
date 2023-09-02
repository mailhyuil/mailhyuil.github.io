# sharp (이미지 리사이징)

> 모바일이나 데스크톱 등등의 사이즈에 맞춰서 리사이징

```js
const sharp = require("sharp");

// 이미지 파일을 읽어와 리사이징하는 예시
sharp("input.jpg")
  .resize(200, 200) // 200x200 크기로 리사이징
  .toFile("output.jpg", (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });
```

## url로 이미지 가져와서 리사이징

```js
const https = require("https");
const sharp = require("sharp");

https.get("https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg", (response) => {
  response.pipe(sharp().resize(200, 200)).toFile("output.jpg", (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(info);
    }
  });
});
```

# js encoding percent encoding - URI Encoding

```sh
# &?@=+를 제외
# 전체 URI를 인코딩할 때 사용 e.g. http://example.com?q=장기렌트카
encodeURI
decodeURI

# &?@=+를 포함
# URI의 일부를 인코딩할 때 사용 e.g. 장기렌트카
encodeURIComponent
decodeURIComponent
```

## usage

```js
const fullURI = "http://example.com?q=장기렌트카";
const encodeURIStr = encodeURI(fullURI);
console.log(encodeURIStr); // http://example.com?q=%EC%9E%A5%EA%B8%B0%EB%A0%A4%ED%8A%B8%EC%B9%B4
const decodeURIStr = decodeURI(encodeURIStr);
console.log(decodeURIStr); // http://example.com?q=장기렌트카

const partsURI = "장기렌트카";
const encodeURIComponentStr = encodeURIComponent(partsURI);
console.log(encodeURIComponentStr); // %EC%9E%A5%EA%B8%B0%EB%A0%A4%ED%8A%B8%EC%B9%B4
const decodeURIComponentStr = decodeURIComponent(encodeURIComponentStr);
console.log(decodeURIComponentStr); // 장기렌트카
```

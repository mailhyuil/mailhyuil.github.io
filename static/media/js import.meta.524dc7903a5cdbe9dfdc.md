# js import.meta

> import.meta 객체는 컨텍스트별 메타 데이터를 JS 모듈에 노출한다. 여기에는 모듈의 URL 과 같은 모듈에 대한 정보가 포함된다.

## url

```js
console.log(import.meta.url); // 현재 모듈의 URL
// 브라우저라면 http://localhost:8080/js/main.js
// 노드라면 file:///path/to/main.js
```

## resolve

```js
// Approach 1
const helperPath = import.meta.resolve("./lib/helper.js");
console.log(await import(helperPath));

// Approach 2
console.log(await import("./lib/helper.js"));
```

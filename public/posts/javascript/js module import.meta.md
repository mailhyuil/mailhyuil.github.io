# js import.meta

> 현재 모듈의 meta 데이터를 가지고 있는 import.meta 객체

## url

```js
// 브라우저
<script type="module">console.log(import.meta);</script>;

// 노드
console.log(import.meta);
```

## resolve

```js
// Approach 1
const helperPath = import.meta.resolve("./lib/helper.js");
console.log(await import(helperPath));

// Approach 2
console.log(await import("./lib/helper.js"));
```

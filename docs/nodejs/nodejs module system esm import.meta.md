# js import.meta

> 현재 모듈의 meta 데이터를 가지고 있는 import.meta 객체
>
> > \_\_dirname, \_\_filename과 같은 역할

## dirname & filename

> Node.js version 20.11.0 이상부터 사용 가능

```js
import.meta.dirname; // === __dirname;
import.meta.filename; // === __filename;

// import.meta.dirname 이 없을 경우 대체 방법
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

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

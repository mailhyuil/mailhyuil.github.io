# Cannot use import statement outside a module

```
<script> type="module" 태그 추가
```

# Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of...

```
모듈을 import할 때 확장자명, 경로 지정을 제대로 입력하지 않아서 발생하는 에러다.
리액트에서는 모듈 import 시 .js, ./를 생략해도 된다. 하지만 순수 자바스크립트에서 모듈 import할 때에는 리액트처럼 하면 에러가 발생한다.
```

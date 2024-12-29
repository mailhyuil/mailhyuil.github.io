# bundle webpack base require.context

> 검색할 디렉터리, 하위 디렉터리를 검색해야 하는지 여부를 나타내는 플래그, 일치하는 파일의 정규식을 전달
>
> > 웹팩이 모듈을 탐색할 때 특정 경로에 존재하는 파일을 탐색하기 위한 함수

```js
// directory: 검색 할 디렉터리
// useSubdirectories: 하위 디렉터리를 검색 해야 합니까?
// regExp: 파일과 일치하는 정규 표현식
require.context(directory, (useSubdirectories = true), (regExp = /^\.\/.*$/), (mode = "sync"));

const context = require.context("./test", false, /\.md$/);

context.keys(); // 모든 파일 이름 배열로 리턴
context.keys().map(context); //
context.resolve("./test.md"); // 파일 경로를 가져옵니다.
```

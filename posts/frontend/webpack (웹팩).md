# Webpack (웹팩)

## require.context
> 웹팩이 모듈을 탐색할 때 특정 경로에 존재하는 파일을 탐색하기 위한 함수
```js
require.context(directory, useSubdirectories = false, regExp = /^\.\//)
// directory: 검색 할 디렉터리
// useSubdirectories: 하위 디렉터리를 검색 해야 합니까?
// regExp: 파일과 일치하는 정규 표현식
```
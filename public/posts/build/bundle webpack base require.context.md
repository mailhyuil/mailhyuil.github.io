# bundle webpack base require.context

> 요청에 표현식이 포함된 경우 컨텍스트가 생성되므로, 컴파일 시간에 정확한 모듈을 알 수 없습니다.
>
> > 자신만의 컨텍스트를 만들 수 있습니다.
> >
> > > 검색할 디렉터리, 하위 디렉터리를 검색해야 하는지 여부를 나타내는 플래그, 일치하는 파일의 정규식을 전달할 수 있습니다.

```js
require.context(directory, (useSubdirectories = true), (regExp = /^\.\/.*$/), (mode = "sync"));

require.context("./test", false, /\.test\.js$/);
```

## require.context

> 웹팩이 모듈을 탐색할 때 특정 경로에 존재하는 파일을 탐색하기 위한 함수

```js
require.context(directory, (useSubdirectories = false), (regExp = /^\.\//));
// directory: 검색 할 디렉터리
// useSubdirectories: 하위 디렉터리를 검색 해야 합니까?
// regExp: 파일과 일치하는 정규 표현식
```

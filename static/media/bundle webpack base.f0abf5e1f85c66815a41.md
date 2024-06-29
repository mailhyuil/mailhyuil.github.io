# Webpack (웹팩)

## pack chain

```sh
1. 모든 assets를 module format으로 load (js, css, img, font, etc...)
2. dependency graph를 생성
3. unused code 제거
4. duplicated code 제거
5. 런타임 때 module들을 fetching (module federation에서 사용하는 원리)
```

## dependency graph

> entry 부터 시작하여 모든 의존성을 찾아내는 과정
>
> > graph에 관계되어 있지 않은 모듈 assets는 번들에 포함되지 않는다.

## Entry

> webpack이 내부의 디펜던시 그래프 를 생성하기 위해 사용해야 하는 모듈
>
> > 엔트리 포인트를 시작으로 (직간접적으로) 의존하는 다른 모듈을 찾아낸다
> >
> > > 기본값 './src/index.js'
> > >
> > > > webpack.config.js에서 설정가능

```js
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: "./src/index.js",
};
```

## Output

> 생성된 번들을 내보낼 위치와 이 파일의 이름을 지정하는 방법
>
> > 기본값 './dist/main.js'
> >
> > > webpack.config.js에서 설정 가능

```js
const path = require("path");

module.exports = {
  entry: "./path/to/my/entry/file.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },
};
```

## Mode

> mode 파라미터를 development, production 또는 none으로 설정하면 webpack에 내장된 환경별 최적화를 활성화
>
> > 기본값 production

```js
module.exports = {
  mode: "production",
};
```

## require.context

> 웹팩이 모듈을 탐색할 때 특정 경로에 존재하는 파일을 탐색하기 위한 함수

```js
require.context(directory, (useSubdirectories = false), (regExp = /^\.\//));
// directory: 검색 할 디렉터리
// useSubdirectories: 하위 디렉터리를 검색 해야 합니까?
// regExp: 파일과 일치하는 정규 표현식
```

# Webpack (웹팩)

## Entry

> webpack이 내부의 디펜던시 그래프 를 생성하기 위해 사용해야 하는 모듈
>
> > 엔트리 포인트를 시작으로 (직간접적으로) 의존하는 다른 모듈을 찾아낸다
> >
> > > 기본값 './src/index.js'
> > >
> > > > webpack.config.js에서 설정가능

```
module.exports = {
  entry: './path/to/my/entry/file.js',
};
```

## Output

> 생성된 번들을 내보낼 위치와 이 파일의 이름을 지정하는 방법
>
> > 기본값 './dist/main.js'
> >
> > > webpack.config.js에서 설정 가능

```
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};
```

## Loaders

> webpack은 기본적으로 JavaScript와 JSON 파일만 이해
>
> > 로더를 사용하면 webpack이 다른 유형의 파일을 처리할 수 있다 ex) .css .txt

```
module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};
```

## Plugins

> 플러그인을 활용하여 번들을 최적화하거나, 애셋을 관리하고, 또 환경 변수 주입등과 같은 광범위한 작업을 수행
>
> > 플러그인을 사용하려면 require ()를 통해 플러그인을 요청
> >
> > > plugins 배열에 추가

```
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 내장 plugin에 접근하는 데 사용

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
```

## Mode

> mode 파라미터를 development, production 또는 none으로 설정하면 webpack에 내장된 환경별 최적화를 활성화
> 기본값 production

```
module.exports = {
  mode: 'production',
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

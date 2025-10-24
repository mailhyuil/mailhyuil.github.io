# bundle webpack base mode

> development, production, none
>
> > development: 코드가 압축되지 않은 상태이며 난독화가 되지 않은 상태
> >
> > > production: 난독화, 압축, 크기가 줄어듬
> > >
> > > > none: development와 비슷한 상태
> > > >
> > > > > 때문에 webpack.common.js, webpack.dev.js, webpack.prod.js로 나누어서 사용한다.

## install

> webpack.common.js 를 merge하기 위하여

```sh
npm i -D webpack-merge
```

## usage

```js
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development', // 혹은 mode: 'none'
  // devServer을 사용할 경우
  devServer: ...
  // ...
});
```

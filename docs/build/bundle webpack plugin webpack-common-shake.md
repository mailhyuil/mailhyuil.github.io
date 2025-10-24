# bundle webpack plugin webpack-common-shake

> commonjs도 tree shaking을 해주는 플러그인
>
> > 완벽하게 되지는 않는다.

## webpack.config.js

```js
const ShakePlugin = require('webpack-common-shake').Plugin;

module.exports = {
  entry: 'entry.js'
  output: {
    path: 'dist',
    filename: 'output.js'
  },
  plugins: [ new ShakePlugin() ]
};
```

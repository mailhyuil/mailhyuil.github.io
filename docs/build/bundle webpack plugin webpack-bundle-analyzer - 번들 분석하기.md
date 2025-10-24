# bundle webpack plugin webpack-bundle-analyzer - 번들 분석하기

> stats.json 파일 생성
>
> > webpack.config.js에 stats: true 설정
> >
> > > webpack --json stats.json 명령어로 stats.json 파일 생성 (angular cli의 --stats-json과 동일)

## install

```sh
npm i -D webpack-bundle-analyzer

npm run build --stats-json

# 분석 결과를 웹사이트로 보여준다.
npx webpack-bundle-analyzer stats.json
```

## webpack.config.js 로 설정하기

> 이 방식은 stats.json 파일 필요없이 번들 후 바로 웹사이트로 분석 결과를 보여준다.

```js
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  plugins: [new BundleAnalyzerPlugin()],
};
```

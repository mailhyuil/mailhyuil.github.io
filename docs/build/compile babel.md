# compile babel

> js의 문법을 변환해주는 트랜스파일러

## install

```sh
npm i -D @babel/cli
npm i -D @babel/core # @babel/parser, @babel/generator, @babel/traverse, @babel/types ..를 포함
npm i -D @babel/preset-env # 최신의 Javascript를 당신의 타겟 환경을 자동으로 적용해준다. 거의 필수

# 사용
babel src -d dist
```

## .babelrc vs babel.config.json

> 두 설정파일 단독 또는 동시 사용 가능
>
> > .babelrc : 서브셋 디렉토리 또는 파일에서 특정한 플러그인이나, 변형 할 때 유용
> >
> > > babel.config.json : 여러 패키지 디렉토리를 가진 프로젝트에서 하나의 바벨 설정을 가져갈 때 유용
> > >
> > > > babel.config.json 대신 babel.config.js를 사용할 수도 있지만 json이 권장된다.

## .babelrc

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-typescript"],
  "plugins": ["babel-plugin-transform-typescript-metadata", ["@babel/plugin-proposal-decorators", { "legacy": true }]],
  "targets": {
    "chrome": "58",
    "ie": "11"
  },
  "sourceMaps": true
}
```

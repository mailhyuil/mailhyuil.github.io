# babel

> js의 문법을 변환해주는 트랜스파일러

## install

```sh
npm i -D @babel/core
npm i -D @babel/cli
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
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ]
}
```

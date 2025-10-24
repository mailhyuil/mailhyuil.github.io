# compile babel preset-env

> 최신의 Javascript를 당신의 타겟 환경을 자동으로 적용해준다.
>
> > micromanage 하지 않아도 된다 (micromanage : 소소한 것들 까지 챙기다)

## install

```sh
npm i -D @babel/preset-env
```

## .babelrc

```json
{
  "presets": ["@babel/preset-env"]
}
```

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": ["last 2 versions", "ie >= 11"]
        },
        "useBuiltIns": "usage",
        "corejs": 3, // @babel/polifill 방식에서 이 방식으로 변경됨
        "shippedProposals": true
      }
    ]
  ]
}
```

# webpack Asset Modules

> raw-loader, url-loader, file-loader 를 대체하는 새로운 모듈 유형

## 사용

```js
{
  test: /\.(png|jpe?g)$/,
  type: "asset"
}
```

## asset/resource

> 별도의 파일을 내보내고 URL을 추출
>
> > file-loader 와 같은 역할

## asset/inline

> asset의 data URI를 내보낸다.
>
> > url-loader 와 같은 역할

## asset/source

> asset의 소스 코드를 내보낸다
>
> > raw-loader 와 같은 역할

## asset

> data URI와 별도의 파일 내보내기 중에서 자동으로 선택
>
> > url-loader, file-loader 와 같은 역할

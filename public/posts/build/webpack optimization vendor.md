# webpack vendor

> 청크간에 겹치는 패키지들을 별도의 파일로 추출해주는 코드
>
> > "vendor" 코드는 프로젝트의 나머지 코드와 분리되어 관리되며, 주로 라이브러리 코드의 크기를 줄이거나 브라우저 캐싱을 최적화하기 위해 사용됩니다.

```js
{
  entry: {
    app: './client'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
}
```

# webpack url-loader & file-loader

> image, font 등을 번들링할 때 사용한다.
>
> > js나 css-loader로 로드된 파일이 image, font등을 참조하고 있다면 dist 폴더에 파일을 생성한다.

## file-loader

> 파일을 copy하여 build 폴더에 추가시킨다.

## url-loader

> 파일을 base64로 인코딩하여 인라인으로 추가시킨다.
>
> > 파일이 limit 옵션을 넘으면 file-loader로 작동한다.

## 사용

```js
module: {
  rules: [
    {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/dist/images/', // 이미지 파일이 저장될 경로
          },
        },
      ],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192, // 크기 임계값 (8KB)
            name: '[name].[ext]',
            publicPath: '/dist/fonts/', // 폰트 파일이 저장될 경로
          },
        },
      ],
    },
  ],
}
```

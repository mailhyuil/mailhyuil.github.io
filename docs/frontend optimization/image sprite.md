# image sprite

> 한 이미지 파일에 여러 이미지를 넣어서 사용하는 기술
>
> > http 1.1에서 여러 이미지를 요청하는 것보다 한번에 요청하는 것이 빠르다.
> >
> > > http2 부터는 이미지를 여러개 요청해도 빠르기 때문에 사용하지 않아도 된다.

## sprite-generator

[sprite-generator](https://www.toptal.com/developers/css/sprite-generator)

## css 속성

```css
.icon-download {
  width: 200px;
  height: 200px;
  background: url("css_sprites.png") -10px -10px;
}
.img-header {
  background-image: url("css_sprites.png");
  background-position: -10px -10px;
  background-size: 200px 200px;
}
```

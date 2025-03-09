# font-face

> url로 요청을 날려서 font를 font-family 이름으로 지정해줌
>
> > 문제는 이 폰트를 사용하는 페이지에 들어갔을 때 불러오기 때문에 font가 로드되지 않는 문제가 발생할 수 있다
> >
> > > local은 사용자 디바이스에 있는 폰트를 찾아서 사용 (빠름)
> > >
> > > url은 remote에서 폰트를 찾아서 사용 (느림)
> > >
> > > > 콤마(,)로 구분해서 여러 개의 폰트를 지정할 수 있다

```css
@font-face {
  font-family: "PretendardVariable";
  src: local("PretendardVariable"), url(/assets/fonts/PretendardVariable.woff2) format("woff2-variations");
}
```

## index.html (preload)

```html
<!-- preload font -->
<!-- font는 preload되지만 font-family 이름에 적용되지 않는 문제가 발생 -->
<link rel="preload" href="assets/fonts/PretendardVariable.woff2" as="font" crossorigin />

<!-- preload style -->
<!-- font는 preload를 하면서 font-family 이름에 적용 -->
<link rel="preload" href="assets/styles/pretendard.scss" as="style" crossorigin />

<!-- trick : index.html에서 임의로 pretendard를 사용해서 강제로 호출하는 방법도 있다. -->
<span class="invisible" style="font-family: PretendardVariable;"></span>
```

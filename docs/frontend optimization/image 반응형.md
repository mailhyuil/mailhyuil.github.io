# image 반응형

> 브라우저 동작 : 기기 너비 확인 -> sizes 목록에서 조건 확인 -> 해당 조건에서 이미지 크기 확인 -> 크기에 근접한 srcset의 이미지 요청

## width, height를 반드시 명시

> width, height 값을 명시해야 브라우저가 미리 공간을 만들어 둔다
>
> > 명시하지 않으면 이미지가 로드될 때 레이아웃 밀림이 발생한다. (CLS 점수 하락)
> >
> > > width, height 보다 srcset, sizes가 우선순위가 높다.
> > >
> > > > srcset, sizes를 사용하자

## srcset & sizes (w 기반)

> 이미지의 intrinsic width를 기준으로 src를 선택한다.
>
> w에 image의 실제 width를 넣어줘야한다.
>
> > w 기반의 경우 반드시 sizes와 함께 사용해야 한다.
> >
> > > 반응형 이미지에 사용

```html
<img
  srcset="
    small.jpg 500w,   # 500w의 이미지
    medium.jpg 1000w, # 1000w의 이미지
    large.jpg 2000w   # 2000w의 이미지
    "
  sizes="
    (max-width:600px) 400px, # 600px 이하일 때 400px (mobile)
    (max-width:1200px) 800px, # 1200px 이하일 때 800px (tablet)
    1400px, # 그 외의 경우 1400px (desktop)
    "
/>
```

## \<picture>

> 다양한 조건을 걸 수 있음
>
> > (e.g. 스크린이 가로방향인가 세로방향인가)
> >
> > > orientation, min-width, prefers-color-scheme, min-resolution ...
> > >
> > > > media="(orientation: portrait) and (min-width: 800px)" 처럼 같이 사용 가능

```html
<picture>
  <source srcset="vertical.jpg" media="(orientation: portrait)" />
  <source srcset="horizontal.jpg" media="(orientation: landscape)" />
  <img src="default.jpg" />
</picture>

<picture>
  <source srcset="large.jpg" media="(min-width: 800px)" />
  <source srcset="medium.jpg" media="(min-width: 500px)" />
  <img src="small.jpg" />
</picture>
```

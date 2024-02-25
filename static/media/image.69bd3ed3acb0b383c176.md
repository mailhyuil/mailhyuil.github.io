# image

> jpg보다는 webp, avif 확장자를 적용하자

## lazy loading

```html
<img loading="lazy" />
```

## srcset

> src를 width pixel을 기준으로 src 선택

```
<img
    srcset="
    small.jpg 500w,
    medium.jpg 1000w,
    large.jpg 2000w,
    "
    src="small.jpg"
/>
```

## sizes

> media query에 따라 이미지의 크기를 조절
>
> > srcset과 함께 사용하면 sizes 정보를 읽어서 적절한 이미지를 선택한다.

```
<img
    sizes="
    (max-width:600px) 400px,
    (max-width:1200px) 800px,
    1400px,
    "
/>
```

## <picture>

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

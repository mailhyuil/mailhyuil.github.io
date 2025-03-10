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

## srcset

> 브라우저에 제시할 이미지 목록과 크기 정의
>
> > src를 width pixel을 기준으로 src 선택

```html
<img srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 2000w" src="small.jpg" />
```

## sizes

> 화면 크기 조건 정의
>
> > media query에 따라 이미지의 크기를 조절
> >
> > > srcset과 함께 사용하면 sizes 정보를 읽어서 적절한 이미지를 선택한다.

```html
<img
  sizes="
    (max-width:600px) 400px,
    (max-width:1200px) 800px,
    1400px,
    " />
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

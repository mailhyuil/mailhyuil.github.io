## image srcset & sizes

> 반응형 이미지에는 w기반, 고정 크기의 이미지에는 DPR 기반을 사용

## srcset & sizes (w 기반)

> 이미지의 intrinsic width를 기준으로 src를 선택한다.
>
> w에 image의 실제 width를 넣어줘야한다.
>
> > w 기반의 경우 반드시 sizes와 함께 사용해야 한다.
> >
> > sizes가 없을 시 기본으로 sizes는 100vw로 설정된다. (전체 viewport width를 기준으로 함)
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

## srcset (DPR 기반)

> dpr을 기반으로 src를 선택
>
> > 고정 크기의 이미지에 사용

```html
<img
  srcset="
    small.jpg 1x, # 1배율
    medium.jpg 2x, # 2배율
    large.jpg 3x # 3배율
    "
/>
```

# bootstrap

## container

```html
<div class="container">
  <div class="row">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
```

## grid

> container 안에 row 클래스
>
> > row 클래스 안에 col-크기-숫자

```
 .col-xs-*

 항상 가로로 배치

 .col-sm-*

 768px 이하에서 세로로 표시 시작

 .col-md-*

 992px 이하에서 세로로 표시 시작

 .col-lg-*

 1200px 이하에서 세로로 표시 시작
```

## utililty scss로 설정

```scss
$theme-colors: (
  "primary": red,
);

$utilities: (
  "width": (
    property: width,
    class: w,
    values: (
      0: 5px,
      1: 10px,
      2: 20px,
      3: 30px,
      4: 40px,
    ),
  ),
  "height": (
    property: height,
    class: h,
    values: (
      0: 5px,
      1: 10px,
      2: 20px,
      3: 30px,
      4: 40px,
    ),
  ),
);

$spacer: 1rem;
$spacers: (
  0: 0,
  1: $spacer * 0.25,
  2: $spacer * 0.5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3,
);

@import "~bootstrap/scss/bootstrap";
```

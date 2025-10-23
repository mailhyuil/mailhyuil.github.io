# svg gooey effect

> blur 효과와 contrast 효과를 이용하면 gooey 이펙트를 낼 수 있다.
>
> > 그러나 배경이 필요하다
> >
> > > svg filter를 이용하면 배경이 필요 없이도 가능

```
<div class="relative h-screen">
    <!-- blobs blur-[10px] contrast-[30] bg-white 적용 -->
    <div class="blobs blur-[10px] contrast-[30] bg-white">
    <div class="bg-black w-32 h-32 rounded-full"></div>
    <div
        ref="mover"
        class="absolute bg-black w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
    </div>
</div>
```

1. gooey effect를 적용할 요소들 정하기
2. 요소들을 컨테이너로 감싸기
3. gooey effect svg filter 생성
4. 컨테이너에 필터 적용

## gooey effect filter

> id 지정

```
<!-- svg filter -->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
    <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix
        in="blur"
        mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -10"
        result="goo" />
        <feBlend in="SourceGraphic" in2="goo" />
    </filter>
    </defs>
</svg>
```

## gooey effect container

```
<div class="relative h-screen">
    <!-- blobs container에 svg filter 적용 -->
    <div class="blobs">
    <div class="bg-black w-32 h-32 rounded-full"></div>
    <div
        ref="mover"
        class="absolute bg-black w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
    </div>
</div>
```

## gooey effect 적용

```
.blobs {
  filter: url("#goo");
}
```

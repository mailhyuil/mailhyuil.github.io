# svg clipping

> \<clipPath>

## html

```html
<div class="clip relative w-[35rem] h-96 bg-white">
  <div ref="circle1" class="absolute left-36 w-40 h-40 bg-blue-500 rounded-full"></div>
  <div ref="circle2" class="absolute left-96 w-40 h-40 bg-blue-500 rounded-full"></div>
</div>
```

## svg

```
<svg class="absolute" fill="none" xmlns="http://www.w3.org/2000/svg">
  <clipPath id="svgPath">
    <!-- path -->
  </clipPath>
</svg>
```

## css

```
.clip {
  clip-path: url(#svgPath);
}
```

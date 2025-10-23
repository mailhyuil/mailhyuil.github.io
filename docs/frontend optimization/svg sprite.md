# svg sprite

> spritebot을 이용하여 svg sprite 생성
>
> https://github.com/thomasjbradley/spritebot

## symbol

> symbol의 id를 이용하여 sprite

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="icon-network" viewBox="0 0 64 64">...</symbol>
  <symbol id="icon-onlinecart" viewBox="0 0 64 64">...</symbol>
  <symbol id="icon-presentation3" viewBox="0 0 64 64">...</symbol>
  <symbol id="icon-pricetag" viewBox="0 0 64 64">...</symbol>
  <symbol id="icon-safe" viewBox="0 0 64 64">...</symbol>
</svg>
```

## usage

```html
<svg><use xlink:href="#icon-pricetag" /></svg>
```

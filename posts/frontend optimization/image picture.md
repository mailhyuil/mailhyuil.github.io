## image picture

> 다양한 조건을 통해 이미지를 브라우저가 선택할 수 있도록 도와주는 태그

```html
<picture>
  <source srcset="vertical.jpg" media="(orientation: portrait)" />
  <source srcset="horizontal.jpg" media="(orientation: landscape)" />
  <img src="default.jpg" />
</picture>
```

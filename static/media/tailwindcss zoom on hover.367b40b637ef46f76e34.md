# tailwindcss zoom on hover

```html
<div class="w-64 h-64 overflow-hidden">
  <img class="object-cover w-full h-full transition-transform transform scale-120 hover:scale-100" src="이미지 URL" alt="이미지 설명" />
</div>
```

## global css

```css
@layer components {
  .bg-zoom {
    @apply transition-transform transform scale-120 hover:scale-100;
  }
}
```

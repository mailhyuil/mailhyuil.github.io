# scroll snap

## tailwindcss scroll snap

```html
<!-- snap-proximity or snap-mandatory -->
<div class="snap-y snap-mandatory h-screen overflow-y-scroll">
  <div class="snap-start bg-amber-500 h-screen"></div>
  <div class="snap-start bg-teal-500 h-screen"></div>
  <div class="snap-start bg-cyan-500 h-screen"></div>
</div>
```

## scroll-snap-type

## scroll-snap-align

## scroll-padding

## scroll-margin

## usage

```css
#container {
  width: 100%;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory; /* scroll-snap-type */
}
.item {
  scroll-snap-align: center; /* scroll-snap-align */
  display: inline-block;
  width: 100%;
  height: 150vh;
  display: flex;
  justify-content: center;
  font-size: 38px;
  align-items: center;
}
```

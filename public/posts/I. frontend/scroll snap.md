# scroll snap

## scroll-snap-type

## scroll-snap-align

## scroll-padding

## scroll-margin

## 사용법

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

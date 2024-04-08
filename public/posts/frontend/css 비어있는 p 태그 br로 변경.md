# css 비어있는 p 태그 br로 변경

## style.scss

```css
p:empty::after {
  content: "\00A0";
}
```

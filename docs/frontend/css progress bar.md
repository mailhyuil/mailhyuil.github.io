# css progress bar

```html
<div class="bar"></div>
<style>
  @keyframes grow {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
  .bar {
    animation: grow auto linear;
    animation-timeline: scroll(root block);
  }
</style>
```

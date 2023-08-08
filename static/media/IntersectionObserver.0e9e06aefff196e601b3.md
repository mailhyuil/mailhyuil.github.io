# Intersection Observer

## 사용

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    } else {
      entry.target.style.opacity = 0;
    }
  });
});

const boxes = document.querySelectorAll("div");

observer.observe(boxes[0]);
observer.observe(boxes[1]);
observer.observe(boxes[2]);
observer.observe(boxes[3]);
```

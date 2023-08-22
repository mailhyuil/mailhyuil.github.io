# Intersection Observer

> viewport에 타겟이 보이는지 여부를 관찰하는 API
>
> > flutter의 VisibilityDetector와 비슷한 기능

## 사용

```js
const observer = new IntersectionObserver(
  (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      observer.unobserve(entry.target); // 관찰을 멈춤
      observer.observe(newTarget); // 새로운 타겟을 관찰
    });
  },
  { root: null, rootMargin: "0px", threshold: 0.9 } // ios에서 작동하도록
);

const firstTarget = document.querySelector("#last-box");

observer.observe(firstTarget);
```

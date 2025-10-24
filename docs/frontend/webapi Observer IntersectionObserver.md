# webapi Observer IntersectionObserver

> root 로 정의된 Element 기준으로 Target Element 의 노출, 비노출 여부를 결정한다.
>
> > rootMargin 이 있으면, threshold 계산할 때, rootMargin 영역 만큼 더 계산한다.
> >
> > > threshold 를 number 나 `Array<number>` 로 정의할 수 있다. 정의하지 않는다면 기본값은 0 이다.

## terms

```txt
isIntersecting : 노출 여부
intersectionRatio : 노출된 비율
intersectionRect : 노출된 영역
time : 노출되거나 비노출된 시간
```

## usage

```ts
const observer = new IntersectionObserver(
  (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      observer.unobserve(entry.target); // 관찰을 멈춤
      const newTarget = document.querySelector("#next-box");
      observer.observe(newTarget); // 새로운 타겟을 관찰
    });
  },
  { root: null, rootMargin: "0px", threshold: 0.9 }, // ios에서 작동하도록
);
const firstTarget = document.querySelector("#last-box");
observer.observe(firstTarget);
```

```ts
if (entry.isIntersecting) {
  observer.unobserve(entry.target);
  console.log("화면에서 노출됨");
} else {
  console.log("화면에서 제외됨");
}
```

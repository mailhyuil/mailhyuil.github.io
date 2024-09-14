# gsap snap & mapRange & interpolate

## snap

> 1..100 의 수열을 5, 10, 15 .. 100 같이 snap하는 것

```js
gsap.utils.snap(snapIncrement, valueToSnap);
```

## mapRange

> 최소값 최대값의 범위를 재조정

```js
gsap.utils.mapRange(inMin, inMax, outMin, outMax, valueToMap);
```

## interpolate

> 보간법
>
> > 중간 값을 연산

```js
gsap.utils.interpolate(startValue, endValue, progress);
```

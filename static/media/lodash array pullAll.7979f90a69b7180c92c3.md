# lodash array pullAll

> difference와 같지만 원본을 mutate한다.
>
> > difference 사용을 권장한다.
> >
> > > 배열에서 특정 값을 제거한다.

```js
const arr = ["a", "b", "c", "a", "b", "c"];

pullAll(arr, ["a", "c"]);
console.log(arr);
// ['b', 'b']
```

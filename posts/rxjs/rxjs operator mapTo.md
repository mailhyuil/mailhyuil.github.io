# rxjs mapTo

> mapTo 연산자는 옵저버블이 값을 방출할 때마다 지정된 값을 방출합니다.

```js
const example = merge(first.pipe(mapTo("FIRST!")), second.pipe(mapTo("SECOND!")), third.pipe(mapTo("THIRD")), fourth.pipe(mapTo("FOURTH")));
//output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
const subscribe = example.subscribe((val) => console.log(val));
```

# lodash object cloneDeep

> 깊은 복사를 수행한다.
>
> > js에 structuredClone라는 같은 기능의 함수가 추가되었다.

```js
const objects = [{ a: 1 }, { b: 2 }];

const deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false

// js
const myDeepCopy = structuredClone(myOriginal);
```

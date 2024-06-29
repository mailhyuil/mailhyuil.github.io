# js closure

> 함수가 실행되는 '순간' 클로저가 생성된다
>
> > 클로저 객체 생성 후 사용
> >
> > > 무분별한 클로저는 메모리 누수를 일으킬 수 있다.

```js
const closure = () => {
  let count = 0;
  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count,
  };
};

const createdClosure = closure();

console.log(createdClosure.getCount());
createdClosure.increment();
createdClosure.increment();
createdClosure.increment();
console.log(createdClosure.getCount());
```

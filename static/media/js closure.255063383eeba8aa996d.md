# js closure

> 함수가 실행되는 '순간' 클로저가 생성된다
>
> > 클로저 객체 생성 후 사용

```
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

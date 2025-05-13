# js closure

> 자신이 선언됐을 때의 환경(렉시컬 스코프)인 스코프를 기억하여 자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수를 말한다.
>
> > 클로저 객체 생성 후 사용
> >
> > > 무분별한 클로저는 메모리 누수를 일으킬 수 있다.
> > >
> > > > 클로저를 사용하면 내부함수가 외부함수의 변수를 참조하고 있기 때문에 외부함수의 실행이 끝나더라도 가비지 콜렉터에 의해 메모리가 해제되지 않는다.
> > > >
> > > > 클로저를 할당한 변수에 null을 할당해줌으로써 메모리를 해제시킬 수 있다.

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

// 메모리 해제
closure = null;
```

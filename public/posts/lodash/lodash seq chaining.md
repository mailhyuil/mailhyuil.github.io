# lodash seq chaining

> 함수를 체이닝하여 사용하는 방식
>
> > 함수를 지연평가 한다.
> >
> > > chain 방식보다는 flow를 사용하는 것이 좋다.
> > >
> > > 하지만 지연평가를 사용하고 싶다면 chain을 사용하자.

```js
import _, { chain } from "lodash";

const lodashObj = _(arr); // lodash wrapper로 객체를 생성
// const lodashObj = chain(arr); // 또는 chain() 함수 사용

lodashObj.function1().function2().function3().value(); // .value()로 값을 리턴
```

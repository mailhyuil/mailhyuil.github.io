# bundle base code splitting

> 코드를 하나의 번들코드로 만들지 않고 작은 코드로 분할 하는 것
>
> > 필요시에만 필요한 코드를 불러와서 사용할 수 있기 때문에 초기 로딩 속도를 줄일 수 있다.
> >
> > > esModule의 import() 구문을 사용해야 한다!

```ts
import("./module").then((module) => {
  module.default();
});
```

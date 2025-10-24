# bundle base tree shaking

> 사용하지 않는 코드를 제거하는 방식
>
> > esModule의 import를 반드시 사용해야한다
> >
> > commonjs의 require은 module.exports 하는 모든 모듈을 가져오게 된다.
> >
> > > 모듈이 import되는 코드와 export 하는 코드 모두 ES Module로 작성되어 있어야만 tree shaking이 가능합니다. (e.g. lodash)
> > >
> > > > babel에 의해서 CommonJS로 트랜스파일링되는 경우에도 불가능합니다.

```js
// 모든 배열 유틸리티들을 가져온다.
import arrayUtils from "array-utils";
```

```js
// 유틸의 일부만 가져온다.
import { unique, implode, explode } from "array-utils";
```

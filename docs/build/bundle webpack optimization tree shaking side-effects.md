# bundle webpack optimization tree shaking side-effects

```js
import "some-module";
require("some-module");
```

> 위 처럼 선언된 import 문은 sideEffects가 있다고 볼 수 있다. (스코프 전체에 영향을 주는 import 문)
>
> > Tree Shaking을 수행하면 사용하지 않는 코드가 탈락된다.
> >
> > > 이로 인해 사이드 이펙트가 발생할 수 있는데,
> > >
> > > > 코드를 직접 평가하고 실행해보지 않는 이상 Webpack이 사이드 이펙트 발생 여부를 알 수는 없다. 그래서 Webpack이 찾은 대안이 sideEffects다.
> > > >
> > > > > (e.g. polyfill)

## package.json에서 설정하기

> 개발자의 판단으로 코드가 sideEffects가 없다고 판단되면 package.json에 설정해주면 된다.
>
> > 모든 파일을 tree shaking 적용 해줘! 라는 의미이다.

```json
"sideEffects": false
// "sideEffects": ["dist/polyfill.js", "dist/calculator.js"]
// "sideEffects": ["*.css", "*.scss"]
```

## webpack의 production 모드에서는 기본적인 최적화를 진행한다.

> 사용하지 않는 코드 제거
>
> > 난독화 및 디버거 구문 제거

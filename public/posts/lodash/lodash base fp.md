# lodash base fp

> lodash/fp 모듈은 lodash를 함수형 프로그래밍 스타일로 사용할 수 있게 해준다.
>
> > 기존 lodash 함수들을 wrapping 하여 구현하였다.

## lodash/fp 모듈의 특징

```sh
immutable # 모든 함수가 불변성을 지향한다.
auto-curried # 모든 함수가 자동으로 커리되어 있다.
iteratee-first # iteratee를 첫번째 인자로 받는다.
data-last # 데이터를 마지막 인자로 받는다.
```

## usage

> lodash-es는 아직 지원하지 않기 때문에 cherry-pick하여 사용한다.

```js
import pipe from "lodash/fp/pipe.js";

const fn = pipe(
  (x) => x + 1,
  (x) => x * 2,
  (x) => x - 3
);

console.log(fn(1)); // 3
```

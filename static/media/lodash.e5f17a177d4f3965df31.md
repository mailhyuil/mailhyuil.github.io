# lodash

> utility belts

## install

```
npm i --save lodash
```

## 사용법

### 브라우저

```
<script src="lodash"></script>
```

### nodejs

```js
import _ from "lodash";
```

## operators

### chaining (seq)

```
_(array).operator().operator()...value();
```

### chunk(array, [size=1])

> 배열을 원하는 숫자대로 묶는다.

### compact(array)

> falsey한 값들을 삭제한다.

### concat(array, [values])

> 두번째 인자 배열을 합쳐서 새로운 배열을 만든다.

### difference(array, [values])

> 두번째 인자 배열에 있는 값을 뺀다.

### differenceBy(array, [values], [iteratee=_.identity])

> 두번째 인자 배열에 세번째 함수를 실행한 값으로 뺀다.

### forEach()

### uniq()

### sortedUniq()

### find()

### assign()

### includes()

### keyBy()

### intersection()

### times()

### debounce()

### get() and set()

### deburr()

### reduce()

### cloneDeep()

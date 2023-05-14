# tree shaking

> 트리 쉐이킹은 사용하지 않는 코드를 제거하는 방식

```
// 모든 배열 유틸리티들을 가져온다.
import arrayUtils from "array-utils";
```

```
// 유틸의 일부만 가져온다.
import { unique, implode, explode } from "array-utils";
```

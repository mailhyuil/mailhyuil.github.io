# typescript tsconfig compilerOptions esModuleInterop

> false 시 TypeScript는 CommonJS, AMD, UMD 모듈도 ES6 모듈과 유사하게 처리한다.
>
> true 시 commonjs 문법과 es6 문법을 같이 사용할 수 있다.
>
> 여기서 문제가 발생 할 수 있다.
>
> > true 시 helper function을 사용하여 문제를 처리한다.

```ts
esModuleInterop: true;
```

## 예시

```ts
// origin
import * as moment from "moment"
// esModuleInterop: false
const moment = require("moment")
// esModuleInterop: true
const moment = __importStar(require("moment"))

// origin
import momentfrom "moment"
// esModuleInterop: false
const moment = require("moment").default
// esModuleInterop: true
const moment = __importDefault(require("moment")).default
```

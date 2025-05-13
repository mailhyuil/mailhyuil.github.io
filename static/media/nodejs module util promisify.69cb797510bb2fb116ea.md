# util promisify

> 콜백패턴 기반의 내장 모듈 함수를 프로미스 기반으로 변경해주는 함수
>
> > dns, fs, stream, timers, readline, inspector 등의 몇몇 모듈은 /promises 라는 이름으로 프로미스 기반의 함수를 제공한다.

```js
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);
```

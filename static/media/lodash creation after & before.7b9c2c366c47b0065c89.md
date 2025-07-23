# lodash creation after & before

## after

> 반환된 함수를 n번 호출부터 함수를 실행한다.

```js
import { after, before } from "lodash-es";

const n = 3;
const fn = after(n, () => console.log("after"));

fn(); // not executed
fn(); // not executed
fn(); // after
fn(); // after
```

## before

> 반환된 함수는 n번 전까지만 함수를 실행한다.

```js
import { after, before } from "lodash-es";

const n = 3;
const fn = before(n, () => console.log("before"));

fn(); // before
fn(); // before
fn(); // not executed
fn(); // not executed
fn(); // not executed
```

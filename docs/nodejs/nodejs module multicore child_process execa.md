# nodejs module multicore child_process execa

> child_process로 구현된 라이브러리
>
> > shell command를 실행하는데 편리한 기능을 제공

## install

```sh
npm i execa
```

## usage

```js
import { execa } from "execa";

const { stdout } = await execa`npm run build`;
// Print command's output
console.log(stdout);
```

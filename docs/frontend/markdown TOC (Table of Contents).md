# markdown TOC (Table of Contents)

## install

```sh
npm i remark-toc
```

## usage

```ts
import { remark } from "remark";
import remarkToc from "remark-toc";

const result = await remark().use(remarkToc).process("# Hello World");
console.log(result.toString());
```

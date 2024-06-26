# typescript tsconfig compilerOptions moduleResolution

> module을 어떻게 resolve (해석, path 탐색, 참조)할지 지정한다.
>
> import/require 가 무엇을 참조하는지 알아내기 위해 사용하는 프로세스
>
> > node로 되어있으면 node.js의 모듈 해석 방식을 따르고 classic으로 되어있으면 전통적인 모듈 해석 방식을 따른다.

## 상대 경로 vs 비상대 경로

> 상대경로와 비상대경로는 resolve 방식이 다르다.
>
> > moduleResolution은 정의된 파일을 찾기 위해 어디를 탐색할지 결정한다.

```ts
/* 상대적 경로의 모듈 */
// 현재 파일의 위치를 기준으로 상대적 경로를 사용하여 모듈을 참조한다.
import { MyModule } from "/my-module";
import { MyModule } from "./my-module";
import { MyModule } from "../my-module";

/* 비상대적 경로의 모듈 */
// baseUrl, paths, ambient module declarations를 사용하여 해석한다.
import { MyModule } from "my-module";
```

## classic

```ts
/* 상대적 경로일 시 */
import { MyModule } from "./my-module";
/*  밑의 위치를 탐색
 *  /root/src/folder/my-module.ts
 *  /root/src/folder/my-module.d.ts
 */

/* 비상대적 경로일 시 */
import { MyModule } from "my-module";
/*  밑의 위치를 탐색
 *  /root/src/folder/my-module.ts
 *  /root/src/folder/my-module.d.ts
 *  /root/src/my-module.ts
 *  /root/src/my-module.d.ts
 *  /root/my-module.ts
 *  /root/my-module.d.ts
 *  /my-module.ts
 *  /my-module.d.ts
 */
```

## node

> nodejs의 모듈 해석 방식을 따른다. (types 프로퍼티를 main으로 바꿔주면 nodejs 방식)

```ts
/* 상대적 경로일 시 */
import { MyModule } from "./my-module";
/*
 *  /root/src/folder/my-module.ts
 *  /root/src/folder/my-module.tsx
 *  /root/src/folder/my-module.d.ts
 *  /root/src/folder/my-module/package.json ("types" 프로퍼티를 지정했다면)
 *  /root/src/folder/my-module/index.ts
 *  /root/src/folder/my-module/index.tsx
 *  /root/src/folder/my-module/index.d.ts
 */

/* 비상대적 경로일 시 */
import { MyModule } from "my-module";
/*  밑의 위치를 탐색
 *  /root/src/node_modules/my-module.ts
 *  /root/src/node_modules/my-module.tsx
 *  /root/src/node_modules/my-module.d.ts
 *  /root/src/node_modules/my-module/package.json ("types" 프로퍼티를 지정했다면)
 *  /root/src/node_modules/@types/my-module.d.ts
 *  /root/src/node_modules/my-module/index.ts
 *  /root/src/node_modules/my-module/index.tsx
 *  /root/src/node_modules/my-module/index.d.ts
 *  /root/node_modules/my-module.ts
 *  /root/node_modules/my-module.tsx
 *  /root/node_modules/my-module.d.ts
 *  /root/node_modules/my-module/package.json ("types" 프로퍼티를 지정했다면)
 *  /root/node_modules/@types/my-module.d.ts
 *  /root/node_modules/my-module/index.ts
 *  /root/node_modules/my-module/index.tsx
 *  /root/node_modules/my-module/index.d.ts
 *  /node_modules/my-module.ts
 *  /node_modules/my-module.tsx
 *  /node_modules/my-module.d.ts
 *  /node_modules/my-module/package.json ("types" 프로퍼티를 지정했다면)
 *  /node_modules/@types/my-module.d.ts
 *  /node_modules/my-module/index.ts
 *  /node_modules/my-module/index.tsx
 *  /node_modules/my-module/index.d.ts
 */
```

## nodenext

> import문은 node 방식, require문은 classic 방식으로 해석한다.
>
> > Node.js v12 이후부터 지원하는 방식이다.

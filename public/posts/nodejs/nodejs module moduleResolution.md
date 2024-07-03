# nodejs module moduleResolution

> module을 어떻게 resolve (해석, path 탐색, 참조)할지 지정한다.
>
> import/require 가 무엇을 참조하는지 알아내기 위해 사용하는 프로세스
>
> > node로 되어있으면 node.js의 모듈 해석 방식을 따르고 classic으로 되어있으면 전통적인 모듈 해석 방식을 따른다.

## 상대 경로 vs 비상대 경로

> 상대경로와 비상대경로는 resolve 방식이 다르다.
>
> > moduleResolution은 정의된 파일을 찾기 위해 어디를 탐색할지 결정한다.
> >
> > > 비상대 경로일 때 어떻게 찾는지를 기억하는게 중요

```js
/* 상대적 경로의 모듈 */
// 현재 파일의 위치를 기준으로 상대적 경로를 사용하여 모듈을 참조한다.
// 직접 만든 모듈 중에 런타임 시 상대적 위치가 유지되는 것이 보장되는 모듈을 import 하고 싶다면 상대적 import를 사용하면 된다.
import { MyModule } from "/my-module";
import { MyModule } from "./my-module";
import { MyModule } from "../my-module";

/* 비상대적 경로의 모듈 */
// baseUrl, paths, ambient module declarations를 사용하여 해석한다.
// 외부 의존성 모듈을 import 하고 싶다면 이러한 비-상대적 import를 사용하자.
import { MyModule } from "my-module";
```

## node

> nodejs의 모듈 해석 방식을 따른다. (types 프로퍼티를 main으로 바꿔주면 nodejs 방식)

```js
/* 상대적 경로일 시 */
// 특정된 위치 한곳만 탐색한다.
import { MyModule } from "./my-module";
/*
 *  /root/src/folder/my-module.js
 *  /root/src/folder/my-module.jsx
 *  /root/src/folder/my-module/package.json
 *  /root/src/folder/my-module/index.js
 *  /root/src/folder/my-module/index.jsx
 */

/* 비상대적 경로일 시 */
// 밑의 위치를 탐색
import { MyModule } from "my-module";
/*
 *  /root/src/node_modules/my-module.js
 *  /root/src/node_modules/my-module.jsx
 *  /root/src/node_modules/my-module/package.json
 *  /root/node_modules/my-module.js
 *  /root/node_modules/my-module.jsx
 *  /root/node_modules/my-module/package.json
 *  /node_modules/my-module.js
 *  /node_modules/my-module.jsx
 *  /node_modules/my-module/package.json
 */
```

## nodenext

> import문은 node 방식, require문은 classic 방식으로 해석한다.
>
> > Node.js v12 이후부터 지원하는 방식이다.

## classic (사용되지 않음)

> node_modules 폴더를 탐색하지 않는다.

```js
/* 상대적 경로일 시 */
// 특정된 위치 한곳만 탐색한다.
import { MyModule } from "./my-module";
/*
 *  /root/src/folder/my-module.js
 */

/* 비상대적 경로일 시 */
// root부터 모든 위치를 탐색한다.
import { MyModule } from "my-module";
/*
 *  /root/src/folder/my-module.js
 *  /root/src/my-module.js
 *  /root/my-module.js
 *  /my-module.js
 */
```

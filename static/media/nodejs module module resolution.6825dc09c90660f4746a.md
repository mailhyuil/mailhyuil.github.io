# nodejs module resolution

> module을 어떻게 resolve (해석, path 탐색, 참조)할지 지정한다.
>
> import/require 가 무엇을 참조하는지 알아내기 위해 사용하는 프로세스
>
> > node로 되어있으면 node.js의 모듈 해석 방식을 따르고 classic으로 되어있으면 전통적인 모듈 해석 방식을 따른다.
> >
> > > esm은 반드시 확장자를 붙여야한다. (e.g. ./components/button/button.js)

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

> 경로가 주어졌을 때는 Relative 알고리즘 수행
>
> > 이름만 주어졌을 때는 Alias -> Self-Import -> Node 순으로 알고리즘을 수행
> >
> > > 전부 실패 시 ERR_MODULE_NOT_FOUND 발생

### Relative Modules

> "/", "./", "../" 로 시작할 시 발동

```txt
import { bar } from './foo'

1. if foo exists, execute by file extension. in this case, Node.js will throw an ERR_UNKNOWN_FILE_EXTENSION because foo doesn't have any file extension.
// 주어진 위치에 foo가 존재하면 file extension에 의해 실행된다, 하지만 이경우에는 extenstion이 없기 때무에 ERR_UNKNOWN_FILE_EXTENSION가 발생한다.
2. if foo.js exists, executes as a javascript module
// 주어진 위치에 foo.js가 존재하면 js module로 실행된다.
3. if foo.json exists, parses json, and returns JS object
// 주어진 위치에 foo.json이 존재하면 js object를 반환한다.
4. if foo.node exists, runs as a binary add-on.
// 주어진 위치에 foo.node가 존재하면 binary add-on을 실행한다.
5. if foo/package.json Node.JS will search for the main field. If present, Node.js will run steps 1–4 and 6–8 for the given path in main
// 주어진 위치에 foo 디렉토리가 존재하고 내부에 package.json이 있다면 main field가 있다면 main 위치에서 1-4번을 다시 수행하고 main 위치에서 6-8번을 실행한다.
6. if foo/index.js exists, executes as a javascript module
7. if foo/index.json exists, parse json, and rerun object
8. if foo/index.node exists, runs as a binary add-on.
```

### Alias Modules

> typescript의 paths, webpack의 alias와 같은 기능
>
> > 반드시 alias에 #을 붙여야한다.

```json
{
  "name": "my-site",
  "imports": {
    "#foo": "./src/bar.js"
  }
}

// import { bar } from '#foo'
```

### Self Import Modules

> ./foo를 사용하면 my-site/foo로 해당 파일에 접근 가능
>
> > types, import, require, default는 특별한 필드 네임
> >
> > ./require를 사용하면 require("my-site")
> >
> > ./import를 사용하면 import \* from "my-site"로 접근 가능
> >
> > > main, module 필드와 같은 역할을 한다.

```json
{
  "name": "my-site",
  "exports": {
    ".": {
      "foo": "./src/bar.js", // import { bar } from 'my-site/foo'
      "import": "./dist/index.mjs", // import * as mySite from 'my-site' // module 필드와 같은 역할
      "require": "./dist/index.cjs", // const mySite = require('my-site') // main 필드와 같은 역할
      "default": "./dist/index.js",
      "types": "./dist/index.d.ts" // import { MySiteType } from 'my-site'
    }
  }
}
```

### Node Modules

> 현재 디렉토리 위치에서 부터 node_modules 폴더 내부를 확인

```txt
import { bar } from 'foo'

/home/node/workspace/node_modules/foo
/home/node/workspace/node_modules/foo.js
/home/node/workspace/node_modules/foo.json
/home/node/workspace/node_modules/foo.node
/home/node/workspace/node_modules/foo/package.json # main 필드 확인
/home/node/workspace/node_modules/<main>/index
/home/node/workspace/node_modules/<main>/index.js
/home/node/workspace/node_modules/<main>/index.json
/home/node/workspace/node_modules/<main>/index.node
/home/node/workspace/node_modules/<main>/index.js # main 위치에서

# 반복
/home/node/node_modules
/home/node_modules
/node_modules
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

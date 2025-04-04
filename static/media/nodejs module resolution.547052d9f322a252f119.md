# nodejs module resolution

```ts
/* 상대적 경로일 시 */
import { MyModule } from "./my-module";
/*
 *  /root/src/folder/my-module.js
 *  /root/src/folder/my-module/package.json ("main" 프로퍼티를 지정했다면)
 *  /root/src/folder/my-module/index.js
 */

/* 비상대적 경로일 시 */
import { MyModule } from "my-module";
/*  밑의 위치를 탐색
 *  /root/src/node_modules/my-module.js
 *  /root/src/node_modules/my-module/package.json ("main" 프로퍼티를 지정했다면)
 *  /root/src/node_modules/my-module/index.js
 *  /root/node_modules/my-module.js
 *  /root/node_modules/my-module/package.json ("main" 프로퍼티를 지정했다면)
 *  /root/node_modules/my-module/index.js
 *  /node_modules/my-module.js
 *  /node_modules/my-module/package.json ("main" 프로퍼티를 지정했다면)
 *  /node_modules/my-module/index.js
 */
```

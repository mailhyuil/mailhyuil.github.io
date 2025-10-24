# nodejs logger debug

> debug용도의 로거
>
> > 어떤 namespace에 대한 로그를 출력할지 설정할 수 있다.
> >
> > > debug 패키지는 DEBUG 환경변수에 따라 로그를 출력한다.
> > >
> > > > DEBUG 환경변수에는 출력할 namespace를 설정한다.

## install

```sh
npm i -D debug

DEBUG=express:* node app.js
DEBUG=http:server node app.js
DEBUG=express:router node app.js
DEBUG=express:router,express:application node app.js
...
```

## usage

```js
const debug = require("debug");
const httpServerLogger = debug("http:server");
const expressRouterLogger = debug("express:router");

httpServerLogger("error in http server");
expressRouterLogger("error in express router");
```

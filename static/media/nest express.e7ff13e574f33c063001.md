# express on NestJs

> @Res() @Req()를 사용하여 express 객체에 접근할 수 있다. (fastify 프레임워크로 전환할 때 문제가 될 수 있다)
>
> > @Res()를 사용하면 return 대신 res.send()를 사용해야 한다.
> >
> > > Request, Response 타입은 express 패키지에서 가져온다.

```ts
import { Controller, Get, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
@Controller()
export class AppController {
  @Get()
  getData(@Req() req: Request, @Res() res: Response) {
    // logic
    res.send({ message: "Welcome to api!" });
  }
}
```

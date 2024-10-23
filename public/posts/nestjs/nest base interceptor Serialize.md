# nestjs base interceptor Serialize

> controller 에서 return한 entity를 DTO로 변환해주는 interceptor decorator
>
> > 사용하기 전 DTO를 컨트롤러 단에서만 사용할 지 서비스 단까지 사용할지 생각해보자

## serialize.interceptor.ts

```ts
import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { Observable, map } from "rxjs";

interface ClassConstructor {
  new (...args: any[]): {};
}

export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: ClassConstructor) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: ClassConstructor) => {
        return plainToInstance(this.dto, data);
      }),
    );
  }
}
```

## controller

```ts
@Controller({ path: "examples", version: "1" })
export class ExampleController {
  @Get()
  @ApiOperation({
    summary: "모든 Example 목록 조회",
  })
  @ApiOkResponse({ type: [ExampleDTO] })
  @Serialize(ExampleDTO)
  async findAll() {
    return await this.exampleService.findAll();
  }
}
```

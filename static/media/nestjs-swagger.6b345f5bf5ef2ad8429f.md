# nestjs swagger

> SwaggerModule 사용
>
> > Dto에 데코레이션을 달아놓으면 자동으로 swagger document 생성

```ts
import { ApiProperty } from "@nestjs/swagger";

export class CreateCatDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
```

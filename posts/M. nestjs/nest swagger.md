# nestjs swagger

> SwaggerModule 사용
>
> > Dto에 데코레이션을 달아놓으면 자동으로 swagger document 생성
> >
> > > controller <- @ApiTags('name')
> > >
> > > > DTO <- @ApiProperty({example})

## install

```
npm i @nestjs/swagger
```

## main.ts

```ts
const config = new DocumentBuilder()
  .setTitle("Cats example")
  .setDescription("The cats API description")
  .setVersion("1.0")
  .addTag("cats")
  .build();

const document = SwaggerModule.createDocument(app, config);

SwaggerModule.setup("api", app, document); // api path로
```

```ts
import { ApiProperty } from "@nestjs/swagger";

export class CreateCatDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;

  @ApiProperty({ example: 'hello' })
  @ApiBearerAuth()
  @ApiTags('게시물')
}
```

## datetime

> 2000-02-30 형식으로 입력

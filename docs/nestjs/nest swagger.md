# nest swagger

> SwaggerModule 사용
>
> > Dto에 데코레이션을 달아놓으면 자동으로 swagger document 생성
> >
> > > `controller <- @ApiTags('name')`
> > >
> > > > `DTO <- @ApiProperty({example})`

## install

```sh
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

## dto

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

## controller

```ts
@ApiOperation({
  summary: '지적재산권 추가',
  description: '지적재산권을 추가합니다.',
})
```

## datetime

> 2000-02-30 형식으로 입력

## swagger bearer token

```ts
new DocumentBuilder().addBearerAuth();
```

## swagger.json

> 설정후 localhost/swagger.json으로 이동

```js
SwaggerModule.setup("document", app, document, {
  jsonDocumentUrl: "swagger.json",
}); // api path로
```

## swagger-spec.json 생성

```js
/** Swagger */
const document = SwaggerModule.createDocument(app, new DocumentBuilder().addBearerAuth().build());
SwaggerModule.setup("document", app, document, {
  swaggerOptions: { persistAuthorization: true },
});
fs.writeFileSync("./swagger-spec.json", JSON.stringify(document));
```

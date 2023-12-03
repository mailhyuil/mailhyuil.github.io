# nest validation

> param이나 querystring으로 오는 건 무조건 string으로 온다

## global pipe로 사용

> transform:true로 설정하면 명시한 type으로 변환

```ts
import { Module } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: new ValidationPipe({
        transform: true,
        whitelist: true,
        exceptionFactory: (errors: ValidationError[]) => {
          if (errors?.length > 0) {
            const children = errors[0].children;

            if (children?.length > 0) {
              const error = children[0].constraints;
              const keys = Object.keys(error);
              const type = keys[keys.length - 1];
              const message = error[type];
              return new BadRequestException(message);
            }

            const error = errors[0].constraints;
            const keys = Object.keys(error);
            const type = keys[keys.length - 1];
            const message = error[type];
            return new BadRequestException(message);
          }
        },
      }),
    },
  ],
})
export class AppModule {}
```

## 데코레이터로 사용

```ts
@UsePipes(new ValidationPipe({ transform: true }))
```

## explicit conversion

> ParseIntPipe 등으로 사용해서 형변환

```ts
@Get(':id')
findOne(@Param('id') id: number) {
  console.log(typeof id === 'number'); // true
  return 'This action returns a user';
}
```

# nest global validation pipe

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

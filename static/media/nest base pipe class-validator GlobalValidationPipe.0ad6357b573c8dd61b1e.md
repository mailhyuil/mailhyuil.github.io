# nest GlobalValidationPipe

## global-validation.pipe.ts

```ts
import { BadRequestException, ValidationPipe } from "@nestjs/common";
import { ValidationError } from "class-validator";

export const GlobalValidationPipe = new ValidationPipe({
  transformOptions: {
    enableImplicitConversion: true,
  },
  transform: true,
  whitelist: true,
  enableDebugMessages: true,
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
});
```

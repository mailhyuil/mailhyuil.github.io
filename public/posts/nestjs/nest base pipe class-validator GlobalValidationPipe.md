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
});
```

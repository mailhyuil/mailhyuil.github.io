# nest zod nestjs-zod

## install

```sh
npm i nestjs-zod
```

## usage

```ts
import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string().email().optional(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export class UserDto extends createZodDto(UserSchema) {}
```

## GlobalValidationPipe

> app.module.ts에 등록

```ts
import { createZodValidationPipe } from "nestjs-zod";

const GlobalValidationPipe = createZodValidationPipe({
  // provide custom validation exception factory
  createValidationException: (error: ZodError) => new BadRequestException("Ooops"),
});
```

## nestjs Reflector

> nestjs Reflector는 reflect-metadata를 사용하여 metadata를 읽을 수 있게 해준다.

## createDecorator()로 decorator 생성

> 이거 대신 @SetMetadata()를 사용해도됨

```js
// decorator 구현
import { Reflector } from '@nestjs/core';
export const Roles = Reflector.createDecorator<string[]>();
```

## @SetMedata() 사용

```js
import { SetMetadata } from "@nestjs/common";

export const Roles = (...roles: string[]) => SetMetadata("roles", roles);
```

## controller에서 사용

```js
// controller
@Post()
@Roles(['admin'])
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
```

## guard에서 메타데이터 읽기

```js
const roles = this.reflector.get(Roles, context.getClass()); // controller metadata
const roles = this.reflector.get(Roles, context.getHandler()); // handler metadata
```

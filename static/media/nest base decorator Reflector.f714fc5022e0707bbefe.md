## nestjs Reflector

> nestjs Reflector는 reflect-metadata를 사용하여 metadata를 읽을 수 있게 해준다.

## decorator 생성

> set metadata

```js
// 방법 1. Reflector.createDecorator() 사용
import { Reflector } from '@nestjs/core';
export const Roles = Reflector.createDecorator<string[]>();

// 방법 2. SetMetadata() 사용
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

> get metadata

```js
// controller metadata
const roles = this.reflector.get(Roles, context.getClass());
// handler metadata
const roles = this.reflector.get(Roles, context.getHandler());

reflector.get();
reflector.getAllAndOverride();
reflector.getAllAndMerge();
```

```ts
// 현재 요청에 대한 핸들러 메서드를 반환 // 메소드에 데코레이터를 달아놨을 때 사용
const roles = this.reflector.get<string[]>("roles", context.getHandler());

// 현재 요청에 대한 클래스 (컨트롤러)를 반환 // 클래스에 데코레이터를 달아놨을 때 사용
const roles = this.reflector.get<string[]>("roles", context.getClass());

// 메소드, 클래스 상관없이 데코레이터를 달 수 있게 하기
//context.getHandler()와 context.getClass() 모두에 대해 'roles' 메타데이터를 검색하고 병합
const roles = this.reflector.getAllAndOverride<string[]>("roles", [context.getHandler(), context.getClass()]);
```

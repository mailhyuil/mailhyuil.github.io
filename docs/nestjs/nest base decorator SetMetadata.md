# nest base decorator SetMetadata

## usage

```ts
@SetMetadata("roles", ["admin"])
@Get()
findAll(){
  return this.catsService.findAll();
}
```

## wrap 해서 사용하기

```js
import { SetMetadata } from "@nestjs/common";
export const Roles = (...roles: string[]) => SetMetadata("roles", roles);
```

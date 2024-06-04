# class-transformer excludeExtraneousValues

> Mapped Types를 사용하여 DTO를 만들 때, class-transformer의 excludeExtraneousValues 옵션을 사용하면, DTO에 없는 필드는 제외된다.

## DTO

```ts
export class MemberDTO extends PickType(UserDTO, ["id", "name"]) implements MemberDTO {}
```

## Controller

```js
plainToInstance(MemberDTO, found, { excludeExtraneousValues: true });
```

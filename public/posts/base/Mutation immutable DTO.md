# immutable DTO

> Data Security
>
> > Thread Safety

```ts
export class UserDto {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
```

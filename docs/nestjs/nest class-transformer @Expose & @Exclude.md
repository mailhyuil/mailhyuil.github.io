# class-transformer @Expose & @Exclude

> 사용하지 않아도 됨
>
> > 필드의 이름을 변경하고 싶을 때 사용

```ts
export class UserDTO {
  // 기본이 Expose
  id: number;
  email: string;
  @Expose({ name: "client_id" }) // 필드명을 client_id로 변경
  clientId: string;
  @Exclude() // password 필드를 제외
  password: string;
}
```

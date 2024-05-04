# class-validator 중첩된 객체 검증

> 중첩된 객체를 검증하기 위해서는 @ValidateNested() 데코레이터를 사용해야 합니다.

```ts
import { IsNotEmpty, IsEmail, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class Address {
  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  city: string;
}

class User {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @ValidateNested() // 중첩된 객체를 검증하기 위해 ValidateNested() 데코레이터를 사용합니다.
  @Type(() => Address) // 중첩된 객체의 유형을 지정합니다.
  address: Address;
}
```

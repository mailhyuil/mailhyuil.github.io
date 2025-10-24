# nest class-validator 중첩된 객체 검증

> 중첩된 객체를 검증하기 위해서는 @ValidateNested() 데코레이터를 사용해야 합니다.

```ts
import { IsNotEmpty, IsString, IsEmail, MinLength, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class CreateAddressDto {
  @IsNotEmpty()
  @IsString()
  street: string;
  @IsNotEmpty()
  @IsString()
  city: string;
}

class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
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

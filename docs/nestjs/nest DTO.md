# nest DTO

> DTO interface 선언 후 구현한 class
>
> > create, update DTO 사용

## model DTO

> Exclude Expose 설정 (transform)

## Create / Update DTO

```ts
import { ApiProperty, PartialType } from "@nestjs/swagger";

export class CreateCatDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}

export class UpdateCatDTO extends PartialType(CreateCatDTO) {}
```

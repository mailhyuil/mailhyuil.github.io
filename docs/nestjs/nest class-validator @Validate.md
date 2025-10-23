# class-validator @Validate

## 함수로 생성

> true, false 반환

```ts
@Validate((value) => ['left', 'right', 'up', 'down'].includes(value))
direction: string;
```

## CustomConstraint 생성

> ValidatorConstraintInterface로 구현

```ts
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint()
export class CustomConstraint implements ValidatorConstraintInterface {
  validate(text: string, validationArguments: ValidationArguments) {
    // 전달받은 constraints를 통해 유효성 검사 수행
    // true, false 반환
    return text.length > validationArguments.constraints[0] && text.length < validationArguments.constraints[1];
  }
}

export class Post {
  @Validate(CustomConstraint, [3, 20], {
    // constraint 전달
    message: "Wrong post title",
  })
  title: string;
}
```

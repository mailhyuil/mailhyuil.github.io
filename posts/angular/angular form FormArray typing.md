# angular form typing

> 내부에 FormArray를 가진 FormGroup를 타이핑하는 방법

```ts
class User {
  name: string;
  email: string;
  age: number;
  certifications: FormArray<
    FormGroup<{
      name: FormControl<string>;
      level: FormControl<number>;
    }>
  >;
}
```

## form-by.type.ts

```ts
export type FormSimpleType = string | number;
export type FormBy<Type = {}> = FormGroup<{
  [Property in keyof Type]: Type[Property] extends any[] ? (Type[Property] extends FormSimpleType[] ? FormControl<Type[Property]> : FormArray<FormControl<Type[Property][number]>>) : FormControl<Type[Property]>;
}>;
```

## 사용

```ts
class User {
  name: string;
  email: string;
  age: number;
  certifications:
    | {
        name: string;
        level: number;
      }[]
    | [];
}

type UserForm = FormBy<User>;

form: UserForm = this.fb.nonNullable.group({
  name: "",
  email: "",
  age: 0,
  certifications: this.fb.nonNullable.array<User["certifications"]>([]),
});
```

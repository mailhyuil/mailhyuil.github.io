# angular form typing

## ModelFormGroup Type

```ts
export type ModelFormGroup<T> = FormGroup<{
  [K in keyof T]: FormControl<T[K]>;
}>;
```

## 사용

```ts
formGroup: ModelFormGroup<CreateUserDTO> = new FormGroup({
  username: new FormControl<string>("", {
    nonNullable: true,
    validators: [Validators.required],
  }),
  email: new FormControl<string>("", {
    nonNullable: true,
    validators: [Validators.required],
  }),
  password: new FormControl<string>("", {
    nonNullable: true,
    validators: [Validators.required],
  }),
});
```

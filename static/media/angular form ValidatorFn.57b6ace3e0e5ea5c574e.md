# angular form ValidatorFn

## interface

```ts
interface ValidatorFn {
  (control: AbstractControl<any, any>): ValidationErrors | null;
}
```

## 사용

```ts
customValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === 'test') {
      return null;
    } else {
      return { customWrong: true };
    }
  };
}
```

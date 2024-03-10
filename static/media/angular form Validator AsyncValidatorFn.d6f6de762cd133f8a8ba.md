# angular form async validator

> 비동기 태스크를 사용해서 유효성 검사를 수행 (e.g. httpClient 요청)

## interface

```ts
interface AsyncValidatorFn {
  (control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
}
```

## 사용

```ts
customAsyncValidator(): AsyncValidatorFn {
  return (
    control: AbstractControl
  ):
    | Promise<ValidationErrors | null>
    | Observable<ValidationErrors | null> => {
    return this.httpService
      .get(`tests/check-if-exists`, {
        params: {
          value: control.value,
        },
      })
      .pipe(
        map((res) => {
          return res ? { testExists: true } : null;
        })
      );
  };
}
```

# angular form Validator dynamic 변경

> updateValueAndValidity를 해줘야 변경이 적용됨

```ts
this.form.controls.name.clearValidators();
this.form.controls.name.updateValueAndValidity();
```

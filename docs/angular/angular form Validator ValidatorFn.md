# angular form Validator ValidatorFn

## interface

```ts
interface ValidatorFn {
  (control: AbstractControl<any, any>): ValidationErrors | null;
}
```

## usage

```ts
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function CustomValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === "wrong value") return { custom: "값을 확인해주세요" };
    return null;
  };
}
```

## ts

```ts
form = this.fb.nonNullable.group({
  name: this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'change',
  }),
  contacts: this.fb.array<Contact>([], {
    validators: [Validators.required, CustomValidator()],
    updateOn: 'change',
  }),
});

submit() {
  if (this.form.invalid) return this.form.markAllAsTouched();
  this.api.post(this.form.value).subscribe();
}
```

## html

```ts
@if(form.controls.name.errors?.['required'] && form.controls.name.touched){
<p class="text-red-600 font-bold text-xs">이름은 필수 입력값입니다.</p>
}

@if(form.controls.contacts.errors && form.controls.contacts.touched){
<p class="text-red-600">{{ form.controls.name.errors['custom'] }}</p>
}
```

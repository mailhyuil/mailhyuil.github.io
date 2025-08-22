# angular form ErrorMessage

## ts

```ts
form = this.fb.nonNullable.group({
  name: this.fb.control('', {
    validators: [Validators.required],
    updateOn: 'change',
  }),
  contacts: this.fb.array<Contact>([], {
    validators: [Validators.required, InputContactValidator()],
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
  <p class="text-red-600 font-bold text-xs">이름을 입력해주세요.</p>
}

@if(form.controls.contacts.errors && form.controls.contacts.touched){
  <p class="text-red-600">{{ form.controls.name.errors['custom'] }}</p>
}
```

# angular form formGroup

```ts
  readonly formGroup = new FormGroup({
    arr1: new FormArray([
      new FormGroup({
        field1: new FormControl(),
      }),
    ]),
    arr2: new FormArray([
      new FormGroup({
        field1: new FormControl('', [Validators.required]),
        obj1: new FormGroup({
          text: new FormControl('', [Validators.required]),
          image: new FormControl('', [Validators.required]),
        }),
      }),
    ]),
  });
```

## addFormGroup

```ts
addFormGroup() {
  const formArray = this.formGroup.get('arr1') as FormArray;
  formArray.push(
    new FormGroup({
      field1: new FormControl(),
    }),
  );
}
```

## removeFormGroup

```ts
removeFormGroup(index: number) {
  const formArray = this.formGroup.get('arr1') as FormArray;
  formArray.removeAt(index);
}
```

## 마지막이 value가 아닌 controls!!

```html
<div [formGroup]="formGroup">
  <div *ngFor="let i of formGroup.controls.arr1.controls">
    <div [formGroup]="i">
      <input formControlName="field1" />
    </div>
  </div>
  <div *ngFor="let i of formGroup.controls.arr2.controls">
    <div [formGroup]="i">
      <input formControlName="field1" />
      <div formGroupName="obj1">
        <input formControlName="text" />
        <input formControlName="image" />
      </div>
    </div>
  </div>
</div>
```

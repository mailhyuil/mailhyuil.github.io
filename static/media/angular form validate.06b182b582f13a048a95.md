# angular form validate

## import

```ts
imports: [
  FormsModule,
  ReactiveFormsModule,
],
```

## FormGroup

> default값, 유효성 조건
>
> > nullable은 그냥 아무것도 안넣기

```ts
formGroup = new FormGroup({
  title: new FormControl("", [Validators.required]),
  content: new FormControl("", [Validators.required]),
  file: new FormControl<File | null>(null),
});
```

```html
<form [formGroup]="formGroup">
  <input formControllerName="title" />
</form>
<button (click)="submit()" [disabled]="form.invalid">submit</button>
```

## formGroup 변화 check

```ts
this.formGroup.valueChanges.subscribe((observer) => {
  console.log(this.searchForm.valid);
});
```

## this.formGroup.invalid

> 유효한지 확인

## this.formGroup.controls

> 필드 데이터 가져오기

## this.formGroup.getRawValue

> value만 가져오기

## setValue

```ts
this.formGroup.setValue(); // 전부 set
this.formGroup.patchValue({
  // 일부 set
  username,
  realname,
  status,
  phone,
  role: roles[0],
});
```

## error message

```html
<p *ngIf="formGroup.controls.username.invalid">errrrrr0r</p>
```
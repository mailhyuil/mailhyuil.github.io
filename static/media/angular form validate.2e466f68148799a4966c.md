# angular form validate

> 필요 modules = FormsModule, ReactiveFormsModule
>
> > 필요 providers = FormBuilder
> >
> > > 필요 directives = formGroup, formControlName, (ngSubmit)

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
<button (ngSubmit)="submit()" [disabled]="form.invalid">submit</button>
```

## formGroup 변화 check

```
this.formGroup.valueChanges.subscribe(observer => {
        console.log(this.searchForm.valid);
});
```

## submit

```ts
submit(e) {
        const { item } = this.searchForm.controls;
        console.log(item.value);
  }
```

## this.formGroup.invalid

> 유효한지 확인

## error message

```html
<input type="text" id="name" name="name" class="form-control" required minlength="4" appForbiddenName="bob" [(ngModel)]="hero.name" #name="ngModel" />

<div *ngIf="name.invalid && (name.dirty || name.touched)" class="alert">
  <div *ngIf="name.errors?.['required']">Name is required.</div>
  <div *ngIf="name.errors?.['minlength']">Name must be at least 4 characters long.</div>
  <div *ngIf="name.errors?.['forbiddenName']">Name cannot be Bob.</div>
</div>
```

# angular form component input-form-array

## typing

```ts
export type User = {
  name: string;
  contacts: FormArray<Contact>;
};
export type Contact = FormGroup<{
  platform: FormControl<string>;
  id: FormControl<string>;
}>;
```

## input-form-array.component.ts

```ts
import { Component, Input, inject } from "@angular/core";
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Contact } from "../app.component";

@Component({
  selector: "app-input-contact",
  templateUrl: "./input-contact.component.html",
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
})
export class InputContactComponent {
  @Input() formArray!: FormArray<Contact>;
  fb = inject(FormBuilder);

  add() {
    this.formArray.push(
      this.fb.nonNullable.group({
        platform: this.fb.nonNullable.control("", {
          validators: [Validators.required],
        }),
        id: this.fb.nonNullable.control("", {
          validators: [Validators.required],
        }),
      })
    );
  }

  remove(index: number) {
    this.formArray.removeAt(index);
  }
}
```

## input-form-array.component.html

```html
<div>
  @for(formGroup of formArray.controls; track $index ){
  <div [formGroup]="formGroup">
    <input formControlName="platform" placeholder="플랫폼" />
    <input formControlName="id" placeholder="아이디" />
    <button (click)="remove($index)">삭제</button>
  </div>
  } @empty {
  <p>연락처를 추가해주세요..</p>
  }
  <button (click)="add()">추가</button>
</div>
```

## usage

### app.component.ts

> patchValue나 setValue는 formArray에서 작동하지 않는다
>
> > for 문을 이용해서 push 해라

```ts
@Component({
  standalone: true,
  selector: "test-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [RouterModule, FormsModule, ReactiveFormsModule, InputContactComponent],
})
export class AppComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  form = this.fb.nonNullable.group<User>({
    name: "",
    contacts: this.fb.array<Contact>([]),
  });

  ngOnInit() {
    this.http.get().subscribe((data) => {
      data.contacts.forEach((contact) =>
        this.form.controls.contacts.push(
          this.fb.nonNullable.group({
            platform: this.fb.nonNullable.control("", {
              validators: [Validators.required],
            }),
            id: this.fb.nonNullable.control("", {
              validators: [Validators.required],
            }),
          })
        );
      );
    });
  }

  submit() {
    console.log(this.form.value);
  }
}
```

### app.component.html

```html
<form [formGroup]="form">
  <input formControlName="name" placeholder="이름" />
  <app-input-contact formArrayName="contacts" [formArray]="form.controls.contacts"></app-input-contact>
  <button (click)="submit()">submit</button>
</form>
```

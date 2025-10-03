# angular form FormArray

> 내부에 FormArray를 가진 FormGroup를 타이핑하는 방법

```ts
export type Contact = FormGroup<{
  platform: FormControl<string>;
  id: FormControl<string>;
}>;
```

## ts

> patchValue나 setValue는 formArray에서 작동하지 않는다
>
> > for 문을 이용해서 push 해라

```ts
@Component({
  standalone: true,
  selector: "test-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
})
export class AppComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  form = this.fb.nonNullable.group({
    name: ["", [Validators.required]],
    contacts: this.fb.array<Contact>([], {
      validators: [Validators.required]
    }),
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

  add() {
    this.form.controls.contacts.push(
      this.fb.nonNullable.group({
        platform: this.fb.nonNullable.control("",{
          validators: [Validators.required]
        }),
        id: this.fb.nonNullable.control("",{
          validators: [Validators.required]
        }),
      })
    );
  }

  remove(index: number) {
    this.form.controls.contacts.removeAt(index);
  }

  submit() {
    if (this.form.invalid) return alert("invalid");
    console.log(this.form.value);
  }
}
```

## html

```html
<form [formGroup]="form">
  <div formArrayName="contacts">
    @for(contact of form.controls.contacts.controls; track $index ){
    <div [formGroup]="contact">
      <input class="p-2 border" formControlName="platform" placeholder="플랫폼" />
      <input class="p-2 border" formControlName="id" placeholder="아이디" />
      <button (click)="remove($index)">삭제</button>
    </div>
    }
  </div>
  <button (click)="add()">추가</button>
</form>
```

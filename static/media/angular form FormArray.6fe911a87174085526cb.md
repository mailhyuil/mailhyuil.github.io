# angular form FormArray

> 내부에 FormArray를 가진 FormGroup를 타이핑하는 방법

```ts
export type Contact = FormGroup<{
  platform: FormControl<string>;
  id: FormControl<string>;
}>;
```

## ts

> patch시에는 setControl을 사용해야한다.

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
    name: ["", Validators.required],
    contacts: this.fb.array<Contact>([], Validators.required),
  });

  ngOnInit() {
    this.http.get().subscribe((data) => {
      const contacts = data.contacts.map((contact) =>
        this.fb.group({
          platform: contact.platform,
          id: contact.id,
        })
      );

      this.form.controls.contacts.setControl(contacts);
    });
  }

  add() {
    this.form.controls.contacts.push(
      this.fb.nonNullable.group({
        platform: this.fb.nonNullable.control(""),
        id: this.fb.nonNullable.control(""),
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

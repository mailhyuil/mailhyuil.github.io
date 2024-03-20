# angular form typing

> 내부에 FormArray를 가진 FormGroup를 타이핑하는 방법

```ts
type User = {
  name: string;
  email: string;
  age: number;
  certifications: FormArray<Certification>;
};

type Certification = FormGroup<{
  name: FormControl<string>;
  level: FormControl<number>;
}>;
```

## ts

```ts
export default class HomeComponent {
  fb = inject(FormBuilder);
  form = this.fb.nonNullable.group<User>({
    name: "",
    email: "",
    age: 0,
    certifications: this.fb.nonNullable.array<Certification>([]),
  });

  add() {
    this.form.controls.certifications.push(
      this.fb.nonNullable.group({
        name: this.fb.nonNullable.control(""),
        level: this.fb.nonNullable.control(0),
      })
    );
  }

  remove(index: number) {
    this.form.controls.certifications.removeAt(index);
  }

  submit() {
    const value = this.form.value;
    console.log(value);
  }
}
```

## html

```html
<div formArrayName="certifications">
  @for(certification of form.controls.certifications.controls; track $index ){
  <div [formGroup]="certification">
    <input class="p-2 border" formControlName="name" placeholder="자격증 명" />
    <input class="p-2 border" formControlName="level" placeholder="자격증 급수" type="number" />
  </div>
  <button (click)="remove($index)">삭제</button>
  }
</div>
<button (click)="add()">추가</button>
```

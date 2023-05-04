# angular form validate

> ReactiveFormsModule을 import 해야함

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
form = new FormGroup({
  title: new FormControl("", [Validators.required]),
  content: new FormControl("", [Validators.required]),
  file: new FormControl<File | null>(null),
});
```

```html
<form [formGroup]="form">
  <input formControllerName="title" />
</form>
<button [disabled]="form.invalid">submit</button>
```

## input

```ts
@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RemovePipe],
})
export class InputTextComponent extends CustomValueAccessor<string> {
  _customValue: string = '';

  _autofocus: boolean = false;
  @ViewChild('input') input: ElementRef<HTMLInputElement> | undefined;
  @Input() class?: string | undefined;
  @Input() id?: string | undefined;
  @Input() formControlName?: string | undefined;
  @Input() fixText?: string | undefined;
  @Input() maxlength?: string | number | null;
  @Input() placeholder?: string | undefined;
  @Input() override required: boolean = false;
  @Input() readonly: boolean = false;
  @Input()

  set autofocus(value: string | boolean) {
    this._autofocus = typeof value === 'string' ? value !== undefined : value;
  }

  constructor(@Self() @Optional() public ngControl: NgControl) {
    super();  // value 주입
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  get invalid(): boolean {
    return (this.ngControl?.dirty ?? false) && !this.ngControl?.valid;
  }
```

```html
<div class="flex flex-col gap-2">
  <div #label>
    <ng-content />
    <span *ngIf="required === true">*</span>
  </div>
  <input
    #input
    [disabled]="disabled"
    [(ngModel)]="value"
    [maxlength]="maxlength ?? null"
    [placeholder]="placeholder ?? ''"
    [autofocus]="_autofocus"
    [readonly]="readonly"
    [class]="class"
    class="w-full px-3 py-2.5 text-sm border outline-none border-gray-200 hover:border-gray-500 focus-within:border-gray-500 rounded-md" />
  <p *ngIf="ngControl.errors && ngControl.errors['required']" class="text-red-500">{{ label.innerText | remove : "*" }}을 입력해 주세요.</p>
</div>
```

## this.form.invalid

> 유효한지 확인

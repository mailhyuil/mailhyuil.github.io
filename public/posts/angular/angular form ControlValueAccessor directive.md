# angular form ControlValueAccessor directive

```ts
import { Directive, Injector, OnInit } from "@angular/core";
import { ControlValueAccessor, FormControl, NgControl } from "@angular/forms";
@Directive({
  selector: "[controlValueAccessor]",
  standalone: true,
})
export class ControlValueAccessorDirective implements ControlValueAccessor, OnInit {
  control?: FormControl;
  value?: string;
  isDisabled = false;
  isLoading = false;
  isActive = false;

  constructor(private readonly injector: Injector) {}
  ngOnInit(): void {
    const ngControl: NgControl | null = this.injector.get(NgControl, null);
    if (ngControl) {
      this.control = ngControl.control as FormControl;
    }
  }
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  onChange(value: string) {
    this.value = value;
  }
  onTouched() {}
}
```

## 참고

```ts
import { Directive, forwardRef, OnDestroy } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Subject } from "rxjs";

@Directive({
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ValueAccessorDirective),
      multi: true,
    },
  ],
})
export class ValueAccessorDirective<T> implements ControlValueAccessor, OnDestroy {
  private onChange: any;
  private onTouched: any;
  private valueSubject = new Subject<T>();
  private disabledSubject = new Subject<boolean>();
  readonly value = this.valueSubject.asObservable();
  readonly disabled = this.disabledSubject.asObservable();

  constructor() {}

  ngOnDestroy(): void {
    this.valueSubject.complete();
    this.disabledSubject.complete();
  }

  valueChange(v: T) {
    this.onChange(v);
  }

  touchedChange(v: boolean) {
    this.onTouched(v);
  }

  writeValue(obj: any): void {
    this.valueSubject.next(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabledSubject.next(isDisabled);
  }
}
```

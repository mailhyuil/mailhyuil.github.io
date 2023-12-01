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

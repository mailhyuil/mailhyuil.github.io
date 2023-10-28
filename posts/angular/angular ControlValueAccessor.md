# angular ControlValueAccessor

> forms API와 native element를 연결하는 브릿지 역할을 하는 인터페이스
>
> > https://angular.io/api/forms/ControlValueAccessor

## interface ControlValueAccessor

```ts
interface ControlValueAccessor {
  writeValue(obj: any): void
  registerOnChange(fn: any): void
  registerOnTouched(fn: any): void
  setDisabledState(isDisabled: boolean)?: void
}
```

## implements

> ControlValueAccessor를 구현하는 것은 다음과 같다.

```ts
CheckboxControlValueAccessor;
DefaultValueAccessor;
NumberValueAccessor;
RadioControlValueAccessor;
RangeValueAccessor;
SelectControlValueAccessor;
SelectMultipleControlValueAccessor;
```

## Custom

> value === ngModel
>
> > onChange(value) === ngModelChange

```ts
import { forwardRef, Type } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export function createProviders<T>(type: Type<CustomValueAccessor<T>>) {
  return [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => type), multi: true }];
}

export class CustomValueAccessor<T> implements ControlValueAccessor {
  disabled = false;
  required = false;
  touched = false;
  onChange: any = (value: T) => {};
  onTouched: any = () => {};
  onValidationchange: any = () => {};

  private _value!: T;

  set value(newValue: T) {
    if (this._value === newValue) {
      return;
    }
    this._value = newValue;
    this.onChange(newValue);
    this.onTouched();
    this.touched = true;
  }

  get value(): T {
    return this._value;
  }

  writeValue(value: T): void {
    this.value = value;
  }

  registerOnChange(fn: (value: T) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidationchange = fn;
  }
}
```

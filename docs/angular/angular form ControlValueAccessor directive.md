# angular form ControlValueAccessor directive

> hostDirective로 사용

## value-accessor.directive.ts

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
  private onChange = () => {};
  private onTouched = () => {};
  private valueSubject = new Subject<T>();
  private disabledSubject = new Subject<boolean>();
  readonly value = this.valueSubject.asObservable();
  readonly disabled = this.disabledSubject.asObservable();

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

## component.ts

> ValueAccessorDirective\<T>로 inject하여 사용

```ts
import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { ValueAccessorDirective } from "../../directives/value-accessor.directive";
import { AbstractControl, FormsModule, NgControl } from "@angular/forms";

@Component({
  selector: "app-some",
  templateUrl: "./some.component.html",
  styleUrls: ["./some.component.scss"],
  standalone: true,
  imports: [CommonModule, FormsModule, ErrorMessageComponent],
  hostDirectives: [ValueAccessorDirective],
})
export default class SomeComponent {
  value?: string;

  ngControl = inject(NgControl, {
    optional: true,
    self: true,
  });
  control?: AbstractControl;

  constructor(public valueAccessor: ValueAccessorDirective<string>) {
    valueAccessor.value.subscribe(v => (this.value = v));
  }

  ngOnInit(): void {
    this.control = this.ngControl?.control || undefined;
  }

  setValue(event: any) {
    const newValue = event.target.value;
    this.value = newValue;
    this.valueAccessor.writeValue(this.value);
    this.valueAccessor.valueChange(this.value);
  }
}
```

## component.html

```ts
<input [ngModel]="value" (ngModelChange)="setValue($event)"/>
<app-error-message [control]="control" [name]="label"></app-error-message>
```

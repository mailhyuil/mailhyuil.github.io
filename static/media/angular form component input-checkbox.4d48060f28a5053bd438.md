# angular component checkbox

## checkbox-group

### ts

```ts
import { CommonModule } from "@angular/common";
import { AfterContentInit, Component, ContentChildren, Input, QueryList, booleanAttribute, inject } from "@angular/core";
import { LabelComponent } from "@team-lepisode/components";
import { ValueAccessorDirective } from "../../directives/value-accessor.directive";
import { CheckboxComponent } from "../checkbox/checkbox.component";

@Component({
  selector: "app-checkbox-group",
  templateUrl: "./checkbox-group.component.html",
  styleUrls: ["./checkbox-group.component.scss"],
  standalone: true,
  imports: [CommonModule, CheckboxComponent, LabelComponent],
  hostDirectives: [ValueAccessorDirective],
})
export class CheckboxGroupComponent implements AfterContentInit {
  value: string[] = [];
  valueAccessor = inject(ValueAccessorDirective<string[]>);
  @Input() label?: string;
  @Input({ transform: booleanAttribute }) required: boolean = false;
  @ContentChildren(CheckboxComponent)
  checkboxes!: QueryList<CheckboxComponent>;

  ngAfterContentInit(): void {
    this.valueAccessor.value.subscribe((v) => {
      this.value = v || [];
      this.checkboxes.forEach((checkbox) => {
        if (!checkbox.modelValue) return;
        const check = this.value.includes(checkbox.modelValue);
        if (checkbox.value !== check) {
          checkbox.valueAccessor.writeValue(check);
          checkbox.valueAccessor.valueChange(check);
        }
      });
    });
    this.checkboxes.forEach((checkbox) => {
      checkbox.valueAccessor.value.subscribe((v) => {
        if (!checkbox.modelValue) return;
        if (v) {
          this.add(checkbox);
        } else {
          this.remove(checkbox);
        }
      });
    });
  }

  add(checkbox?: CheckboxComponent) {
    if (!checkbox?.modelValue) return;
    if (!this.value) return;
    this.value = [...new Set([...this.value, checkbox.modelValue])];
    this.valueAccessor.writeValue(this.value);
    this.valueAccessor.valueChange(this.value);
  }

  remove(checkbox?: CheckboxComponent) {
    if (!checkbox?.modelValue) return;
    if (!this.value) return;
    this.value = this.value.filter((v) => v !== checkbox.modelValue);
    this.valueAccessor.writeValue(this.value);
    this.valueAccessor.valueChange(this.value);
  }
}
```

### html

```html
<div class="flex flex-col gap-2">
  <lepi-label *ngIf="label" [required]="required">{{ label }}</lepi-label>
  <div class="grid grid-cols-4 gap-4 lg:items-center">
    <ng-content />
  </div>
</div>
```

## checkbox

### ts

```ts
import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { IconComponent } from "@team-lepisode/components";
import { ValueAccessorDirective } from "../../directives/value-accessor.directive";

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.scss"],
  standalone: true,
  imports: [CommonModule, IconComponent],
  hostDirectives: [ValueAccessorDirective],
})
export class CheckboxComponent {
  value?: boolean = false;
  @Input() modelValue?: string;
  constructor(public readonly valueAccessor: ValueAccessorDirective<boolean>) {
    valueAccessor.value.subscribe((v) => (this.value = v));
  }
  toggle() {
    const newValue = !this.value;
    this.valueAccessor.writeValue(newValue);
    this.valueAccessor.valueChange(newValue);
  }
}
```

### html

```html
<section class="group flex select-none items-center gap-3">
  <div
    class="relative flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-sm border-2 transition-all duration-200"
    [ngClass]="
      value ? 'border-primary-500 bg-primary-500' : 'border-gray-400 bg-white'
    "
    (click)="toggle()">
    <div
      class="group-hover:bg-primary-50 absolute -z-10 h-0 w-0 rounded-full group-hover:h-9 group-hover:w-9 group-hover:transition-all group-hover:duration-200 group-hover:ease-in-out"></div>
    <lepi-icon *ngIf="value" class="h-4 w-4 bg-white text-white" name="mdi:check" />
  </div>
  <div class="flex cursor-pointer flex-col gap-1 text-sm" (click)="toggle()" [class.active]="value">
    <div class="text-sm">
      <ng-content></ng-content>
    </div>
  </div>
</section>
```

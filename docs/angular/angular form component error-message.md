# angular form component error-message

## ts

```ts
import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Component({
  selector: "app-error-message",
  templateUrl: "./error-message.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class ErrorMessageComponent {
  @Input() control?: AbstractControl;
  @Input() name?: string;
}
```

## html

```html
@let controlValue = control();

@if (controlValue?.errors && (controlValue?.touched || controlValue?.dirty)) {
  <div class="mt-2">
    @for (error of controlValue?.errors | keyvalue; track $index) {
      @if (error.key === "required") {
        <p class="text-xs font-bold text-red-600">
          {{ name() || "값" }}을(를) 입력해주세요.
        </p>
      } 
      @else if (error.key === 'pattern') {
        <p class="text-xs font-bold text-red-600">잘못된 {{ name() }} 형식입니다.</p>
      } 
      @else if (error.key === 'email') {
        <p class="text-xs font-bold text-red-600">{{ '잘못된 이메일 형식입니다.' }}</p>
      } 
      @else if (error.key === 'minlength' ) {
        <p class="text-xs font-bold text-red-600">{{name()}}은 {{ error.value.requiredLength }}자 "이상"이어야합니다.</p>
      } 
      @else if (error.key === 'maxlength') {
        <p class="text-xs font-bold text-red-600">{{name()}}은 {{ error.value.requiredLength }}자 "이하"이어야합니다.</p>
      } 
      @else if (error.key === 'min') {
        <p class="text-xs font-bold text-red-600">{{name()}}은 {{ error.value.min }}보다 커야합니다.</p>
      } 
      @else if (error.key === 'min') {
        <p class="text-xs font-bold text-red-600">{{name()}}은 {{ error.value.max }}보다 작아야합니다.</p>
      } 
      @else if (error.key === 'requiredTrue') {
        <p class="text-xs font-bold text-red-600">{{name()}}을(를) 동의해주세요.</p>
      } 
      @else {
        <p class="text-xs font-bold text-red-600">{{ error.value }}</p>
      }
    }
  </div>
}
```

## usage

```html
<app-error-message [control]="form.controls.name" name="이름"></app-error-message>
```

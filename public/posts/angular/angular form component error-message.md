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
<div class="mt-2">
  @if(control?.errors && control?.touched){
  <!--  -->
  @for(error of control?.errors | keyvalue; track $index){
  <!--  -->
  @if(error.key === 'required'){
  <p class="text-xs font-bold text-red-600"> {{ name || '값' }}을(를) 입력해주세요. </p>
  } @else{
  <p class="text-xs font-bold text-red-600">{{ error.value }}</p>
  }
  <!--  -->
  }
  <!--  -->
  }
</div>
```

## usage

```html
<app-error-message [control]="form.controls.name" name="이름"></app-error-message>
```

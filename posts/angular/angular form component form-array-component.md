# angular form form-array-component

## ts

```ts
import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { IconComponent } from "@team-lepisode/components";
import ButtonComponent from "../button/button.component";
import InputTextComponent from "../input-text/input-text.component";

@Component({
  selector: "app-form-array",
  templateUrl: "./form-array.component.html",
  styleUrls: ["./form-array.component.scss"],
  standalone: true,
  imports: [CommonModule, InputTextComponent, IconComponent, ButtonComponent, ReactiveFormsModule],
})
export default class FormArrayComponent implements OnInit {
  Object = Object;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() formArray?: FormArray<FormGroup>;
  ngOnInit(): void {
    console.log(this.formArray);
  }

  add() {
    if (!this.formArray) return;
    const newFormGroup = new FormGroup({});
    Object.keys(this.formArray.controls[0].value).forEach((key) => {
      newFormGroup.addControl(key, new FormControl(""));
    });
    this.formArray.push(newFormGroup);
  }

  remove(index: number) {
    if (!this.formArray) return;
    this.formArray.removeAt(index);
  }
}
```

## html

```html
<div>
  <label class="flex flex-col gap-2">
    @if(label){
    <span class="font-bold">{{ label }}</span>
    }
    <!---->
    @for(formGroup of formArray?.controls; track $index){
    <div [formGroup]="formGroup" class="flex items-center gap-2">
      <div class="flex flex-1 gap-2">
        @for(control of Object.entries( formGroup.controls); track $index){
        <app-input-text class="flex-1" [formControlName]="control[0]"></app-input-text>
        }
      </div>
      <lepi-icon (click)="remove($index)" class="block bg-gray-500 size-5" name="heroicons:x-circle-20-solid"></lepi-icon>
    </div>
    }
    <app-button (click)="add()" buttonStyle="stroked">
      <ng-content selector="buttonText"></ng-content>
    </app-button>
  </label>
</div>
```

## 사용

```html
<app-form-array [formArray]="formGroup.controls['certifications']" label="자격증">
  <p buttonText>+ 자격증 추가</p>
</app-form-array>
```

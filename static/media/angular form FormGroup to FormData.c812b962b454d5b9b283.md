# angular form FormGroup to FormData

```ts
import { Injectable } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class ConvertService {
  formGroupToFormData(formData: FormData, formGroup: FormGroup) {
    for (let key in formGroup.controls) {
      if (formGroup.controls[key] instanceof FormGroup) {
        this.formGroupToFormData(formData, formGroup.controls[key] as FormGroup);
      } else if (formGroup.controls[key] instanceof FormArray) {
        if ((formGroup.controls[key] as FormArray).controls[0] instanceof FormControl) {
          formData.append(key, (formGroup.controls[key] as FormArray).value);
        } else {
          for (let formControl of (formGroup.controls[key] as FormArray).controls) {
            if (formControl instanceof FormGroup) this.formGroupToFormData(formData, formControl as FormGroup);
            else {
              formData.append(key, formControl.value);
            }
          }
        }
      } else {
        formData.append(key, formGroup.controls[key].value);
      }
    }
  }
}
```

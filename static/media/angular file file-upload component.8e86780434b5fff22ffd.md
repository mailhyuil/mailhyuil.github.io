# angular file file-upload component

## ts

```ts
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ValueAccessorDirective } from "../../directives/value-accessor.directive";
import { FileService } from "../../services/file.service";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"],
  standalone: true,
  imports: [CommonModule],
  hostDirectives: [ValueAccessorDirective],
})
export default class FileUploadComponent {
  value?: string;
  formData = new FormData();
  uploadingImageUrl?: string;
  constructor(public valueAccessor: ValueAccessorDirective<string>, private readonly fileService: FileService) {
    valueAccessor.value.subscribe((v) => (this.value = v));
  }

  onChange(event: any) {
    if (!event.target) return;
    const file = event.target.files[0];
    if (!file) return;
    this.uploadingImageUrl = URL.createObjectURL(file);
    this.formData.set("file", file);
  }

  upload() {
    const file = this.fileService.upload(this.formData);
    this.valueAccessor.valueChange(file);
    this.valueAccessor.touchedChange(true);
  }
}
```

## html

```html
<input type="file" (change)="onChange($event)" />
@if(uploadingImageUrl){
<img width="500" height="500" [src]="uploadingImageUrl" />
}
```

## 사용

```ts
import { HttpClient } from "@angular/common/http";
import { Component, ViewChild } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterModule } from "@angular/router";
import FileUploadComponent from "../../components/file-upload/file-upload.component";

@Component({
  selector: "app-some",
  templateUrl: "./some.component.html",
  styleUrls: ["./some.component.scss"],
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, FileUploadComponent],
})
export default class SomeComponent {
  formGroup = new FormGroup({
    file: new FormControl<string>("", [Validators.required]),
  });
  @ViewChild(FileUploadComponent) fileUploadComponent!: FileUploadComponent;
  constructor(private readonly httpClient: HttpClient) {}

  submit() {
    this.fileUploadComponent.upload();
    const body = this.formGroup.value;
    this.httpClient.post("http://localhost:3000/api/v1/file", body).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
```

# angular file 미리보기

> URL.createObjectURL(file)로 브라우저 메모리에 url 생성
>
> > URL.revokeObjectURL(objectUrl)로 폐기

## html

```html
<input type="file" (change)="onFileChange($event)" />
@if(uploadingImageUrl){
<img width="500" height="500" [src]="uploadingImageUrl" />
}
```

## ts

```js
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss'],
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
})
export default class SomeComponent {
  formData = new FormData();
  uploadingImageUrl?: string;
  constructor(private readonly httpClient: HttpClient) {}
  onFileChange(event: any) {
    if (!event.target) return;
    const file = event.target.files[0];
    if (!file) {
      this.uploadingImageUrl = undefined;
      return;
    }
    this.uploadingImageUrl = URL.createObjectURL(file);
    this.formData.set('file', file);
  }
  submit() {
    // uploadService and return the url logic or something
    this.httpClient
      .post('http://localhost:3000/api/v1/file', this.formData)
      .subscribe({
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

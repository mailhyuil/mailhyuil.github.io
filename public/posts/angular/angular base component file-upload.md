# angular file uploader component

## ts

```ts
import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ValueAccessorDirective } from "../../directives/value-accessor.directive";
import { FileSizePipe } from "../../pipes/file-size.pipe";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"],
  standalone: true,
  imports: [CommonModule, FileSizePipe],
  hostDirectives: [ValueAccessorDirective],
})
export default class FileUploadComponent {
  value?: File;
  @Input() accept: string[] = [];
  @Input() label?: string;
  uploadingImageUrl?: string;
  constructor(public valueAccessor: ValueAccessorDirective<File>) {
    valueAccessor.value.subscribe((v) => (this.value = v));
  }

  onChange(event: any) {
    if (!event.target) return;
    const file = event.target.files[0];
    this.value = file;
    if (!file) {
      this.uploadingImageUrl = undefined;
      return;
    }
    this.uploadingImageUrl = URL.createObjectURL(file);
    if (!this.value) return;
    this.valueAccessor.valueChange(this.value);
    this.valueAccessor.touchedChange(true);
  }

  isActive = false;
  onDrop(ev: any) {
    ev.preventDefault();
    ev.stopPropagation();
    this.isActive = false;
    const files: FileList = ev.dataTransfer.files;
    const file = Array.from(files)[0];
    this.value = file;
    if (!file) {
      this.uploadingImageUrl = undefined;
      return;
    }
    this.uploadingImageUrl = URL.createObjectURL(file);
    if (!this.value) return;
    this.valueAccessor.valueChange(this.value);
    this.valueAccessor.touchedChange(true);
  }

  onDragOver(ev: any) {
    this.isActive = true;
    ev.preventDefault();
    ev.stopPropagation();
  }
  onDragLeave(ev: any) {
    ev.preventDefault();
    ev.stopPropagation();
    this.isActive = false;
  }
}
```

## html

```html
<label class="flex flex-col gap-2">
  <p class="text-sm font-bold" *ngIf="label">{{ label }}</p>
  <input type="file" [accept]="accept.join(',')" hidden (change)="onChange($event)" />
  <div
    class="cursor-pointer rounded-xl border p-5"
    (drop)="onDrop($event)"
    (dragover)="onDragOver($event)"
    (dragleave)="onDragLeave($event)"
    [class.bg-gray-50]="isActive">
    <div class="flex flex-col items-center gap-2">
      <img src="assets/icons/IcBaselineUploadFile.svg" />
      <p>사진 또는 파일을 드래그할 수 있어요</p>
    </div>
  </div>
  <div *ngIf="value && uploadingImageUrl" class="flex gap-5 rounded-xl border p-5 text-sm text-gray-500">
    <img *ngIf="value.type.includes('image')" width="50" height="50" [src]="uploadingImageUrl" />
    <video *ngIf="value.type.includes('video')" width="50" height="50" [src]="uploadingImageUrl"></video>
    <div class="flex flex-1 items-center gap-2">
      <p class="line-clamp-1 flex-1">파일 이름: {{ value.name }}</p>
      <p class="line-clamp-1 flex-1"> 사이즈: {{ value.size || 0 | fileSize }} </p>
      <p class="line-clamp-1 flex-1">타입: {{ value.type }}</p>
    </div>
  </div>
</label>
```

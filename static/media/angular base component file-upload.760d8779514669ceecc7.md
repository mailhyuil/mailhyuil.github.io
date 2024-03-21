# angular file uploader component

## ts

```ts
import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, inject } from "@angular/core";
import { LepiHint, LepiIcon } from "@team-lepisode/components";
import { FileSizePipe } from "../../pipes/file-size.pipe";
import { ToastService } from "../../services/toast/toast.service";
import { ValueAccessorDirective } from "../value-accessor.directive";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"],
  standalone: true,
  imports: [CommonModule, FileSizePipe, LepiIcon, LepiHint],
  hostDirectives: [ValueAccessorDirective],
})
export default class FileUploadComponent implements OnInit {
  value?: File | File[];
  @Input() accept: string[] = [];
  @Input() label?: string;
  @Input() hint?: string;
  @Input() maxLength?: number;
  toast = inject(ToastService);
  multiple = false;
  uploadingImageUrl?: string;
  uploadingImageUrls: string[] = [];
  constructor(public valueAccessor: ValueAccessorDirective<File | File[]>) {
    valueAccessor.value.subscribe((value) => {
      value = value;
      this.value = value;
      if (this.isFileArray(value)) {
        this.multiple = true;
        this.setObjectUrls(value);
      }
      if (this.isFile(value)) {
        this.setObjectUrl(value);
      }
    });
  }

  ngOnInit(): void {}

  onChange(event: any) {
    if (!event.target) return;
    const files = event.target.files;
    const isValidated = this.validate(files);
    if (!isValidated) return;
    if (this.multiple) {
      this.value = Array.from(files);
      this.setObjectUrls(this.value);
      this.valueAccessor.valueChange(this.value);
      this.valueAccessor.touchedChange(true);
    } else {
      const file = files[0];
      this.value = file;
      this.setObjectUrl(file);
      if (!this.value) return;
      this.valueAccessor.valueChange(this.value);
      this.valueAccessor.touchedChange(true);
    }
  }

  isActive = false;
  onDrop(ev: any) {
    ev.preventDefault();
    ev.stopPropagation();
    const files: FileList = ev.dataTransfer.files;
    const isValidated = this.validate(files);
    if (!isValidated) return;
    if (this.multiple) {
      this.isActive = false;
      this.value = Array.from(files);
      this.setObjectUrls(this.value);
      this.valueAccessor.valueChange(this.value);
      this.valueAccessor.touchedChange(true);
    } else {
      this.isActive = false;
      const file = files[0];
      this.value = file;
      this.setObjectUrl(file);
      if (!this.value) return;
      this.valueAccessor.valueChange(this.value);
      this.valueAccessor.touchedChange(true);
    }
  }

  setObjectUrl(file: File) {
    if (!file) {
      this.uploadingImageUrl = undefined;
      return;
    }
    this.uploadingImageUrl = URL.createObjectURL(file);
  }
  setObjectUrls(files: File[]) {
    if (!files) {
      this.uploadingImageUrls = [];
      return;
    }
    this.uploadingImageUrls = files.map((file) => URL.createObjectURL(file));
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
  validate(files: FileList | null) {
    if (this.maxLength && files && files.length > this.maxLength) {
      this.toast.openDanger(`최대 ${this.maxLength}개까지 업로드 가능합니다.`);
      return false;
    }
    return true;
  }
  isFileArray(value: File | File[] | undefined): value is File[] {
    return Array.isArray(value);
  }
  isFile(value: File | File[] | undefined): value is File {
    return value instanceof File;
  }
}
```

## html

```html
<label class="flex flex-col gap-2">
  <p class="text-sm font-bold" *ngIf="label">{{ label }}</p>
  <input type="file" [accept]="accept.join(',')" [multiple]="multiple" hidden (change)="onChange($event)" />
  <div
    class="p-5 transition-all duration-300 border cursor-pointer rounded-xl hover:bg-gray-50"
    (drop)="onDrop($event)"
    (dragover)="onDragOver($event)"
    (dragleave)="onDragLeave($event)"
    [class.bg-gray-50]="isActive">
    <div class="flex flex-col items-center gap-2">
      <lepi-icon class="size-5 bg-primary" name="heroicons:arrow-up-tray-16-solid" />
      <p class="text-sm">사진 또는 파일을 드래그할 수 있어요</p>
    </div>
  </div>
  @if(value && isFile(value) && uploadingImageUrl){
  <div class="flex gap-5 p-5 overflow-hidden text-sm text-gray-500 border rounded-xl">
    @if(value.type.includes('image') ){
    <img class="size-12" [src]="uploadingImageUrl" />
    } @if(value.type.includes('video') ){
    <video class="size-12" [src]="uploadingImageUrl"></video>
    }
    <div class="grid grid-cols-3 grid-rows-1 gap-1">
      <p class="text-xs line-clamp-1">파일 이름: {{ value.name }}</p>
      <p class="text-xs line-clamp-1"> 사이즈: {{ value.size || 0 | fileSize }} </p>
      <p class="text-xs line-clamp-1">타입: {{ value.type }}</p>
    </div>
  </div>
  }
  <!-- //// if ///// -->
  @if(value && isFileArray(value) && uploadingImageUrls){
  <!-- //// for ///// -->
  @for(v of value; track $index){
  <div class="flex gap-5 p-5 overflow-hidden text-sm text-gray-500 border rounded-xl">
    @if(v.type.includes('image') ){
    <img class="size-12" [src]="uploadingImageUrls[$index]" />
    }
    <!-- ///////// -->
    @if(v.type.includes('video') ){
    <video class="size-12" [src]="uploadingImageUrls[$index]"></video>
    }
    <div class="grid grid-cols-3 grid-rows-1 gap-1">
      <p class="text-xs line-clamp-1">파일 이름: {{ v.name }}</p>
      <p class="text-xs line-clamp-1">사이즈: {{ v.size || 0 | fileSize }}</p>
      <p class="text-xs line-clamp-1">타입: {{ v.type }}</p>
    </div>
  </div>
  }
  <!-- ///////// -->
  }
</label>
```

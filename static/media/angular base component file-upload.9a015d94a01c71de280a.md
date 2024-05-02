# angular file uploader component

## ts

```ts
import { CommonModule } from "@angular/common";
import { Component, Input, booleanAttribute, inject } from "@angular/core";
import { ToastService } from "@lcrs/common";
import { LepiHint, LepiIcon } from "@lepisode-ui/components";
import { FileSizePipe } from "../../pipes/file-size.pipe";
import { ValueAccessorDirective } from "../value-accessor.directive";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"],
  standalone: true,
  imports: [CommonModule, FileSizePipe, LepiIcon, LepiHint],
  hostDirectives: [ValueAccessorDirective],
})
export default class FileUploadComponent {
  value?: File | File[];
  @Input() accept: string[] = [];
  @Input() label?: string;
  @Input() hint?: string;
  @Input() maxLength?: number;
  @Input({ transform: booleanAttribute }) required = false;
  toast = inject(ToastService);
  multiple = false;
  uploadingUrl?: string;
  uploadingUrls: string[] = [];
  constructor(public valueAccessor: ValueAccessorDirective<File | File[] | undefined>) {
    valueAccessor.value.subscribe((value) => {
      if (!value) return;
      this.value = value;

      if (this.isFileArray(value)) {
        this.multiple = true;
        this.setObjectUrls(value);
        return;
      }

      this.setObjectUrl(value);
    });
  }

  onChange(event: any) {
    if (!event.target) return;
    const files = event.target.files;
    const isValidated = this.validate(files);
    if (!isValidated) return;

    if (this.isFileArray(this.value)) {
      this.value = Array.from([...this.value, ...files]);
      this.setObjectUrls(this.value);
      this.valueAccessor.valueChange(this.value);
      this.valueAccessor.touchedChange(true);
      return;
    }

    const file = files[0];
    this.value = file;
    this.setObjectUrl(file);
    if (!this.value) return;
    this.valueAccessor.valueChange(this.value);
    this.valueAccessor.touchedChange(true);
  }

  isActive = false;
  onDrop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    const files: FileList = event.dataTransfer.files;
    const isValidated = this.validate(files);
    if (!isValidated) return;
    if (this.isFileArray(this.value)) {
      this.isActive = false;
      this.value = Array.from(files);
      this.setObjectUrls(this.value);
      this.valueAccessor.valueChange(this.value);
      this.valueAccessor.touchedChange(true);
      return;
    }

    this.isActive = false;
    const file = files[0];
    if (!file) return;
    this.value = file;
    this.setObjectUrl(file);
    if (!this.value) return;
    this.valueAccessor.valueChange(this.value);
    this.valueAccessor.touchedChange(true);
  }

  remove(file: File, objectUrl: string) {
    URL.revokeObjectURL(objectUrl);

    if (this.isFileArray(this.value)) {
      this.value = this.value.filter((f) => f !== file);
      this.setObjectUrls(this.value);
      this.valueAccessor.valueChange(this.value);
      this.valueAccessor.touchedChange(true);
      return;
    }

    this.value = undefined;
    this.uploadingUrl = undefined;
    this.valueAccessor.valueChange(this.value);
    this.valueAccessor.touchedChange(true);
  }

  private setObjectUrl(file: File) {
    if (!file) {
      this.uploadingUrl = undefined;
      return;
    }
    this.uploadingUrl = URL.createObjectURL(file);
  }

  private setObjectUrls(files: File[]) {
    if (!files) {
      this.uploadingUrls = [];
      return;
    }
    this.uploadingUrls = files.map((file) => URL.createObjectURL(file));
  }

  onDragOver(ev: Event) {
    this.isActive = true;
    ev.preventDefault();
    ev.stopPropagation();
  }

  onDragLeave(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    this.isActive = false;
  }
  private validate(files: FileList | null) {
    if (this.isFileArray(this.value)) {
      if (this.maxLength && files && files.length + this.value.length > this.maxLength) {
        this.toast.openDanger(`최대 ${this.maxLength}개까지 업로드 가능합니다.`);
        return false;
      }
    }

    if (this.maxLength && files && files.length + (this.value ? 1 : 0) > this.maxLength) {
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
<div class="flex flex-col gap-2">
  <div class="flex items-center gap-2">
    <p class="text-sm font-bold" *ngIf="label">
      {{ label }} @if(required){
      <span class="text-primary">*</span>
      }
    </p>
    @if(hint){
    <lepi-hint>{{ hint }}</lepi-hint>
    }
  </div>
  <label>
    <input type="file" [maxLength]="maxLength" [accept]="accept.join(',')" [multiple]="multiple" hidden (change)="onChange($event)" />
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
  </label>

  <!--  -->
  @if(value && isFileArray(value) && uploadingUrls){
  <!--  -->
  @for(v of value; track $index){
  <div class="flex gap-5 p-5 overflow-hidden text-sm text-gray-500 border cursor-pointer rounded-xl">
    @if(v.type.includes('image') ){
    <img class="object-cover w-full h-12" [src]="uploadingUrls[$index]" />
    }
    <!--  -->
    @if(v.type.includes('video') ){
    <video class="object-cover w-full h-12" [src]="uploadingUrls[$index]"></video>
    }
    <div class="grid w-full grid-cols-3 grid-rows-1 gap-1">
      <div class="flex items-ceneter">
        <p class="text-xs line-clamp-1">파일 이름: {{ v.name }}</p>
      </div>
      <div class="flex items-ceneter">
        <p class="text-xs line-clamp-1">사이즈: {{ v.size || 0 | fileSize }}</p>
      </div>
      <div class="flex items-ceneter">
        <p class="text-xs line-clamp-1">타입: {{ v.type }}</p>
      </div>
    </div>
    <div class="flex items-center justify-center ml-auto">
      <lepi-icon
        class="transition-all bg-red-500 size-7 hover:scale-110"
        (click)="remove(v, uploadingUrls[$index])"
        name="heroicons:x-circle-16-solid"></lepi-icon>
    </div>
  </div>
  }
  <!--  -->
  }
  <!--  -->
  @if(value && isFile(value) && uploadingUrl){
  <div class="flex gap-5 p-5 overflow-hidden text-sm text-gray-500 border cursor-pointer rounded-xl">
    @if(value.type.includes('image') ){
    <img class="object-cover w-full h-12" [src]="uploadingUrl" />
    }
    <!--  -->
    @if(value.type.includes('video') ){
    <video class="object-cover w-full h-12" [src]="uploadingUrl"></video>
    }
    <div class="grid w-full grid-cols-3 grid-rows-1 gap-1">
      <div class="flex items-ceneter">
        <p class="text-xs line-clamp-1">파일 이름: {{ value.name }}</p>
      </div>
      <div class="flex items-ceneter">
        <p class="text-xs line-clamp-1"> 사이즈: {{ value.size || 0 | fileSize }} </p>
      </div>
      <div class="flex items-ceneter">
        <p class="text-xs line-clamp-1">타입: {{ value.type }}</p>
      </div>
    </div>
    <div class="flex items-center justify-center ml-auto">
      <lepi-icon
        class="transition-all bg-red-500 size-7 hover:scale-110"
        (click)="remove(value, uploadingUrl)"
        name="heroicons:x-circle-16-solid"></lepi-icon>
    </div>
  </div>
  }
</div>
```

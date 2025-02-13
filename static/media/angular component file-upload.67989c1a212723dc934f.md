# angular file uploader component

## ts

```ts
import { NgOptimizedImage } from "@angular/common";
import { booleanAttribute, Component, inject, input, model, output } from "@angular/core";
import { FileSizePipe, ToastService, ValueAccessorDirective } from "@mailhyuil/ng-libs";
import { HintComponent } from "../hint/hint.component";

interface CurrentFile {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
  createdAt: Date;
  deletedAt: Date;

  extension?: string;
}

@Component({
  selector: "mh-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"],
  standalone: true,
  imports: [FileSizePipe, HintComponent, NgOptimizedImage],
  hostDirectives: [ValueAccessorDirective],
})
export class FileUploadComponent {
  toastService = inject(ToastService);

  value?: File | File[];
  accept = input<string[]>([]);
  label = input<string>();
  hints = input<string[]>([]);
  maxLength = input<number | undefined>(undefined);
  required = input(false, {
    transform: booleanAttribute,
  });

  currentFiles = model<CurrentFile[] | undefined>(undefined);
  currentFile = model<CurrentFile | undefined>(undefined);

  deleteFileChange = output<string>();

  multiple = false;
  uploadingUrl?: string;
  uploadingUrls: string[] = [];
  isActive = false;

  private readonly valueAccessor = inject(ValueAccessorDirective<File | File[] | undefined>);
  constructor() {
    this.valueAccessor.value.subscribe(value => {
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

  onDrop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    const isValidated = this.validate(files);
    if (!isValidated) return;
    if (this.isFileArray(this.value)) {
      this.isActive = false;
      this.value = Array.from([...this.value, ...files]);
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
      this.value = this.value.filter(f => f !== file);
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

  setObjectUrl(file: File) {
    if (!file) {
      this.uploadingUrl = undefined;
      return;
    }
    this.uploadingUrl = URL.createObjectURL(file);
  }

  setObjectUrls(files: File[]) {
    if (!files) {
      this.uploadingUrls = [];
      return;
    }
    this.uploadingUrls = files.map(file => URL.createObjectURL(file));
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
    const maxLength = this.maxLength();
    if (this.isFileArray(this.value)) {
      const currentFileCount = this.currentFiles?.length ?? 0;
      if (maxLength && files && files.length + currentFileCount + this.value.length > (maxLength ?? 0)) {
        this.toastService.openDanger(`최대 ${maxLength}개까지 업로드 가능합니다.`);
        return false;
      }
    }
    if (this.isFile(this.value)) {
      if (maxLength && files && files.length + (this.currentFile() ? 1 : 0) + (this.value ? 1 : 0) > (maxLength ?? 0)) {
        this.toastService.openDanger(`최대 ${maxLength}개까지 업로드 가능합니다.`);
        return false;
      }
    }
    return true;
  }

  isFileArray(value: File | File[] | undefined): value is File[] {
    if (this.currentFiles()) return true;
    return Array.isArray(value);
  }

  isFile(value: File | File[] | undefined): value is File {
    if (this.currentFile()) return true;
    return value instanceof File;
  }

  emitDeleteFile(id: string, index?: number) {
    if (index !== undefined && index > -1) {
      const currentFiles = this.currentFiles();
      if (!currentFiles) return;
      const rest = currentFiles.filter((_, i) => i !== index);
      this.currentFiles.set(rest);
    } else {
      this.currentFile.set(undefined);
    }
    this.deleteFileChange.emit(id);
  }
}
```

## html

```html
<div class="flex flex-col gap-2">
  <div class="flex items-center gap-2">
    @if (label(); as label) {
    <p class="text-sm font-bold">
      {{ label }} @if (required()) {
      <span class="text-primary">*</span>
      }
    </p>
    } @let hintsValue = hints(); @if (hintsValue.length > 0) { @for(hint of hintsValue; track hint){
    <mh-hint>{{ hint }}</mh-hint>
    } }
  </div>
  <label>
    <input
      type="file"
      [maxLength]="maxLength()"
      [accept]="accept().join(',')"
      [multiple]="multiple"
      hidden
      (change)="onChange($event)"
    />
    <div
      class="p-5 transition-all duration-300 border cursor-pointer rounded-xl hover:bg-gray-50"
      (drop)="onDrop($event)"
      (dragover)="onDragOver($event)"
      (dragleave)="onDragLeave($event)"
      [class.bg-gray-50]="isActive"
    >
      <div class="flex flex-col items-center gap-2">
        <span class="icon-[heroicons--arrow-up-tray-16-solid] size-5 bg-primary"></span>
        <p class="text-sm">사진 또는 파일을 드래그할 수 있어요</p>
      </div>
    </div>
  </label>

  @for (v of currentFiles(); track v.id) {
  <div class="flex gap-5 p-5 overflow-hidden text-sm text-gray-500 border cursor-pointer rounded-xl">
    @if (v.type.includes("image")) {
    <div class="relative w-full h-12 overflow-hidden">
      <img class="absolute object-cover" [ngSrc]="v.url" fill priority alt="" />
    </div>
    } @if (v.type.includes("video")) {
    <video class="object-cover w-full h-12" [src]="v.url"></video>
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
      <span
        class="icon-[heroicons--x-circle-16-solid] size-7 bg-red-500 hover:scale-110 transition-transform duration-500"
        (click)="emitDeleteFile(v.url, $index)"
      ></span>
    </div>
  </div>
  } @if (value && isFileArray(value) && uploadingUrls) { @for (v of value; track v.text) {
  <div class="flex gap-5 p-5 overflow-hidden text-sm text-gray-500 border cursor-pointer rounded-xl">
    @if (v.type.includes("image")) {
    <img class="object-cover w-full h-12" [src]="uploadingUrls[$index]" alt="" />
    } @if (v.type.includes("video")) {
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
      <span
        class="icon-[heroicons--x-circle-16-solid] size-7 bg-red-500 hover:scale-110 transition-transform duration-500"
        (click)="remove(v, uploadingUrls[$index]!)"
      ></span>
    </div>
  </div>
  } } @if (currentFile(); as currentFile) {
  <div class="flex gap-5 p-5 overflow-hidden text-sm text-gray-500 border cursor-pointer rounded-xl">
    @if (currentFile.type.includes("image")) {
    <div class="relative w-full h-12 overflow-hidden">
      <img class="absolute object-cover" [ngSrc]="currentFile.url" fill priority alt="" />
    </div>
    } @if (currentFile.type.includes("video")) {
    <video class="object-cover w-full h-12" [src]="currentFile.url"></video>
    }
    <div class="grid w-full grid-cols-3 grid-rows-1 gap-1">
      <div class="flex items-ceneter">
        <p class="text-xs line-clamp-1">파일 이름: {{ currentFile.name }}</p>
      </div>
      <div class="flex items-ceneter">
        <p class="text-xs line-clamp-1">사이즈: {{ currentFile.size || 0 | fileSize }}</p>
      </div>
      <div class="flex items-ceneter">
        <p class="text-xs line-clamp-1">타입: {{ currentFile.type }}</p>
      </div>
    </div>
    <div class="flex items-center justify-center ml-auto">
      <span
        class="icon-[heroicons--x-circle-16-solid] size-7 bg-red-500 hover:scale-110 transition-transform duration-500"
        (click)="emitDeleteFile(currentFile.url)"
      ></span>
    </div>
  </div>
  } @if (value && isFile(value) && uploadingUrl) {
  <div class="flex gap-5 p-5 overflow-hidden text-sm text-gray-500 border cursor-pointer rounded-xl">
    @if (value.type.includes("image")) {
    <img class="object-cover w-full h-12" [src]="uploadingUrl" alt="" />
    } @if (value.type.includes("video")) {
    <video class="object-cover w-full h-12" [src]="uploadingUrl"></video>
    }
    <div class="grid w-full grid-cols-3 grid-rows-1 gap-1">
      <div class="flex items-ceneter">
        <p class="text-xs line-clamp-1">파일 이름: {{ value.name }}</p>
      </div>
      <div class="flex items-ceneter">
        <p class="text-xs line-clamp-1">사이즈: {{ value.size || 0 | fileSize }}</p>
      </div>
      <div class="flex items-ceneter">
        <p class="text-xs line-clamp-1">타입: {{ value.type }}</p>
      </div>
    </div>
    <div class="flex items-center justify-center ml-auto">
      <span
        class="icon-[heroicons--x-circle-16-solid] size-7 bg-red-500 hover:scale-110 transition-transform duration-500"
        (click)="remove(value, uploadingUrl)"
      ></span>
    </div>
  </div>
  }
</div>
```

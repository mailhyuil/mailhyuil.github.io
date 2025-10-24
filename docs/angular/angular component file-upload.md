# angular component file-upload

## interface

```ts
import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface FileUploadResponse {
  extension?: string;
  name: string;
  size: number;
  type: string;
  url: string;
}
export interface ExistingFile {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
  createdAt: Date;
  deletedAt: Date;
  extension?: string;
}
export interface IFileUploadService {
  upload(file: File): Observable<FileUploadResponse>;
}

export const FILE_UPLOAD_SERVICE = new InjectionToken<IFileUploadService>("FILE_UPLOAD_SERVICE");
```

## ts

```ts
import { NgOptimizedImage } from "@angular/common";
import { booleanAttribute, Component, inject, input, model, output, signal } from "@angular/core";
import { FileSizePipe, ToastService, ValueAccessorDirective } from "@mailhyuil/ng-libs";
import { firstValueFrom } from "rxjs";
import { ExistingFile, FILE_UPLOAD_SERVICE, FileUploadResponse } from "../../types/file-upload.type";
import { HintComponent } from "../hint/hint.component";

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
  fileUploadService = inject(FILE_UPLOAD_SERVICE);
  value = signal<File[]>([]);
  existingFiles = model<ExistingFile[] | undefined>(undefined);
  accept = input<string[]>([]);
  label = input<string>();
  hints = input<string[]>([]);
  maxLength = input<number>(1);
  required = input(false, {
    transform: booleanAttribute,
  });

  deleteFileChange = output<string>();

  uploadingUrls: string[] = [];
  isActive = false;

  private readonly valueAccessor = inject(ValueAccessorDirective<File[]>);
  constructor() {
    this.valueAccessor.value.subscribe(value => {
      if (!value) return;
      this.value.set(value);
      this.setObjectUrls(value);
    });
  }

  protected onChange(event: Event) {
    const target = event.target;
    if (!target) return;
    if (!(target instanceof HTMLInputElement)) return;

    const files = target.files;
    if (!files) return;

    const isValidated = this.validate(files);
    if (!isValidated) return;

    this.value.set(Array.from([...this.value(), ...files]));
    const value = this.value();
    this.setObjectUrls(value);
    this.valueAccessor.valueChange(value);
    this.valueAccessor.touchedChange(true);
    return;
  }

  protected onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const dataTransfer = event.dataTransfer;
    if (!dataTransfer) return;
    const files = dataTransfer.files;
    const isValidated = this.validate(files);
    if (!isValidated) return;
    this.isActive = false;

    this.value.set(Array.from([...this.value(), ...files]));
    const value = this.value();
    this.setObjectUrls(value);
    this.valueAccessor.valueChange(value);
    this.valueAccessor.touchedChange(true);
    return;
  }

  protected remove(file: File, objectUrl: string) {
    URL.revokeObjectURL(objectUrl);
    this.value.set(this.value().filter(f => f !== file));
    const value = this.value();
    this.setObjectUrls(value);
    this.valueAccessor.valueChange(value);
    this.valueAccessor.touchedChange(true);
    return;
  }

  protected setObjectUrls(files: File[]) {
    if (!files) {
      this.uploadingUrls = [];
      return;
    }
    this.uploadingUrls = files.map(file => URL.createObjectURL(file));
  }

  protected onDragOver(ev: Event) {
    this.isActive = true;
    ev.preventDefault();
    ev.stopPropagation();
  }

  protected onDragLeave(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    this.isActive = false;
  }

  private validate(files: FileList | null) {
    const value = this.value();
    const maxLength = this.maxLength();
    const existingFileCount = this.existingFiles?.length ?? 0;
    if (maxLength && files && files.length + existingFileCount + value.length > maxLength) {
      this.toastService.openDanger(`최대 ${maxLength}개까지 업로드 가능합니다.`);
      return false;
    }
    return true;
  }

  protected emitDeleteFile(id: string, index?: number) {
    const currentFiles = this.existingFiles();
    if (!currentFiles) return;
    const rest = currentFiles.filter((_, i) => i !== index);
    this.existingFiles.set(rest);
    this.deleteFileChange.emit(id);
  }

  async upload() {
    const value = this.value();
    if (!value) return [];
    const attachmentsPromise = value.map(async file => {
      const { name, size, type } = file;
      const { url } = await firstValueFrom(this.fileUploadService.upload(file));
      return {
        name,
        url,
        size,
        type,
        extension: name.split(".").pop(),
      };
    });
    const attachments = await Promise.all<FileUploadResponse>(attachmentsPromise);
    return attachments;
  }

  async delete() {
    const currentFiles = this.existingFiles();
    if (!currentFiles) return;
    const urls = currentFiles.map(file => file.url);
    urls.forEach((url, index) => this.emitDeleteFile(url, index));
  }
}
```

## html

```html
@let maxLengthValue = maxLength(); @let valueValue = value();

<div class="flex flex-col gap-2">
  <div class="flex items-center gap-2">
    @if (label(); as label) {
    <p class="text-sm font-bold">
      {{ label }} @if (required()) {
      <span class="text-primary">*</span>
      }
    </p>
    } @let hintsValue = hints(); @if (hintsValue.length > 0) { @for (hint of hintsValue; track hint) {
    <mh-hint>{{ hint }}</mh-hint>
    } }
  </div>
  <label>
    <input
      type="file"
      [maxLength]="maxLengthValue"
      [accept]="accept().join(',')"
      [multiple]="maxLengthValue > 1"
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

  @for (v of existingFiles(); track v.id) {
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
        (keydown.enter)="emitDeleteFile(v.url, $index)"
      ></span>
    </div>
  </div>
  } @if (valueValue && uploadingUrls.length > 0) { @for (v of valueValue; track v.text) {
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
        (keydown.enter)="remove(v, uploadingUrls[$index]!)"
      ></span>
    </div>
  </div>
  } }
</div>
```

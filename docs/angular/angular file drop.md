# angular file drop

> event의 DataTransfer 객체는 드래그 앤 드롭 작업 중에 드래그되고 있는 데이터를 보관하기 위해 사용됩니다.

## html

```html
<div
  class="cursor-pointer rounded-xl border p-5"
  (drop)="onDrop($event)"
  (dragover)="onDragOver($event)"
  (dragleave)="onDragLeave($event)"
  [class.bg-gray-50]="isActive">
  <div class="flex flex-col items-center gap-2">
    <img src="assets/svgs/IcBaselineUploadFile.svg" />
    <p>사진 또는 파일을 드래그할 수 있어요</p>
  </div>
</div>
```

## ts

```ts
  onDrop(ev: any) {
    ev.preventDefault();
    ev.stopPropagation();
    this.isActive = false;
    const files: FileList = ev.dataTransfer.files;
    const file = Array.from(files)[0];
    this.file = file;
    if (!file) {
      this.uploadingImageUrl = undefined;
      return;
    }
    this.uploadingImageUrl = URL.createObjectURL(file);
    this.value = new FormData();
    this.value?.set('file', file);
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
```

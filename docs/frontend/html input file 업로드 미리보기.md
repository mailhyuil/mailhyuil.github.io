# html input file 업로드 미리보기

> URL.createObjectURL(file)로 브라우저 메모리에 url 생성
>
> > URL.revokeObjectURL(objectUrl)로 폐기

```js
selected!: File | FileList;
uploadingImageUrl?: string;

select(character: ICharacterDTO) {
  this.selected = character.image;
  this.uploadingImageUrl = character.image.url;
  this.isFromGallery = false;
}

async onChange(e: any) {
  const fileList = e.target.files;
  if (!fileList.length) return;
  this.selected = fileList;
  this.uploadingImageUrl = URL.createObjectURL(fileList[0]);
  this.cdr.markForCheck();
}
```

```js
const { data } = await modal.onDidDismiss();
let image: File;

if (data.value && "url" in data.value) {
  image = data.value;
} else {
  image = await this.uploadService.uploadFile(data.value);
}

this.formGroup.controls["profileImage"].setValue(image);
this.cdr.markForCheck();
```

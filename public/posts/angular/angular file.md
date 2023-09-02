# angular file

> ngModel 대신 change 이벤트를 사용해야한다..!

## html

```html
<input type="file" (change)="onChange($event.target.files)" />
```

## ts

```ts
async onChange(fileList: FileList) {
    const formData = new FormData();

    formData.append('file', fileList[0]);

    await lastValueFrom(
        this.httpClient.post('http://localhost:3000/api/upload', formData)
    );
}
```

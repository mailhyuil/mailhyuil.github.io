# html drag and drop

> drag and drop event와 DataTransfer 객체
>
> > DataTransfer 객체는 드래그 앤 드롭 작업 중에 드래그되고 있는 데이터를 보관하기 위해 사용됩니다.

```
# event
drop
dragstart
drag
dragend
dragenter
dragover
dragleave

# DataTransfer
const fileList: FileList = ev.dataTransfer.files;
const files = Array.from(files);
```

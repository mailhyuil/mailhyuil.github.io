# input file

> input.files는 fileList 배열을 리턴 (readonly 속성)

## fileList 변경

```js
const dataTransfer = new DataTransfer();
const newFiles = Array.from(imagesInput.current.files);

newFiles.splice(index, 1); // 지우기

newFiles.forEach((i: any) => {
  //dataTransfer에 추가
  dataTransfer.items.add(i);
});

imagesInput.current.files = dataTransfer.files;
```

## file URL 생성

```js
URL.createObjectURL(file);
```

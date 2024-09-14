# js Blob

> Blob은 immutable하다 (쓰기 작업이 필요하지 않다면 Blob을 사용해라)

## File

> Blob을 상속해서 확장한 객체
>
> > inheriting blob functionality and expanding it to support files on the user's system.
> >
> > > lastModified date, filename, path 같은 프로퍼티가 추가됨
> > >
> > > > DataTransfer, FileReader, FormData

## BlobPart

> file을 생성시 constructor에 넣는 객체
>
> > BlobPart는 다른 Blob 객체거나, USVString이거나, ArrayBuffer여야 한다.
> >
> > > 주로 어지간한 파일을 우리가 코드 상에서 만들 때는 데이터를 ArrayBuffer로 만들어 Blob에 넣어주는 편이다.

## Blob to String

```js
const blob = new Blob(["hello, world"], { type: "text/plain" });

const reader = new FileReader();

// readAsText가 호출되면 발생하는 이벤트
reader.onload = (event: any) => {
  this.stream.set(event.target.result);
};

// 파일 읽기
reader.readAsText(blob);
```

## Blob to Stream

```js
blob
  .stream()
  .getReader()
  .read()
  .then((result) => {
    console.log(result);
  });
```

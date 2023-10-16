# Buffer vs Blob vs File

> 쓰기 작업(편집)이 필요하지 않다면 Blob을 사용해라
>
> > Blob은 immutable하다
> >
> > > Buffer는 메모리에만 올라가지만 Blob은 디스크, 캐시메모리 등등 올라갈 수 있다.
> > >
> > > > Blobs are very useful while working with "binary remote files".
> > > >
> > > > > Blob은 네트워크 통신으로 전달될 수 있고 Buffer는 불가능
> > > > >
> > > > > > Blob은 Blob URL을 생성하여 다른 리소스에 전달하거나 사용할 수도 있다.

## Buffer

> Buffer는 Node.js 환경 내에서만 사용 가능

## ArrayBuffer

> ArrayBuffer는 브라우저와 Node.js 모두에서 사용할 수 있는 원시 바이너리 데이터 버퍼
>
> > typed arrays나 DataView를 통해서 접근

### ArrayBufferView

> ArrayBuffer에 접근하기 위한 객체

#### typed arrays

> ArrayBufferView의 한종류
>
> > for reading and writing raw binary data in memory buffers.

#### DataView

> ArrayBufferView의 한종류

### AudioBuffer

> 오디오 용도

### SourceBuffer

> 미디어 용도

## Blob

### File

> Blob을 상속해서 확장한 객체
>
> > inheriting blob functionality and expanding it to support files on the user's system.
> >
> > > lastModified date, filename, path 같은 프로퍼티가 추가됨
> > >
> > > > DataTransfer, FileReader, FormData

### BlobPart

> file을 생성시 constructor에 넣는 객체
>
> > BlobPart는 다른 Blob 객체거나, USVString이거나, ArrayBuffer여야 한다. 주로 어지간한 파일을 우리가 코드 상에서 만들 때는 데이터를 ArrayBuffer로 만들어 Blob에 넣어주는 편이다.

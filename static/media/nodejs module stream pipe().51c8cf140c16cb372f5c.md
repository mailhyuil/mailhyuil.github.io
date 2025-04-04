# nodejs stream pipe()

> WriteStream 과 ReadStream의 메소드이다.
>
> > destination 인자로 WriteStream을 받는다.
> >
> > > WriteStream을 리턴한다.

```sh
readable.pipe(destination[, options])
writable.pipe(destination[, options])
```

## usage

```js
const readStream = fs.createReadStream("file.txt");
const writeStream = fs.createWriteStream("file-copy.txt");
const outputStream = readStream.pipe(writeStream);
```

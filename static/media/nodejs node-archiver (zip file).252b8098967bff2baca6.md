# nodejs node-archiver (zip files)

> 파일의 크기가 큰 경우 highWaterMark 를 설정하여 buffer size 를 늘려야 한다.
>
> 버퍼의 제한을 두는 옵션
>
> > highWaterMark라는 이름은 개념적으로 "수위 표식"(watermark)에서 유래된 용어

## install

```sh
npm i archiver
npm i -D @types/archiver
```

## usage

```ts
// require modules
const fs = require("fs");
const archiver = require("archiver");

// create a file to stream archive data to.
const output = fs.createWriteStream(__dirname + "/example.zip");
const archive = archiver("zip", {
  zlib: { level: 9 }, // Sets the compression level.
});

// listen for all archive data to be written
// 'close' event is fired only when a file descriptor is involved
output.on("close", function () {
  console.log(archive.pointer() + " total bytes");
  console.log("archiver has been finalized and the output file descriptor has closed.");
});

// This event is fired when the data source is drained no matter what was the data source.
// It is not part of this library but rather from the NodeJS Stream API.
// @see: https://nodejs.org/api/stream.html#stream_event_end
output.on("end", function () {
  console.log("Data has been drained");
});

// good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on("warning", function (err) {
  if (err.code === "ENOENT") {
    // log warning
  } else {
    // throw error
    throw err;
  }
});

// good practice to catch this error explicitly
archive.on("error", function (err) {
  throw err;
});

// pipe archive data to the file
archive.pipe(output);

// append a file from stream
const file1 = __dirname + "/file1.txt";
archive.append(fs.createReadStream(file1), { name: "file1.txt" });

// append a file from string
archive.append("string cheese!", { name: "file2.txt" });

// append a file from buffer
const buffer3 = Buffer.from("buff it!");
archive.append(buffer3, { name: "file3.txt" });

// append a file
archive.file("file1.txt", { name: "file4.txt" });

// append files from a sub-directory and naming it `new-subdir` within the archive
archive.directory("subdir/", "new-subdir");

// append files from a sub-directory, putting its contents at the root of archive
archive.directory("subdir/", false);

// append files from a glob pattern
archive.glob("file*.txt", { cwd: __dirname });

// finalize the archive (ie we are done appending files but streams have to finish yet)
// 'close', 'end' or 'finish' may be fired right after calling this method so register to them beforehand
archive.finalize();
```

## axios 와 함께 사용하기

```ts
const archive = archiver("zip", {
  highWaterMark: 1024 * 1024 * 64, // buffer size 늘리기 // 큰 파일을 다운로드 할 때 사용
  zlib: { level: 9 }, // Sets the compression level.
});
const promises = files.map(file => {
  return new Promise<void>((resolve, reject) => {
    this.http
      .get(file.url, {
        responseType: "stream",
      })
      .subscribe(response => {
        if (response.data instanceof internal.Readable) {
          response.data.on("end", resolve);
          archive.append(response.data, { name: file.name }).on("error", reject);
        }
      });
  });
});
const outputStream = new PassThrough();
archive.pipe(outputStream);
Promise.all(promises).then(() => {
  archive.finalize();
});
return outputStream;
```

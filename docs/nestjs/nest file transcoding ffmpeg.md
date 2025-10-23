# nest file transcoding

> 트랜스코딩은 이미 압축된 파일(일반적으로 오디오 또는 비디오)을 다른 파일 형식으로 변환하는 프로세스를 나타냅니다.
>
> > 파일을 업로드하면 스토리지에 저장 -> 비동기로 스토리지에서 파일을 읽어서 변환 -> 변환된 파일을 트랜스코딩 스토리지에 저장

## ffmpeg 설치

```sh
choco install ffmpeg
```

## install

```sh
npm i fluent-ffmpeg
```

## usage

```ts
import ffmpeg from "fluent-ffmpeg";

@Controller("file")
export class FileController {
  @Get()
  async uploadFile() {
    ffmpeg()
      .input(join(__dirname, "assets", "sample.mp4"))
      .outputOptions("-vf", "scale=1280:720") // 새로운 해상도 지정 (여기서는 1280x720)
      .on("progress", (progress) => {
        console.log(`Processing: ${progress.percent}% done`);
      })
      .on("end", () => {
        console.log("해상도 변환이 완료되었습니다.");
      })
      .on("error", (err) => {
        console.error("오류 발생:", err);
      })
      .save(join(__dirname, "new_video.mp4"));
  }
}
```

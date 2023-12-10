# nest file transcoding

> 트랜스코딩은 이미 압축된 파일(일반적으로 오디오 또는 비디오)을 다른 파일 형식으로 변환하는 프로세스를 나타냅니다.
>
> Adaptive Bitrate Streaming
>
> > 영상을 초단위로 분할하여 네트워크 상황에 따라 영상의 품질을 자동으로 조절하는 기술

## ffmpeg 설치

```sh
choco install ffmpeg
```

## install

```sh
npm i fluent-ffmpeg
```

## 사용법

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

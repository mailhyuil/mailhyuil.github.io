# ffmpeg nodejs

## install

```sh
npm i fluent-ffmpeg
```

## usage

```ts
import ffmpeg from "fluent-ffmpeg";

ffmpeg()
  .input(join(__dirname, "assets", "sample.mp4")) /// 변활할 파일 경로
  .outputOptions("-vf", "scale=1280:720") // 새로운 해상도 지정 (여기서는 1280x720)
  .on("progress", (progress) => {
    /// 변환 진행률
    console.log(`Processing: ${progress.percent}% done`);
  })
  .on("end", () => {
    /// 변환 완료
    console.log("해상도 변환이 완료되었습니다.");
  })
  .on("error", (err) => {
    /// 변환 오류
    console.error("오류 발생:", err);
  })
  .save(join(__dirname, "new_video.mp4")); /// 변환된 파일 저장 경로
```

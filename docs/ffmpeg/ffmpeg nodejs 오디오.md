# ffmpeg nodejs 오디오

## transcode

```js
import ffmpeg from "fluent-ffmpeg";

ffmpeg()
  .input(join(__dirname, "assets", "sample.mp3")) /// 변활할 파일 경로
  .outputOptions("-b:a", "128k") // 비트레이트 128k로 지정 -b:a === bitrate:audio
  .on("progress", (progress) => {
    /// 변환 진행률
    console.log(`Processing: ${progress.percent}% done`);
  })
  .on("end", () => {
    /// 변환 완료
    console.log("비트레이트 변환이 완료되었습니다.");
  })
  .on("error", (err) => {
    /// 변환 오류
    console.error("오류 발생:", err);
  })
  .save(join(__dirname, "new_audio.mp3")); /// 변환된 파일 저장 경로
```

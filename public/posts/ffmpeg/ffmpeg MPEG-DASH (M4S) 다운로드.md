# ffmpeg 다운로드 MPEG-DASH (M4S)

```sh
mkdir ./audio
mkdir ./video

curl "audio_init_url" -o "./audio/init.m4s"
curl "audio_data_url" -o "./audio/1.m4s"
curl "audio_data_url" -o "./audio/2.m4s"
...

curl "video_init_url" -o "./video/init.m4s"
curl "video_data_url" -o "./video/1.m4s"
curl "video_data_url" -o "./video/2.m4s"
...

# 모든 조각을 하나의 파일로 병합
cat ./audio/init.m4s ./audio/*.m4s > audio.m4s
cat ./video/init.m4s ./video/*.m4s > video.m4s

# 병합된 파일을 mp4로 변환
ffmpeg -i video.m4s -c:a copy video.mp4

# 비디오 파일에 오디오 파일을 병합
ffmpeg -i video.mp4 -i audio.m4s -c:v copy -c:a copy video_audio_merged.mp4
```

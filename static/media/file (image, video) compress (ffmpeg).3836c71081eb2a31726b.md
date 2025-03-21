# image video compress

## jpg/png to webp

```sh
ffmpeg -i input.png -c:v libwebp output.webp

# 해상도 변경
ffmpeg -i input.png -vf scale=800:600 -c:v libwebp output.webp
# 가로 길이에 맞춰 비율 유지 (-1 사용)
ffmpeg -i input.png -vf scale=800:-1 -c:v libwebp output.webp

# quality 변경 (-q 0~100, 0이 best)
ffmpeg -i input.png -c:v libwebp -quality 75 output.webp
```

## audio 제거

```sh
# audio 제거 후 video만 추출
ffmpeg -i input.mp4 -map 0:0 -c:v copy only_video.mp4

# video 제거 후 audio만 추출
ffmpeg -i input.mp4 -map 0:1 -c:a copy only_audio.mp4
```

## mp4 to webm

```sh
# mp4 to webm
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus output.webm

# 해상도 변경
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus -vf scale=1280:720 output.webm
# 해상도 변경 가로 길이에 맞춰 비율 유지 (-1 사용)
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus -vf scale=1280:-1 output.webm

# quality 변경 (-crf 0~63, 0이 best)
# -crf 30: default
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus output.webm
# -crf 40: 낮은 품질
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 40 -b:v 0 -b:a 128k -c:a libopus output.webm
# -crf 50: 매우 낮은 품질
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 50 -b:v 0 -b:a 128k -c:a libopus output.webm
```

## extract first frame (poster 이미지 생성)

```sh
ffmpeg -i hero.mp4 -r 0.1 -c:v libwebp hero_poster.webp
```

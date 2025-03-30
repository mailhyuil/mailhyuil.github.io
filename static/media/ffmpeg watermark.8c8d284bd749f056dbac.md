# ffmpeg watermark

```sh
ffmpeg -i input.mp4 -i watermark.png -c:v libx264 filter_complex "[1]format=rgba,colorchannelmixer=aa=0.5[logo];[0][logo]overlay=5:5:format=auto,format=yuv420p" -c:a copy watermark.mp4
출처: https://l-c-st2.tistory.com/22
```

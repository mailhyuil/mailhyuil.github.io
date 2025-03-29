## html video track (자막)

> vtt 파일(WebVTT)로 자막을 추가

```html
<video controls>
  <source src="movie.mp4" type="video/mp4" />
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" />
  <track src="subtitles_ko.vtt" kind="subtitles" srclang="ko" label="Korean" />
  Your browser does not support the video tag.
</video>
```

# html audio

> web 정책에 의해 autoplay는 막혀있다.
>
> > youtube도 영상은 자동재생이 되지만 음소거 상태로만 틀 수 있다.

## html

```
<audio id="bgm" src="your-music-file.mp3" autoplay loop></audio>
```

## script

```
<script>
var audio = document.getElementById('bgm');
audio.play(); // 재생
audio.pause(); // 일시 정지
audio.volume = 0.5; // 볼륨 조절 (0.0에서 1.0 사이의 값)
</script>
```

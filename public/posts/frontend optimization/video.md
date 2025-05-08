# video

> 가능한 webm을 사용하되 호환성이나 fallback을 위해 mp4도 함께 제공해야한다.
>
> ios 환경에서는 webm을 지원하지 않기 때문에 mp4를 사용해야 한다. (webm 사용 시 자동재생등의 기능이 동작하지 않음)
>
> > video가 render되는 동안 보여줄 poster 이미지를 제공해야한다.
> >
> > 비디오 리소스는 우선순위가 낮은 리소스이기 때문에 모바일 환경에서는 이미지를 사용하는게 권장된다.

```html
<video
  class="will-change-auto"
  preload="metadata"
  oncanplay="this.play()"
  onloadedmetadata="this.muted = true"
  poster="/img/hero_poster.webp"
  playsinline
  autoplay
  loop
  muted
>
  <source src="/videos/hero.webm" type="video/webm" />
  <!-- ios에서는 mp4를 사용해야 한다. -->
  <source src="/videos/hero.mp4" type="video/mp4" />
  <p>
    <a href="/videos/hero.mp4" download="hero.mp4">Download</a>
    the video to see it in your browser.
  </p>
</video>
```

### poster 이미지 생성

```sh
# mp4 to webp
ffmpeg -i hero.mp4 -r 0.1 -c:v libwebp hero_poster.webp
```

### preload poster image

```html
<link rel="preload" href="/img/hero_poster.webp" as="image" fetchpriority="high" />
```

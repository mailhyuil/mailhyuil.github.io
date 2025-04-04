# video

> 가능한 webm을 사용하되 호환성이나 fallback을 위해 mp4도 함께 제공한다.
>
> > video가 render되는 동안 보여줄 poster 이미지를 제공한다.

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
  <source src="/videos/hero.mp4" type="video/mp4" />
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

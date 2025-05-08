# video

> 가능한 webm을 사용하되 호환성이나 fallback을 위해 mp4도 함께 제공한다.
>
> > video가 render되는 동안 보여줄 poster 이미지를 제공한다.
> >
> > > 비디오 리소스는 우선순위가 낮은 리소스이기 때문에 모바일 환경에서는 재생이 안되는 경우가 빈번하다.
> > >
> > > LCP요소에 비디오를 사용하지 않는 것을 지향하고, 사용해야한다면 비디오가 로드되는 동안 대체할 UI를 제공해야한다.

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

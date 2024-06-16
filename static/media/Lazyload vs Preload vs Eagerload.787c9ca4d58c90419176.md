# Lazyload vs Preload vs Eagerload

## Lazyload

> 사용자가 접근할 때 리소스를 로드
>
> > (e.g. 사용자가 스크롤을 내리면 이미지를 로드)

```html
<img src="path/to/image.jpg" loading="lazy" alt="Image description" />

<video controls width="400" height="300" loading="lazy">
  <source src="path/to/video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<iframe src="path/to/iframe-content" loading="lazy"></iframe>
```

## Preload

> 사용자가 접근하기 전에 리소스를 미리 로드해서 브라우저 캐시에 저장하는 것!
>
> > (e.g. 사용자가 링크를 타고 네비게이팅하기 전에 필요한 리소스를 미리 로드, 브라우저 캐시에 저장)
> >
> > > Prefetch는 http를 미리 보내서 브라우저 캐시에 저장하는 것이고, Preload는 html에 link 태그를 사용해서 브라우저 캐시에 저장하는 것이다.

```html
<head>
  <link rel="preload" href="styles.css" as="style" />
</head>

<head>
  <link rel="prefetch" href="path/to/script.js" />
</head>
```

## Eagerload

> 앱이 실행될 때 리소스를 로드
>
> > default

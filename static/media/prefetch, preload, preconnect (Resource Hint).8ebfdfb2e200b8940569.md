# resource hint

## preload

> 특정 리소스를 사전에 가져와 캐시에 저장하는 것뿐만 아니라
>
> > 해당 리소스가 사용되는 방식을 명시하여 최적의 처리를 유도
> >
> > > 현재 페이지 필요한 리소스를 사전에 가져오는데 적합한 기능
> > >
> > > > 초기 로딩 속도 개선

```html
<!-- as = script, style, font, audio, video, document, image, fetch  -->
<link rel="preload" href="/js/some-script.js" as="script" />
```

## preconnect

> 특정 도메인과 사전 연결을 맺도록 힌트

```html
<link rel="preconnect" href="//example.com"
```

## prefetch

> 특정 리소스를 사전에 가져와서 브라우저에 캐시한다
>
> > 사용자가 이동할 가능성이 높은 다른 페이지의 리소스를 사전에 요청
> >
> > > 필요한 파일만 prefetch 하자!
> > >
> > > > 다음 페이지 필요한 리소스를 사전에 가져오는데 적합한 기능
> > > >
> > > > > 페이지 이동 시 로딩 속도를 개선

```html
<link rel="prefetch" href="/js/some-script.js" />
```

## dns-prefetch

> dns를 미리 resolve 해놓는다.

```html
<link rel="dns-prefetch" href="//fonts.googleapis.com" />
<link rel="dns-prefetch" href="//cdn.domain.com" />
```

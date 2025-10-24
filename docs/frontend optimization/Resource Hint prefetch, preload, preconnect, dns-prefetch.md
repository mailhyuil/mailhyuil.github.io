# Resource Hint prefetch, preload, preconnect, dns-prefetch

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

## preconnect

> DNS + TCP + TLS 핸드쉐이크를 미리 수행하여 연결을 미리 설정
>
> > 반드시 사용되는 외부 리소스에 설정
> >
> > > 사용하지 않는 외부 리소스에 설정하면 오히려 성능 저하

```html
<link rel="preconnect" href="//example.com"
```

## dns-prefetch

> DNS 조회를 미리 수행하여 DNS 캐시를 미리 설정
>
> > 사용할 수도 사용하지 않을 수도 있는 외부 리소스에 설정

```html
<link rel="dns-prefetch" href="//fonts.googleapis.com" />
<link rel="dns-prefetch" href="//cdn.domain.com" />
```

# http headers 보안 Cross-Origin-Opener-Policy (COOP)

> Helps process-isolate your page
>
> > 웹 페이지를 별도의 프로세스로 분리하여 다른 출처의 문서와의 상호작용을 제한함으로써 보안을 강화
> >
> > > 다른 출처의 창이나 탭에서 현재 페이지를 참조하거나 조작하는 것을 방지 (window.open)
> > >
> > > > html doc 응답에 `Cross-Origin-Opener-Policy` 헤더를 추가하여 설정해야한다.
> > > >
> > > > api request가 아님

```txt
Cross-Origin-Opener-Policy: unsafe-none
Cross-Origin-Opener-Policy: same-origin-allow-popups
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Opener-Policy: noopener-allow-popups
```

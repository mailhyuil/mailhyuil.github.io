# event beforeunload & pagehide

> 브라우저가 닫히거나 페이지를 떠날 때 발생하는 이벤트

## beforeunload

> document unload를 진행하기 전에 이벤트가 발생
>
> > document는 여전히 visible 상태

## pagehide

> bfcache 사용 가능
>
> > unload의 대안 이벤트
> >
> > > 취소불가

## beforeunload & pagehide 같이 사용

> beforeunload가 발생할 경우 pagehide는 작동하지 않는다
>
> > refresh 시에는 둘 다 발생한다.

```ts
  @HostListener(`window:pagehide`, [ `$event` ])
  pageHide(e: any) {
    console.log('pagehide');
  }

  @HostListener(`window:beforeunload`, [ `$event` ])
  beforeunload(e: any) {
    console.log('beforeunload')
    return false;
  }
```

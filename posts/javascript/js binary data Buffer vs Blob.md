# Buffer vs Blob

> Blob은 immutable하다 (쓰기 작업이 필요하지 않다면 Blob을 사용해라)
>
> > Buffer는 메모리에만 올라가지만 Blob은 디스크, 캐시메모리 등등 올라갈 수 있다.
> >
> > > Buffer는 Node.js 환경 내에서만 사용 가능
> > >
> > > > 브라우저에서 사용하고 싶다면 ArrayBuffer를 사용해야 한다.

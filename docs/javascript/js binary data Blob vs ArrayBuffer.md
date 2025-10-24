# js binary data Blob vs ArrayBuffer

## Blob

> immutable (쓰기 작업이 필요하지 않다면 Blob을 사용해라)
>
> > Buffer는 메모리에만 올라가지만 Blob은 디스크, 캐시메모리 등등 올라갈 수 있다.
> >
> > > MIME type을 가지고 있음 → "image/png", "application/pdf" 등
> > >
> > > > 내부적으로는 ArrayBuffer 기반일 수 있음, 하지만 그 구조를 직접 제어하진 않음
> > > >
> > > > > 파일 다운로드, 이미지 업로드, 표시 등등에 사용

## ArrayBuffer

> mutable
>
> > 구조, 타입 정보 없음
> >
> > > 순수하게 바이트만 담긴 원시 메모리 버퍼
> > >
> > > > 오디오/비디오 스트리밍, 바이너리 데이터 전송, 웹소켓 등등에 사용

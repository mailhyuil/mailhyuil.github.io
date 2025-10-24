# html 파일 다운로드 완료

## image

> load 이벤트 사용

```html
<img [src]="imageSrc" (load)="onImageLoad()" (error)="onImageError()" />
```

## video

> loadeddata 이벤트는 비디오의 첫 프레임이 로드되었을 때 발생합니다. (다운로드가 완료되지 않음) (load 이벤트는 발생하지 않음)
>
> > canplaythrough / canplay 이벤트는 비디오가 재생될 수 있을 정도로 충분한 데이터를 버퍼링했을 때 발생합니다.
> >
> > > loadedmetadata 이벤트는 비디오의 메타데이터가 로드되었을 때 발생합니다.
> > >
> > > > 비디오 다운로드가 완전히 완료되었는지는 progress와 metadata 이벤트를 사용해야합니다.

```html
<video
  [src]="videoSrc"
  (loadedmetadata)="onVideoMetadataLoaded()"
  (loadeddata)="onVideoLoad()"
  (canplay)="onVideoCanPlay()"
  (canplaythrough)="onVideoCanPlayThrough()"
  (progress)="onVideoProgress()"
  (error)="onVideoError()"
></video>
```

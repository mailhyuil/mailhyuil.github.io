# SourceBuffer & AudioBuffer & VideoFrame

> ArrayBuffer를 각 도메인에 최적화된 데이터로 다루기 위한 객체
>
> > 즉 ArrayBuffer를 직접 조작하는 것이 아니라 사용하기 쉽게 추상화한 객체

## SourceBuffer

> 미디어 용도
>
> ArrayBuffer를 받아서, 비디오/오디오 스트림으로 변환
>
> > Media Source Extensions API에서 사용

## AudioBuffer

> 오디오 용도
>
> 내부적으로는 Float32Array 여러 개로 채널을 나눠서 저장함
>
> > Web Audio API에서 쓰임.

## VideoFrame

> 비디오 프레임 단위로 직접 다룰 수 있는 객체
>
> ImageBitmap, Canvas, ArrayBuffer, SharedArrayBuffer 등 다양한 소스에서 생성 가능
>
> > WebCodecs API에서 사용

# alpine & slim & slim-stretch

## alpine

> 초경량 리눅스 베이스 이미지
>
> > musl libc, busybox 기반
> >
> > glibc 기반 앱이 작동하지 않을 수 있음 (호환성이 떨어짐)
> >
> > native 모듈등에서 빌드 이슈가 생길 수 있음
> >
> > > 사이즈가 극단적으로 작음
> > >
> > > > apk 패키지 매니저 사용
> > > >
> > > > > /bin/ash 쉘 사용

## slim

> debian 베이스 이미지에서 불필요한 문서, 로캘, 디버깅 툴을 제거한 버전
>
> > 용량 20~25MB 정도
> >
> > > glibc 기반이라 대부분의 소프트웨어가 잘 돌아감 (호환성 높음)

### version

```txt
slim-stretch # Debian 9
slim-buster # Debian 10
slim-bullseye # Debian 11
slim-bookworm # Debian 12
```

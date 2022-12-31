# 알파인 리눅스

> 알파인 리눅스는 가볍고 간단한, 보안성을 목적으로 개발한 리눅스 배포판입니다.
>
> > 용량을 줄이기 위해 시스템의 기본 C runtime을 glibc 대신 musl libc 를 사용하며 다양한 쉘 명령어는 GNU util 대신 busybox 를 탑재하였습니다.
> >
> > > 용량이 80M인 초경량화된 배포판이므로 Embbeded 나 네트웍 서버등 특정 용도에 적합하며 특히 도커(docker)에 채택되어 5M 크기의 리눅스 이미지로 유명합니다.

## apk 패키지 관리자

```bash
apk update
apk add
apk del
apk search
apk info
apk upgrade
```

## docekr 접속

```bash
docker exec -it container /bash/sh
```

## scp

> directory를 바로 옮김 폴더 생성 안해도 됨
>
> > nginx scp 시 권한이 있는 디렉토리에 복사해라 (e.g. /home/ubuntu)
> >
> > > 파일의 용량이 큰 경우 압축을 하거나 rsync를 사용하는 것이 좋다. (rsync는 압축 옵션이 있음)

## install

```sh
# linux package scp
apt install openssh-server -y

# client
apt install openssh-client -y
```

## options

```sh
-i : 인증키를 사용하여 접속
-r : 하위 디렉토리까지 복사
-v : 상세 정보 출력 (verbose)
-l : 전송 속도 제한 / 대역폭 제한
```

## usage

```sh
# 업로드
scp -i ./key.pem -r ./dir user@remote:/apps
# 다운로드
scp -i ./key.pem -r user@remote:/apps ./
```

# linux package rsync

> Remote sync의 줄임말로 여러가지 옵션을 이용해 원격 또는 로컬간에 파일이나 디렉토리를 복사하는 툴입니다.
>
> > cp와 비슷하지만 cp는 모든 파일을 전부 복사하고, rsync는 업데이트 된 부분만 바꾼다 (즉, 동기화)
> >
> > cp -u 옵션을 사용하면 rsync와 마찬가지로 업데이트된 부분만 바꾼다
> >
> > > Rsync is better since it will only copy only the updated parts of the updated file, instead of the whole file.

## install

```sh
apt install rsync -y
```

## options

```sh
-a : archive 모드로 타임스탬프, 심볼릭링크, 퍼미션, 그룹, 소유자, 장치 등의 파일 보존
-l : symbolic link 형태로 복사
-z : 데이터를 압축해서 전송. 단 destination에서는 압축이 해제되어 들어감.
-r : 하위 디렉토리까지 복사
-e : ssh 연결을 위한 옵션
-v : 상세 정보 출력 (verbose)
-p : 파일의 권한(permission)을 유지
--progress : 전송 진행 상황을 보여줌
--delete : destination에 source에 없는 파일이 있다면 삭제
--exclude : 특정 파일이나 디렉토리를 제외하고 복사
--include : 특정 파일이나 디렉토리만 복사
```

## usage

```sh
# 파일 압축 후 업로드
rsync -az --progress -e "ssh -i key.pem" ./dir user@remote_server:/dir
# 파일 압축 후 다운로드
rsync -az --progress -e "ssh -i key.pem" user@remote_server:/dir ./
```

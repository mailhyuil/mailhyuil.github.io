# wsl

> windows subsystem for linux
>
> > window에서 linux를 사용할 수 있게 해주는 기능

## command

```sh
# 기본 os로 진입
wsl
# 특정 os로 진입
wsl -d Ubuntu

# 다시 시작
wsl --shutdown

# 설치된 리눅스 확인
wsl --list --verbose

# 기본 리눅스 설정
wsl --set-default Ubuntu
```

## ~/.wslconfig

```ini
[wsl2]
memory=4GB
processors=2
```

## systemd 사용하기

> wsl은 기본으로 init을 사용한다.
>
> > systemd로 변경하기 위해서 아래와 같이 설정한다.

```sh
# /etc/wsl.conf
[boot]
systemd=true
```

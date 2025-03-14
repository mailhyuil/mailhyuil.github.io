# wsl

> windows subsystem for linux
>
> > window에서 linux를 사용할 수 있게 해주는 기능

## command

```sh
wsl --shutdown

wsl --list --verbose
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

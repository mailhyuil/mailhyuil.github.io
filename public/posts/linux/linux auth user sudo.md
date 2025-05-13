# linux sudo

> sudo는 root 권한을 임시로 사용할 수 있는 그룹이다.
>
> > sudo group에서 사용자를 제외하면 sudo를 사용할 수 없다.

```sh
# 권장
sudo -i

# 권장하지 않음, 사용자 환경변수를 그대로 사용하기 때문에 위험
sudo su
```

## sudoer 추가

```sh
sudo visudo

# 추가
github-runner ALL=(ALL) NOPASSWD:ALL
```

## sudo 막기 (/etc/sudoers 파일 수정)

```sh
sudo visudo

# 추가
user1 ALL=(ALL) !ALL
# or
%group1 ALL=(ALL) !ALL
# or
user1, user2, user3 ALL=(ALL) !ALL
```

## sudo 막기 (sudo group에서 사용자 제외)

```sh
sudo deluser user1 sudo  # Debian, Ubuntu 계열
sudo gpasswd -d user1 wheel  # RHEL, CentOS 계열 (sudo 대신 wheel 그룹 사용)
```

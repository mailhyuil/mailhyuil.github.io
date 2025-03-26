# wsl ubuntu 설치

```sh
# 설치
wsl --install -d Ubuntu
# 진입
wsl -d Ubuntu

# 설치된 리눅스 확인
wsl --list --verbose

# 기본 리눅스 설정
wsl --set-default Ubuntu
```

## 환경변수 초기화

```sh
# Reset PATH to avoid Windows contamination
export PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
```

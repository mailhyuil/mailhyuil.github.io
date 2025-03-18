# linux cmd useradd

```sh
# 사용자 생성
useradd -m -s /bin/bash <username> # -m 홈 디렉토리 같이 생성 -s 기본 쉘 지정

useradd -d /home/<username> # -d 홈 디렉토리 지정 (/home이 아닌 곳을 지정할 경우)
useradd -u 1500 <username> # -u uid를 1500로 설정

# 사용자 비밀번호 설정
passwd <username>
```

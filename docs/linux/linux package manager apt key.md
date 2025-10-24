# linux package manager apt key

> 공식 저장소에 있는 패키지는 이미 gpg 검증이 되어있음
>
> > 다만 외부 저장소에서 패키지를 설치하는 경우에는 해당 저장소의 신뢰성을 확인하고 GPG 서명을 확인하는 것이 중요합니다.

```sh
# https://download.docker.com/linux/ubuntu 에는 dists와 gpg가 있음
# gpg를 다운받아서 keyrings 폴더에 넣기
# https://download.docker.com/linux/ubuntu 다운로드


apt install ca-certificates curl gnupg lsb-release apt-transport-https -y

mkdir -p /etc/apt/keyrings

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

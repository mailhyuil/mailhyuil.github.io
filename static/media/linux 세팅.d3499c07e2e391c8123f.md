# linux 세팅

> ca-certificates : 인증서 관련 패키지
> curl : url 요청
> gnupg : gpg 암호화
> lsb-release : 운영체제 정보
> apt-transport-https : https로 패키지 다운로드

```sh
apt update -y
apt install ca-certificates curl gnupg lsb-release apt-transport-https -y
apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y
```

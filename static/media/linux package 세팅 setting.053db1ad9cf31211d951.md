# linux package setting

```sh
apt update -y

# 보안
apt install apt-transport-https -y # apt가 https로 패키지를 다운로드

apt install ca-certificates -y # 인증된 CA 모음, 서버가 보낸 인증서가 신뢰성있는지 여기서 확인함 (curl, wget등 사용 시 필요)

apt install gnupg -y # gpg 암호화

apt install fail2ban -y # 실패한 로그인 시도를 감지하고 시스템을 보호
systemctl enable fail2ban --now

# 네트워킹
apt install curl -y # url 요청
apt install dnsutils -y # dig

# 도커
apt install docker-ce -y # docker community edition (도커 엔진, 빌드 실행을 위한 컴포넌트 제공)
apt install docker-ce-cli -y # docker community edition cli (도커 명령어 사용)
apt install containerd.io -y # containerd (컨테이너 런타임)
apt install docker-compose-plugin -y # docker-compose

# 기타 (설치가 안되어 있으면 설치하기)
apt install bash-completion -y # bash 자동완성
apt install cron -y # 크론잡
apt install lsb-release -y # 운영체제 정보
apt install ufw -y # 방화벽
apt install iputils-ping -y # ping
apt install net-tools -y # ifconfig, netstat, route, arp, rarp, nameif and ipmaddr
apt install vim -y # vim
apt install git -y # git
apt install tree -y # tree 구조로 보기
```

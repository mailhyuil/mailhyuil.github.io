# ssh

> 22포트 사용

## install

```sh
# remote-server
apt install openssh-server -y

# client
apt install openssh-client -y

# 키 생성
ssh-keygen -t rsa -m pem
```

## 순서

```markdown
0. openssh-server, openssh-client 설치
1. ssh-keygen -t rsa -m pem // local, remote 둘 다
2. local의 key.pub (public key) 파일의 내용을 remote의 ~/.ssh/authorized_key 파일에 추가
3. ssh -i [local의 key (private key)] [username]@[ip_address] // -i를 입력안하면 자동으로 지정된 경로에서 찾는다.
4. 에러 뜨면 local의 known_hosts 파일을 지워라
```

## /etc/ssh/sshd.config

```sh
# Logging
SyslogFacility LOCAL0
LogLevel Debug3

RSAAuthentication yes
PubkeyAuthentication yes
PasswordAuthentication no # yes로 돼있으면 password 인증이 우선 시 됨
```

## known_hosts vs authorized_keys

> known_hosts : remote server의 public key가 등록 됨 (in local computer)
>
> known_hosts는 해당 서버 접속 시 자동으로 등록이 되고
>
> > authorized_keys : client local의 public key가 등록 됨 (in server computer)
> >
> > authorized_keys는 직접 등록을 해야 해당 클라이언트가 이 컴퓨터로 접속이 가능해진다.

## 옵션

```
-o # ssh-client의 옵션을 설정할 수 있다.
   # ssh -o "UserKnownHostsFile=/dev/null" -o "StrictHostKeyChecking=no" -i [key] [username]@[ip_address]

-p # 포트를 지정

-i # private key를 지정

-L # 로컬 포트 포워딩 (ssh 요청을 받아서 ip:port로 바로 전달)

-R # 원격 포트 포워딩

-D # 다이나믹 포트 포워딩

-N # 원격 명령을 실행하지 않도록 지시
```

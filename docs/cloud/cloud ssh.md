# cloud ssh

> 비밀번호로 접속하는 방법
>
> > 공개키로 접속하는 방법

## 순서 요약

1. 로컬 컴퓨터와 리모트 서버에서 ssh-keygen으로 키 생성 (ssh-keygen -t rsa -m pem)
2. 로컬 컴퓨터의 id_rsa.pub(public key) 파일의 내용을 리모트 서버의 ~/.ssh/authorized_key 파일에 추가
3. ssh -i [로컬 컴퓨터의 id_rsa(private key)] [username]@[ip_address] // -i를 입력안하면 자동으로 지정된 경로에서 찾는다.
4. 에러 뜨면 로컬 컴퓨터의 known_hosts 파일을 지워라

## ssh-keygen

> key pair C:/Users/user/.ssh/id_rsa 생성
>
> > pem으로 생성하기 ssh-keygen -t rsa -m pem

## /etc/ssh/sshd.config

```sh
# Logging
SyslogFacility LOCAL0
LogLevel Debug3

RSAAuthentication yes
PubkeyAuthentication yes
PasswordAuthentication no // yes로 돼있으면 password 인증이 우선 시 됨
```

## ssh로 서버에 접속하기

1. 나의 id_rsa.pub 파일을 접속할 서버로 전송
2. 나의 id_rsa.pub 파일의 내용을 authorized_key 파일에 추가

```sh
cat ~/id_rsa.pub >> ~/.ssh/authorized_keys
```

3. 나의 컴퓨터에서 ssh server_user@ip_address

> 공인 ip_address 또는 서버 접속용 ip_address // 사설ip X
>
> > 개인 키 파일이 위치한 파일 경로가 서버 상에서 인식하고 있는 경로와 다를 경우 서버가 개인 키 파일을 찾지 못합니다.
> >
> > > 이 경우 ssh -i (파일경로) user@ip로

## known_hosts vs authorized_keys

> known_hosts에는 내가 다른 서버에 접속 할 때, 그 서버의 public key가 등록되고
>
> > authorized_keys는 다른 컴퓨터가 client로서 내 서버에 접속하려고 할 때, 그 client의 public key 다.
> >
> > > known_hosts는 해당 서버 접속 시 자동으로 등록이 되고
> > >
> > > > authorized_keys는 직접 등록을 해야 해당 클라이언트가 이 컴퓨터로 접속이 가능해진다.

# ssh-copy-id [리눅스계정명]@[원격IP주소]

# ssh-add key

# ssh -v user@ip

> 디버깅
> -v -vv -vvv 단계 설정

# ERROR

> rsa 파일에 다른 문자가 추가되어있었음
>
> > 권한 600으로 주기

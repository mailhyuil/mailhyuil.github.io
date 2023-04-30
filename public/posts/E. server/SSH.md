# ssh

> 비밀번호로 접속하는 방법
>
> > 공개키로 접속하는 방법

## ssh-keygen

> key pair C:/Users/user/.ssh/id_rsa 생성

## ssh로 서버에 접속하기

1. 나의 rsa.pub 파일을 접속할 서버로 전송
2. 나의 rsa.pub 파일의 내용을 authorized_key 파일에 추가

```
cat ~/rsa.pub >> ~/.ssh/authorized_keys
```

3. 나의 컴퓨터에서 ssh server_user@ip_address

> 공인 ip_address 또는 서버 접속용 ip_address // 사설ip X
>
> > 개인 키 파일이 위치한 파일 경로가 서버 상에서 인식하고 있는 경로와 다를 경우 서버가 개인 키 파일을 찾지 못합니다.
> >
> > > 이 경우 ssh -i (파일경로) user@ip로

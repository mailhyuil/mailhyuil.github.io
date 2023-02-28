# ssh

> 비밀번호로 접속하는 방법
>
> > 공개키로 접속하는 방법

## ssh-keygen

> key pair C:/Users/user/.ssh/id_rsa 생성

## ssh user@ip

> 공인ip 또는 서버 접속용 ip // 사설ip X
>
> > 개인 키 파일이 위치한 파일 경로가 서버 상에서 인식하고 있는 경로와 다를 경우 서버가 개인 키 파일을 찾지 못합니다.
> >
> > > 이 경우 ssh -i (파일경로) user@ip로

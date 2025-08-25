# Docker socket docker.sock

> Unix 소켓 (IPC 소켓)을 사용하여 도커 데몬과 상호 작용을 할 수 있다.
>
> Docker Engine Host OS의 /var/run/docker.sock 아래에 마운트 된 Unix 소켓 (IPC 소켓)
>
> > docker.sock은 도커 컨테이너 내부에서 데몬과 상호 작용을 할 수 있게 해주는 Unix 소켓이다.
> >
> > > 컨테이너의 docker.sock을 로컬의 docker.sock에 마운트하여 도커 컨테이너 내부에서 도커데몬과 상호 작용을 할 수 있다.
> > >
> > > > docker API를 실행하는 주체인 docker daemon에 API요청을 받는 클라이언트

```sh
-v /var/run/docker.sock:/var/run/docker.sock

# Client Machine에서 docker.sock 파일 확인
ls -l docker.sock
# srwxr-xr-x  1 sangbaekyu  staff     0B Feb  4 13:04 docker.sock
# s: 소켓 파일 /// 이 소켓파일은 docker client가 docker container의 docker daemon과 통신하기 위한 소켓파일이다.
```

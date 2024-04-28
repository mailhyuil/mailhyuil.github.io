# linux kernel connection establishment

> tcp에서 커넥션을 수립해주는 주체는 커널이다.
>
> > 커널이 SYN Queue/Accept Queue를 생성한다.
> >
> > 커널의 메모리와 백엔드 프로세스의 메모리는 분리되어 있기 때문에 (커널 메모리, 유저 메모리)
> >
> > > queue가 가득 차면 connection은 거부된다 (backend 프로세스가 일을 빠르게 처리 못할 시 발생)
> > >
> > > backend process가 빠르게 accept()을 호출하는게 성능적으로 중요하다.
> > >
> > > proxy를 통해 backend process를 여러개 둬서 해결할 수 있다.
> > >
> > > > queue의 크기는 backlog 값으로 설정 가능하다 (default: 128)

```sh
kernel create socket & SYN queue / Accept queue
client SYN # kernel이 SYN queue에 저장
kernel SYN/ACK # server SYN/ACK
server ACK # kernel이 SYN queue에서 제거 후 Accept queue에 connection을 저장
backend accept() # accept queue에서 제거
socket file descriptor 생성
send buffer / receive buffer 로 데이터 전송
```

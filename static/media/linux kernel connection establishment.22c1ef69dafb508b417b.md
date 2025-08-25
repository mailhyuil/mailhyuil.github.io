# linux kernel connection establishment

> tcp에서 커넥션을 수립해주는 주체는 커널이다.
>
> > 커널은 SYN Queue와 Accept Queue를 가지고 있다.
> >
> > > queue가 가득 차면 connection은 거부된다 (backend 프로세스가 일을 빠르게 처리 못할 시 발생)
> > >
> > > backend process가 빠르게 accept()을 호출하는게 성능적으로 중요하다.
> > >
> > > proxy를 통해 backend process를 여러개 둬서 해결할 수 있다.
> > >
> > > > queue의 크기는 backlog 값으로 설정 가능하다 (default: 128)

```sh
client SYN # kernel이 SYN queue에 저장
kernel SYN/ACK # server SYN/ACK
client ACK # kernel이 SYN queue에서 제거 -> socket과 socket descriptor를 생성 -> Accept queue에 저장 (socket은 pending 상태)

server accept() # Accept queue에 있는 첫번째 connection을 가져옴 (socket이 connected 상태가 됨)

client send data # client가 데이터를 전송
kernel put it into receive buffer # kernel의 receive buffer에 데이터를 저장
server read() or recv() # socket의 receive buffer에서 데이터를 읽음
server write() or send() # socket의 send buffer에 데이터를 저장
kernel put it into send buffer # kernel의 send buffer에 데이터를 저장
kernel send data # client에 데이터를 전송

server close() # connection 종료
kernel connection closed # socket file descriptor 제거
```

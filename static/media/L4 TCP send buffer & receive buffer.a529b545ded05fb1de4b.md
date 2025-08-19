# L4 TCP send buffer & receive buffer

> 리눅스 커널이 제공하는 버퍼
>
> > 클라이언트가 보낸 데이터는 receive-buffer에 저장되고, 서버가 보낸 데이터는 send-buffer에 저장됨
> >
> > > 버퍼가 가득차면 데이터 손실 발생
> > >
> > > > flow control을 통해 버퍼가 가득차지 않도록 조절해야한다.

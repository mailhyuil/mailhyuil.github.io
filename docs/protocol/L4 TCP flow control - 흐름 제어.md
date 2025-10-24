# L4 TCP flow control - 흐름 제어

> 송신측의 속도가 수신측의 처리 속도보다 빠르면 문제가 발생 (receive buffer가 가득차면 더 이상 연결을 받지 않음)
>
> > 수신측의 처리 속도를 맞추기 위해 송신측에서 데이터 전송 속도를 조절

## stop and wait

> 클라이언트는 ACK를 받아야만 다음 데이터를 전송
>
> > 서버는 버퍼가 가득차면 ACK를 보내지 않음
> >
> > > 버퍼가 비면 ACK를 보내고 클라이언트는 다음 데이터를 전송
> > >
> > > > 비효율적

## sliding window

> rwnd(window size) : 수신측이 받을 수 있는 최대 데이터 크기 (header에 크기가 명시되어 있음)
>
> > sending buffer: 보낸 데이터에 대한 ACK이 오면 keep해놓고 있던 데이터를 버리고 window를 전체적으로 오른쪽으로 이동한다.
> >
> > receiving buffer: 받은 데이터를 소비하고 나면 빈 공간은 버리고 window를 역시 전체적으로 오른 쪽으로 이동한다.

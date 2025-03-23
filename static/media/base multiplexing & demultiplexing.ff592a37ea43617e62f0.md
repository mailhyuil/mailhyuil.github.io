# multiplexing & demultiplexing (다중화와 역다중화)

## multiplexing (다중화)

> 다중화는 여러 개의 데이터 스트림을 하나의 데이터 스트림으로 합치는 것을 의미한다.
>
> > e.g. http/2는 하나의 TCP 연결로 여러 개의 데이터 스트림을 전송할 수 있다.

## demultiplexing (역다중화)

> 하나의 데이터 스트림에서 여러 개의 데이터 스트림으로 분리하는 것을 의미한다.
>
> > e.g. http/2 서버는 하나의 TCP 연결로 여러 개의 데이터 스트림을 구분하여 처리할 수 있다. (stream id로 구분)

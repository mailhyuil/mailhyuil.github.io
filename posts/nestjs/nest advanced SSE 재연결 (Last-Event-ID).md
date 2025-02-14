# nest advanced SSE 재연결 (Last-Event-Id)

> SSE로 데이터 전송 중 연결이 끊기는 경우 브라우저는 연결을 자동으로 재시도(Reconnection)함.
>
> > 재연결 시, 브라우저는 마지막으로 받은 이벤트 ID를 Last-Event-ID 헤더에 포함하여 서버에 전송함.
> >
> > > 서버는 Last-Event-ID를 통해 이를 처리하는 로직을 직접 구현할 수 있음

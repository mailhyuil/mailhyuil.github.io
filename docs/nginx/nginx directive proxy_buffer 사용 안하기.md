# nginx directive proxy_buffer 사용 안하기

> 기본적으로 Nginx는 프록시 서버에서 수신한 응답을 디스크나 메모리에 버퍼링하여 클라이언트로 전송합니다.
>
> > 실시간 응답이 필요한 경우(예: 실시간 데이터 스트림이나 WebSocket) 버퍼링이 지연을 초래할 수 있으므로 이 옵션을 비활성화하여 실시간성을 높입니다.
> >
> > 이를 위해 `proxy_buffering off;`를 사용합니다.

```conf
proxy_buffering off;
proxy_max_temp_file_size 0;
```

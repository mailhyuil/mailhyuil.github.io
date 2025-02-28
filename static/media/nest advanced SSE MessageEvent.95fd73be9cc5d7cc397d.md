# nest advanced SSE MessageEvent

> type을 지정하면 클라이언트에서 addEventListener("type", ()=>)로 이벤트를 받을 수 있다.
>
> data가 반드시 있어야 메세지를 전송한다.

## MessageEvent

```
interface MessageEvent<T = any>
{
  data: string | ArrayBuffer | Blob | ArrayBufferView | ReadableStream | null;
  type?: string;
  lastEventId?: string;
  origin?: string;
  ports?: ReadonlyArray<MessagePort>;
}
```

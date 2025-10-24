# L7 JSON-RPC

> JSON-RPC 2.0 message format / RPC protocol
>
> > json을 사용한 stateless, light-weight remote procedure call 프로토콜
> >
> > > 구체적인 기술에 의존하지 않고 소켓(socket), HTTP 그리고 다양한 네트워크 기술에 적용될 수 있는 통신 규약
> > >
> > > > MCP, Ethereum / Web3, Extension Server 등에 사용된다.
> > > >
> > > > > json-rpc 1.0과 2.0은 호환되지 않으므로 반드시 jsonrpc 버전을 지정해야 한다.

## Request Object

```json
{
  "jsonrpc": "2.0",
  "method": "function_name",
  "params": ["param1", "param2"],
  "id": 1
}
```

## Notification Request Object

> id가 존재하지 않는 Request Object
>
> > no Response object needs to be returned to the client

```json
{
  "jsonrpc": "2.0",
  "method": "function_name",
  "params": ["param1", "param2"]
}
```

## Batch Request

> Request Object를 Array에 담아서 보내기
>
> > 각 Request Object에 대한 Response Object도 Array로 반환된다.
> >
> > > Notification을 제외한 모든 Request Object는 Response Object를 반환해야 한다.

```json
[
  {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "function_name",
    "params": ["param1", "param2"]
  }
]
```

## Response Object

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  /**
  # result
  This member is REQUIRED on success. (성공 시 반드시 제공되어야 한다.)
  This member MUST NOT exist if there was an error invoking the method. (에러가 발생 시 절대 제공되지 않는다.)
  The value of this member is determined by the method invoked on the Server. (서버에서 호출된 메서드에 의해 결정된다.)
  */
  "result": "result",
  /**
  # error
  This member is REQUIRED on error. (에러 시 반드시 제공되어야 한다.)
  This member MUST NOT exist if there was no error triggered during invocation. (호출 중 에러가 발생하지 않았다면 절대 제공되지 않는다.)
  The value for this member MUST be an Object as defined in section 5.1. (Error Object 명세를 따라야 한다.)
  */
  "error": null
}
```

## Error Object

```json
{
  "jsonrpc": "2.0",
  "id": null,
  "error": {
    "code": -32601,
    "message": "Method not found",
    "data": "some data"
  }
}
/** error code
-32700: Parse error
-32600: Invalid Request
-32601: Method not found
-32602: Invalid params
-32603: Internal error
-32000 to -32099: Server error
*/
```
